"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { apiUrl } from "@/lib/api";

interface Portfolio {
  id: string;
  title: string;
  category: string;
  image: string;
}

const EMPTY_PORTFOLIO = { title: "", category: "", image: "" };

export default function PortfolioManager() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [draft, setDraft] = useState(EMPTY_PORTFOLIO);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const loadPortfolios = async () => {
    const response = await fetch(apiUrl("/api/v1/admin/portfolios"), { cache: "no-store" });
    const result: Portfolio[] | { detail?: string } = await response.json();
    if (!response.ok || !Array.isArray(result)) {
      throw new Error(!Array.isArray(result) ? result.detail ?? "Portofolio gagal dimuat." : "Portofolio gagal dimuat.");
    }
    setPortfolios(result);
  };

  useEffect(() => {
    let active = true;
    fetch(apiUrl("/api/v1/admin/portfolios"), { cache: "no-store" })
      .then(async (response) => {
        const result: Portfolio[] | { detail?: string } = await response.json();
        if (!response.ok || !Array.isArray(result)) {
          throw new Error(!Array.isArray(result) ? result.detail ?? "Portofolio gagal dimuat." : "Portofolio gagal dimuat.");
        }
        if (active) setPortfolios(result);
      })
      .catch((reason: unknown) => {
        console.error("Failed to load portfolios:", reason);
        if (active) setError(reason instanceof Error ? reason.message : "Portofolio gagal dimuat.");
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const startEdit = (portfolio: Portfolio) => {
    setEditingId(portfolio.id);
    setDraft({ title: portfolio.title, category: portfolio.category, image: portfolio.image });
    setError("");
    setNotice("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setDraft(EMPTY_PORTFOLIO);
  };

  const savePortfolio = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);
    setError("");
    setNotice("");
    try {
      const response = await fetch(
        apiUrl(`/api/v1/admin/portfolios${editingId ? `/${editingId}` : ""}`),
        {
          method: editingId ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(draft),
        },
      );
      const result: Portfolio | { detail?: string } = await response.json();
      if (!response.ok || !("id" in result)) {
        throw new Error("detail" in result ? result.detail ?? "Portofolio gagal disimpan." : "Portofolio gagal disimpan.");
      }
      await loadPortfolios();
      cancelEdit();
      setNotice("Portofolio tersimpan dan akan tampil di halaman Home.");
    } catch (reason: unknown) {
      console.error("Failed to save portfolio:", reason);
      setError(reason instanceof Error ? reason.message : "Portofolio gagal disimpan.");
    } finally {
      setIsSaving(false);
    }
  };

  const deletePortfolio = async (portfolio: Portfolio) => {
    if (!window.confirm(`Hapus portofolio "${portfolio.title}"?`)) return;
    setError("");
    setNotice("");
    try {
      const response = await fetch(apiUrl(`/api/v1/admin/portfolios/${portfolio.id}`), {
        method: "DELETE",
      });
      if (!response.ok) {
        const result: { detail?: string } = await response.json();
        throw new Error(result.detail ?? `Gagal menghapus portofolio (${response.status}).`);
      }
      await loadPortfolios();
      if (editingId === portfolio.id) cancelEdit();
      setNotice("Portofolio dihapus dari halaman Home.");
    } catch (reason: unknown) {
      console.error("Failed to delete portfolio:", reason);
      setError(reason instanceof Error ? reason.message : "Portofolio gagal dihapus.");
    }
  };

  return (
    <section className="mx-auto max-w-7xl space-y-5">
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900">Portfolio Gallery</h2>
          <p className="mt-1 text-xs text-slate-500">Kelola proyek yang ditampilkan pada halaman Home.</p>
        </div>
        <button
          type="button"
          onClick={() => {
            cancelEdit();
            setError("");
            setNotice("");
          }}
          className="rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-indigo-600/20 transition hover:bg-indigo-700"
        >
          Add Portfolio
        </button>
      </div>

      {error && <p role="alert" className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700">{error}</p>}
      {notice && <p role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">{notice}</p>}

      {editingId === null && (
        <form onSubmit={savePortfolio} className="grid grid-cols-1 gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-4">
          <h3 className="text-sm font-bold text-slate-900 md:col-span-4">Add a portfolio item</h3>
          <input required maxLength={180} value={draft.title} onChange={(event) => setDraft((value) => ({ ...value, title: event.target.value }))} placeholder="Project title" aria-label="Project title" className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400" />
          <input required maxLength={120} value={draft.category} onChange={(event) => setDraft((value) => ({ ...value, category: event.target.value }))} placeholder="Category" aria-label="Category" className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400" />
          <input required maxLength={1000} value={draft.image} onChange={(event) => setDraft((value) => ({ ...value, image: event.target.value }))} placeholder="Image path or URL" aria-label="Image path or URL" className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400" />
          <button disabled={isSaving} className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60">{isSaving ? "Saving..." : "Add"}</button>
        </form>
      )}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-xs">
            <thead className="border-b border-slate-100 bg-slate-50 text-[10px] uppercase tracking-wider text-slate-400">
              <tr><th className="p-4 font-semibold">Project</th><th className="p-4 font-semibold">Category</th><th className="p-4 font-semibold">Image</th><th className="p-4 text-right font-semibold">Actions</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {isLoading ? (
                <tr><td colSpan={4} className="py-10 text-center text-slate-500">Loading portfolios...</td></tr>
              ) : portfolios.length === 0 ? (
                <tr><td colSpan={4} className="py-10 text-center text-slate-500">No portfolio items found.</td></tr>
              ) : portfolios.map((portfolio) => (
                <tr key={portfolio.id} className="hover:bg-slate-50/70">
                  <td className="p-4 font-semibold text-slate-800">{portfolio.title}</td>
                  <td className="p-4 text-slate-500">{portfolio.category}</td>
                  <td className="max-w-[250px] truncate p-4 text-slate-500" title={portfolio.image}>{portfolio.image}</td>
                  <td className="space-x-2 p-4 text-right">
                    <button type="button" onClick={() => startEdit(portfolio)} className="font-semibold text-indigo-600 hover:text-indigo-800">Edit</button>
                    <button type="button" onClick={() => void deletePortfolio(portfolio)} className="font-semibold text-rose-600 hover:text-rose-800">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {editingId !== null && (
        <form onSubmit={savePortfolio} className="grid grid-cols-1 gap-3 rounded-2xl border border-indigo-200 bg-white p-5 shadow-sm md:grid-cols-4">
          <h3 className="text-sm font-bold text-slate-900 md:col-span-4">Edit portfolio item</h3>
          <input required maxLength={180} value={draft.title} onChange={(event) => setDraft((value) => ({ ...value, title: event.target.value }))} placeholder="Project title" aria-label="Project title" className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400" />
          <input required maxLength={120} value={draft.category} onChange={(event) => setDraft((value) => ({ ...value, category: event.target.value }))} placeholder="Category" aria-label="Category" className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400" />
          <input required maxLength={1000} value={draft.image} onChange={(event) => setDraft((value) => ({ ...value, image: event.target.value }))} placeholder="Image path or URL" aria-label="Image path or URL" className="rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400" />
          <div className="flex gap-2">
            <button disabled={isSaving} className="flex-1 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60">{isSaving ? "Saving..." : "Save"}</button>
            <button type="button" onClick={cancelEdit} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700">Cancel</button>
          </div>
        </form>
      )}
    </section>
  );
}
