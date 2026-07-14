import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export function localize(locale: Locale, href: string) {
  if (href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  const clean = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${clean === "/" ? "" : clean}`;
}

export function LocalizedLink({ locale, href, ...props }: Omit<React.ComponentProps<typeof Link>, "href"> & { locale: Locale; href: string }) {
  return <Link href={localize(locale, href) as never} {...props} />;
}
