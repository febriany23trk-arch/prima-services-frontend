import { apiUrl } from "@/lib/api";

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  image: string;
}

export async function getPortfolios(): Promise<PortfolioItem[]> {
  const response = await fetch(apiUrl("/api/v1/portfolios"), { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Gagal mengambil portofolio (${response.status}).`);
  }

  const result: { data: PortfolioItem[] } = await response.json();
  return result.data;
}