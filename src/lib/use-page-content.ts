"use client";

import { useEffect, useMemo, useState } from "react";
import { SITE_PAGE_CONTENT_DEFAULTS } from "@/lib/page-content-defaults";
import type { PageContent } from "@/lib/page-content-types";
import { apiUrl } from "@/lib/api";
import { translateText } from "@/lib/translations";
import { useLocale } from "@/lib/i18n";

export function usePageContent(pageSlug: keyof typeof SITE_PAGE_CONTENT_DEFAULTS) {
  const { locale } = useLocale();
  const [content, setContent] = useState<PageContent>(SITE_PAGE_CONTENT_DEFAULTS[pageSlug]);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    const refreshContent = () => {
      fetch(apiUrl(`/api/v1/content/${pageSlug}`), { cache: "no-store" })
        .then(async (response) => {
          if (!response.ok) throw new Error(`Server returned ${response.status}.`);
          const data: { content: PageContent } = await response.json();
          if (active) {
            setContent((previous) => ({ ...previous, ...data.content }));
            setError("");
          }
        })
        .catch((reason: unknown) => {
          console.error(`Failed to load ${pageSlug} page content:`, reason);
          if (active) setError("Konten terbaru belum dapat dimuat. Konten awal tetap ditampilkan.");
        });
    };

    refreshContent();
    window.addEventListener("focus", refreshContent);

    return () => {
      active = false;
      window.removeEventListener("focus", refreshContent);
    };
  }, [pageSlug]);

  const localizedContent = useMemo(
    () => {
      const localized: PageContent = {};
      for (const [key, value] of Object.entries(content)) {
        localized[key] = translateText(value, locale);
      }
      return localized;
    },
    [content, locale],
  );

  return { content: localizedContent, error };
}
