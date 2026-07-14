import ka from "@/messages/ka.json";
import en from "@/messages/en.json";
import ru from "@/messages/ru.json";

export const locales = ["ka", "en", "ru"] as const;
export type Locale = (typeof locales)[number];
export const industrySlugs = ["construction", "tourism", "ecommerce", "healthcare", "ai-automation"] as const;
export type IndustrySlug = (typeof industrySlugs)[number];

export type IndustryCopy = {
 nav:string; badge:string; title:string; subtitle:string; heroPrimary:string; heroSecondary:string; cardText:string;
 problemsTitle:string; problems:string[]; solutionTitle:string; features:string[]; results:string[];
 journeyTitle:string; journey:string[]; aiTitle:string; ai:string[]; process:string[];
 faq:{question:string;answer:string}[]; finalCta:string; description:string; keywords:string[];
};

export type Dictionary = Omit<typeof ka, "industries"> & {industries:Record<IndustrySlug,IndustryCopy>};
const dictionaries:Record<Locale,Dictionary>={ka:ka as Dictionary,en:en as Dictionary,ru:ru as Dictionary};

export function getDictionary(locale:Locale):Dictionary{return dictionaries[locale]}
export function isLocale(value:string):value is Locale{return locales.includes(value as Locale)}
export function isIndustry(value:string):value is IndustrySlug{return industrySlugs.includes(value as IndustrySlug)}
