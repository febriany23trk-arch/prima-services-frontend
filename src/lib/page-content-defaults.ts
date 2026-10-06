import { MAIN_PAGE_CONTENT_DEFAULTS } from "@/lib/page-content-defaults-main";
import { SOLUTION_PAGE_CONTENT_DEFAULTS } from "@/lib/page-content-defaults-solutions";
import { SHARED_PAGE_CONTENT_DEFAULTS } from "@/lib/page-content-defaults-shared";
import { MEDIA_CONTENT_DEFAULTS } from "@/lib/page-content-defaults-media";
import type { PageContentMap } from "@/lib/page-content-types";

const pageContentDefaults: PageContentMap = {
  ...MAIN_PAGE_CONTENT_DEFAULTS,
  ...SOLUTION_PAGE_CONTENT_DEFAULTS,
  ...SHARED_PAGE_CONTENT_DEFAULTS,
};

for (const [slug, mediaContent] of Object.entries(MEDIA_CONTENT_DEFAULTS)) {
  pageContentDefaults[slug] = { ...pageContentDefaults[slug], ...mediaContent };
}

export const SITE_PAGE_CONTENT_DEFAULTS = pageContentDefaults;

const stylingValuePattern =
  /(^|\s)(?:@keyframes|(?:sm|md|lg|xl|2xl):)*(?:-?(?:bg-|text-|border-|rounded|from-|via-|to-|hover:|group-hover:|focus:|w-|h-|min-w-|max-w-|min-h-|max-h-|p-|px-|py-|pt-|pb-|m-|mx-|my-|mt-|mb-|gap-|top-|left-|right-|bottom-|z-|duration-|opacity-|scale-|space-y-|grid|flex|items-|justify-|leading-|font-|shadow|absolute|relative|overflow-|pointer-events-|animate-|transition|object-|col-span-|row-span-|block|inline-|hidden|cursor-|tracking-|select-|backdrop-|fill-|stroke-|ring-|outline-))/i;

for (const pageContent of Object.values(SITE_PAGE_CONTENT_DEFAULTS)) {
  for (const [key, value] of Object.entries(pageContent)) {
    if (stylingValuePattern.test(value.trim())) delete pageContent[key];
  }
}

export const SITE_PAGE_LABELS: Record<keyof typeof SITE_PAGE_CONTENT_DEFAULTS, string> = {
  home: "Home",
  about: "About",
  services: "Services",
  contact: "Contact",
  "solutions-cloud": "Google Cloud",
  "solutions-iso": "ISO Consulting",
  "solutions-it": "IT Managed Services",
  "solutions-sobot": "Sobot.io",
  "solutions-workspace": "Google Workspace",
  shared: "Navigation & Footer",
};

export function isSitePageSlug(slug: string): slug is keyof typeof SITE_PAGE_CONTENT_DEFAULTS {
  return Object.hasOwn(SITE_PAGE_CONTENT_DEFAULTS, slug);
}

export function mergePageContent(
  slug: keyof typeof SITE_PAGE_CONTENT_DEFAULTS,
  stored: Record<string, string> | undefined,
) {
  return Object.fromEntries(
    Object.entries(SITE_PAGE_CONTENT_DEFAULTS[slug]).map(([key, fallback]) => [
      key,
      typeof stored?.[key] === "string" ? stored[key] : fallback,
    ]),
  );
}
