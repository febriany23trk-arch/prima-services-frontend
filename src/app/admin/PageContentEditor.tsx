"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ImagePlus, Loader2, Plus, Trash2, Upload } from "lucide-react";
import { SITE_PAGE_LABELS, SITE_PAGE_CONTENT_DEFAULTS } from "@/lib/page-content-defaults";
import type { PageContent, PageContentMap } from "@/lib/page-content-types";
import { apiUrl } from "@/lib/api";

type PageSlug = keyof typeof SITE_PAGE_LABELS;

function formatFieldLabel(key: string): string {
  return key
    .split(".")
    .map((part) =>
      part
        .replace(/[-_]/g, " ")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/\b\w/g, (letter) => letter.toUpperCase()),
    )
    .join(" / ");
}

export default function PageContentEditor() {
  const pageSlugs = Object.keys(SITE_PAGE_LABELS) as PageSlug[];
  const [pageSlug, setPageSlug] = useState<PageSlug>(pageSlugs[0]);
  const [pageContents, setPageContents] = useState<PageContentMap>({});
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [uploadingSlide, setUploadingSlide] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    fetch(apiUrl("/api/v1/admin/content"), { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error(`Gagal mengambil konten (${response.status}).`);
        const content: PageContentMap = await response.json();
        if (active) setPageContents(content);
      })
      .catch((reason: unknown) => {
        console.error("Failed to load editable site content:", reason);
        if (active) {
          setError(reason instanceof Error ? reason.message : "Konten halaman gagal dimuat.");
        }
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const content = pageContents[pageSlug] ?? SITE_PAGE_CONTENT_DEFAULTS[pageSlug];
  const heroSlideCount = Math.min(
    10,
    Math.max(1, Number.parseInt(content["hero-slides.count"] ?? "4", 10) || 4),
  );
  const showHeroSlides =
    pageSlug === "home" && (!search || /hero|slider|gambar|slide/i.test(search));
  const fields = useMemo(
    () =>
      Object.entries(content).filter(([key, value]) =>
        `${key} ${formatFieldLabel(key)} ${value}`.toLowerCase().includes(search.toLowerCase()),
      ),
    [content, search],
  );
  const editableFields = fields.filter(
    ([key]) => !/^hero-slides\.(?:count|\d+\.(?:src|alt|href|link|imageSrc))$/.test(key),
  );
  const fieldGroups = useMemo(() => {
    const groups = new Map<string, [string, string][]>();
    for (const field of editableFields) {
      const parts = field[0].split(".");
      const root = parts[0] === pageSlug ? parts.slice(1) : parts;
      const group = formatFieldLabel(root.slice(0, Math.min(2, root.length - 1)).join(".") || root[0]);
      groups.set(group, [...(groups.get(group) ?? []), field]);
    }
    return [...groups.entries()];
  }, [editableFields, pageSlug]);

  const updateField = (key: string, value: string) => {
    setPageContents((previous) => ({
      ...previous,
      [pageSlug]: { ...(previous[pageSlug] ?? content), [key]: value },
    }));
    setNotice("");
  };

  const uploadHeroSlide = async (index: number, file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Pilih file gambar yang valid.");
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      setError("Ukuran gambar maksimal 4 MB.");
      return;
    }

    setUploadingSlide(index);
    setError("");
    setNotice("");
    try {
      const formData = new FormData();
      formData.set("image", file);
      const response = await fetch(apiUrl("/api/v1/admin/media"), {
        method: "POST",
        body: formData,
      });
      const result: { src?: string; detail?: string } = await response.json();
      if (!response.ok || !result.src) {
        throw new Error(result.detail ?? `Gagal mengunggah gambar (${response.status}).`);
      }
      updateField(`hero-slides.${index}.src`, result.src);
      setNotice("Gambar berhasil diunggah. Tekan Simpan & Terbitkan untuk memperbarui slider.");
    } catch (reason: unknown) {
      console.error("Failed to upload a Home hero slide:", reason);
      setError(reason instanceof Error ? reason.message : "Gambar gagal diunggah.");
    } finally {
      setUploadingSlide(null);
    }
  };

  const addHeroSlide = () => {
    if (heroSlideCount >= 10) return;
    const newSlide = {
      image: "",
      alt: `Slide ${heroSlideCount + 1}`,
      link: "", // Pastikan properti link didefinisikan
    };
    updateField("hero-slides.count", String(heroSlideCount + 1));
    updateField(`hero-slides.${heroSlideCount}.src`, newSlide.image);
    updateField(`hero-slides.${heroSlideCount}.alt`, newSlide.alt);
    updateField(`hero-slides.${heroSlideCount}.href`, newSlide.link);
  };

  const removeHeroSlide = (index: number) => {
    if (heroSlideCount <= 1) return;
    for (let slideIndex = index; slideIndex < heroSlideCount - 1; slideIndex += 1) {
      updateField(
        `hero-slides.${slideIndex}.src`,
        content[`hero-slides.${slideIndex + 1}.src`] ?? "",
      );
      updateField(
        `hero-slides.${slideIndex}.alt`,
        content[`hero-slides.${slideIndex + 1}.alt`] ?? `Slide ${slideIndex + 1}`,
      );
      updateField(
        `hero-slides.${slideIndex}.href`,
        content[`hero-slides.${slideIndex + 1}.href`] ?? "",
      );
    }
    updateField(`hero-slides.${heroSlideCount - 1}.src`, "");
    updateField(`hero-slides.${heroSlideCount - 1}.alt`, "");
    updateField(`hero-slides.${heroSlideCount - 1}.href`, "");
    updateField("hero-slides.count", String(heroSlideCount - 1));
  };

  const savePage = async () => {
    if (
      pageSlug === "home" &&
      Array.from({ length: heroSlideCount }, (_, index) => content[`hero-slides.${index}.src`]?.trim())
        .some((src) => !src)
    ) {
      setError("Setiap slide harus memiliki gambar. Unggah gambar atau hapus slide yang masih kosong.");
      setNotice("");
      return;
    }

    setIsSaving(true);
    setError("");
    setNotice("");
    try {
      const response = await fetch(apiUrl(`/api/v1/admin/content/${pageSlug}`), {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      const result: { content?: PageContent; detail?: string } = await response.json();
      if (!response.ok || !result.content) {
        throw new Error(result.detail ?? `Gagal menyimpan konten (${response.status}).`);
      }
      setPageContents((previous) => ({ ...previous, [pageSlug]: result.content! }));
      setNotice("Perubahan tersimpan dan akan tampil di halaman publik.");
    } catch (reason: unknown) {
      console.error(`Failed to save ${pageSlug} page content:`, reason);
      setError(reason instanceof Error ? reason.message : "Konten gagal disimpan.");
    } finally {
      setIsSaving(false);
    }
  };

  const pagePath = pageSlug === "shared" || pageSlug === "home"
    ? "/"
    : pageSlug.startsWith("solutions-")
      ? `/solutions/${pageSlug.slice("solutions-".length)}`
      : `/${pageSlug}`;

  return (
    <section className="mx-auto max-w-7xl space-y-5">
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900">Public Page Content</h2>
          <p className="mt-1 text-xs text-slate-500">
            Kelola konten per halaman, unggah gambar slider Home, lalu simpan untuk menerbitkan perubahan.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={pagePath}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            Preview Page
          </a>
          <button
            type="button"
            onClick={savePage}
            disabled={isLoading || isSaving || uploadingSlide !== null}
            className="rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/20 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSaving ? "Saving..." : "Save & Publish"}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row">
        <label className="flex-1 text-xs font-semibold text-slate-600">
          Halaman
          <select
            value={pageSlug}
            onChange={(event) => {
              setPageSlug(event.target.value as PageSlug);
              setSearch("");
              setNotice("");
              setError("");
            }}
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          >
            {pageSlugs.map((slug) => (
              <option key={slug} value={slug}>{SITE_PAGE_LABELS[slug]}</option>
            ))}
          </select>
        </label>
        <label className="flex-1 text-xs font-semibold text-slate-600">
          Cari field
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Contoh: hero, tombol, harga..."
            className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-normal text-slate-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </label>
      </div>

      {error && <p role="alert" className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}
      {notice && <p role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">{notice}</p>}

      {showHeroSlides && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Slider halaman Home</h3>
              <p className="mt-1 text-xs text-slate-500">
                {heroSlideCount} dari 10 slide. Gambar disimpan di database agar tetap tersedia setelah deploy Vercel.
              </p>
            </div>
            <button
              type="button"
              onClick={addHeroSlide}
              disabled={heroSlideCount >= 10 || isLoading || isSaving}
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 px-3 py-2 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Plus className="h-4 w-4" />
              Tambah slide
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            {Array.from({ length: heroSlideCount }, (_, index) => {
              const source = content[`hero-slides.${index}.src`] ?? "";
              const alt = content[`hero-slides.${index}.alt`] ?? "";
              return (
                <article key={index} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Slide {index + 1}</h4>
                      <p className="mt-0.5 text-[11px] text-slate-500">Gambar utama yang tampil di slider Home</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeHeroSlide(index)}
                      disabled={heroSlideCount <= 1 || isSaving || uploadingSlide !== null}
                      aria-label={`Hapus slide ${index + 1}`}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="relative mb-3 flex h-44 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white">
                    {source ? (
                      <Image
                        src={source}
                        alt={alt || `Pratinjau slide ${index + 1}`}
                        fill
                        unoptimized
                        sizes="(max-width: 1280px) 100vw, 50vw"
                        className="object-contain p-2"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-slate-400">
                        <ImagePlus className="h-8 w-8" />
                        <span className="text-xs">Belum ada gambar</span>
                      </div>
                    )}
                  </div>

                  <label className="block text-xs font-semibold text-slate-700">
                    Teks alternatif gambar
                    <input
                      value={alt}
                      onChange={(event) => updateField(`hero-slides.${index}.alt`, event.target.value)}
                      maxLength={500}
                      placeholder="Deskripsi singkat gambar"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-normal text-slate-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    />
                  </label>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <p className="max-w-full truncate text-[11px] text-slate-500" title={source}>
                      {source || "Unggah gambar untuk melengkapi slide ini"}
                    </p>
                    <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-indigo-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-indigo-700">
                      {uploadingSlide === index ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Upload className="h-4 w-4" />
                      )}
                      {uploadingSlide === index ? "Mengunggah..." : source ? "Ganti gambar" : "Unggah gambar"}
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp,image/avif,image/gif"
                        className="sr-only"
                        disabled={uploadingSlide !== null || isSaving}
                        onChange={(event) => {
                          const file = event.target.files?.[0];
                          event.target.value = "";
                          if (file) void uploadHeroSlide(index, file);
                        }}
                      />
                    </label>
                  </div>
                  <p className="mt-2 text-[10px] text-slate-400">JPEG, PNG, WebP, AVIF, atau GIF · Maks. 4 MB</p>
                </article>
              );
            })}
          </div>
        </section>
      )}

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900">{SITE_PAGE_LABELS[pageSlug]}</h3>
            <p className="mt-0.5 text-[11px] text-slate-500">{editableFields.length} field teks dan pengaturan</p>
          </div>
          <Link href={pagePath} target="_blank" className="text-xs font-semibold text-indigo-600 hover:text-indigo-800">
            Buka halaman publik
          </Link>
        </div>

        {isLoading ? (
          <p className="py-10 text-center text-sm text-slate-500">Memuat konten dari database...</p>
        ) : editableFields.length ? (
          <div className="space-y-3">
            {fieldGroups.map(([group, groupFields]) => (
              <details key={group} open className="rounded-xl border border-slate-200">
                <summary className="cursor-pointer list-none rounded-xl bg-slate-50 px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-100">
                  <span className="flex items-center justify-between gap-3">
                    {group}
                    <span className="text-[10px] font-medium text-slate-400">{groupFields.length} field</span>
                  </span>
                </summary>
                <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-2">
                  {groupFields.map(([key, value]) => {
                    const isLongText = value.length > 120 || /\.(?:description|desc|body|mission|vision|message|text)(?:\.|$)/i.test(key);
                    return (
                      <label key={key} className="block text-xs font-semibold text-slate-700">
                        <span>{formatFieldLabel(key)}</span>
                        {isLongText ? (
                          <textarea
                            value={value}
                            onChange={(event) => updateField(key, event.target.value)}
                            rows={value.length > 240 ? 5 : 3}
                            maxLength={10000}
                            className="mt-1.5 w-full resize-y rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-normal leading-relaxed text-slate-800 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                          />
                        ) : (
                          <input
                            value={value}
                            onChange={(event) => updateField(key, event.target.value)}
                            maxLength={10000}
                            className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-normal text-slate-800 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                          />
                        )}
                        {/(?:href|src|imageSrc)$/i.test(key) && (
                          <span className="mt-1 block text-[10px] font-normal text-slate-400">
                            Masukkan URL lengkap atau path file yang diawali /.
                          </span>
                        )}
                      </label>
                    );
                  })}
                </div>
              </details>
            ))}
          </div>
        ) : (
          <p className="py-10 text-center text-sm text-slate-500">
            {search ? "Tidak ada field yang cocok dengan pencarian." : "Belum ada field konten yang didaftarkan untuk halaman ini."}
          </p>
        )}
      </div>
    </section>
  );
}