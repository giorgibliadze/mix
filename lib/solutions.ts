import ka from "@/messages/solutions/ka.json";
import en from "@/messages/solutions/en.json";
import ru from "@/messages/solutions/ru.json";
import type {IndustrySlug, Locale} from "./i18n";

export type SolutionCopy = {
  name: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: {eyebrow: string; title: string; subtitle: string; primary: string; secondary: string; trust: string[]};
  problems: {title: string; intro: string; items: string[]};
  channels: {title: string; intro: string; sourceLabel: string; sources: string[]; destination: string; note: string};
  why: {title: string; intro: string; items: {title: string; text: string}[]};
  decision: {title: string; intro: string; demoTitle: string; steps: string[]; uiLabels: string[]; floorLabel?: string; selectedFloor?: string; mapLabels?: {available: string; apartments: string; floorArea: string; viewUnits: string; instructionTitle: string; instructionText: string; apartmentShort: string}};
  benefits: {title: string; items: string[]};
  compare: {title: string; standardLabel: string; transformedLabel: string; standard: string[]; transformed: string[]};
  workflow: {title: string; steps: string[]; result: string};
  outcomes: {title: string; items: string[]};
  whyUs: {title: string; items: {title: string; text: string}[]};
  final: {title: string; text: string; primary: string; secondary: string};
  faq: {question: string; answer: string}[];
};

const solutionDictionaries: Record<Locale, Record<IndustrySlug, SolutionCopy>> = {
  ka: ka as Record<IndustrySlug, SolutionCopy>,
  en: en as Record<IndustrySlug, SolutionCopy>,
  ru: ru as Record<IndustrySlug, SolutionCopy>,
};

export function getSolution(locale: Locale, slug: IndustrySlug): SolutionCopy {
  return solutionDictionaries[locale][slug];
}
