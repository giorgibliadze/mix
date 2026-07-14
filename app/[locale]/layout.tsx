import { notFound } from "next/navigation"; import { isLocale } from "@/lib/i18n";
import { NextIntlClientProvider } from "next-intl";
import { getDictionary } from "@/lib/i18n";
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){const {locale}=await params;if(!isLocale(locale))notFound();return <NextIntlClientProvider locale={locale} messages={getDictionary(locale)}>{children}</NextIntlClientProvider>}
