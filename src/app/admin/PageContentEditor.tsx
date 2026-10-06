"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
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
  const fields = useMemo(
    () =>
      Object.entries(content).filter(([key, value]) =>
        `${key} ${formatFieldLabel(key)} ${value}`.toLowerCase().includes(search.toLowerCase()),
      ),
    [content, search],
  );

  const updateField = (key: string, value: string) => {
    setPageContents((previous) => ({
      ...previous,
      [pageSlug]: { ...(previous[pageSlug] ?? content), [key]: value },
    }));
    setNotice("");
  };

  const savePage = async () => {
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
            Edit teks, judul, tautan, pilihan, dan path media. Simpan untuk menerbitkan perubahan dari database.
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
            disabled={isLoading || isSaving}
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

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900">{SITE_PAGE_LABELS[pageSlug]}</h3>
            <p className="mt-0.5 text-[11px] text-slate-500">{fields.length} field konten</p>
          </div>
          <Link href={pagePath} target="_blank" className="text-xs font-semibold text-indigo-600 hover:text-indigo-800">
            Buka halaman publik
          </Link>
        </div>

        {isLoading ? (
          <p className="py-10 text-center text-sm text-slate-500">Memuat konten dari database...</p>
        ) : fields.length ? (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {fields.map(([key, value]) => (
              <label key={key} className="block text-xs font-semibold text-slate-700">
                <span>{formatFieldLabel(key)}</span>
                <textarea
                  value={value}
                  onChange={(event) => updateField(key, event.target.value)}
                  rows={value.length > 130 ? 4 : 2}
                  className="mt-1.5 w-full resize-y rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-normal leading-relaxed text-slate-800 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                />
              </label>
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
