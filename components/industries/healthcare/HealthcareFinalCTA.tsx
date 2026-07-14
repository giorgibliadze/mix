import {ArrowRight,CalendarCheck2} from "lucide-react";
import type {Dictionary,IndustryCopy,Locale} from "@/lib/i18n";
import {LocalizedLink} from "@/components/LocalizedLink";
import {HealthcareReveal} from "./HealthcareReveal";

export function HealthcareFinalCTA({d,visual,locale}:{d:IndustryCopy;visual:Dictionary["healthcareVisual"];locale:Locale}){
 return <HealthcareReveal className="healthcare-section pb-[calc(6rem+env(safe-area-inset-bottom))]"><div className="relative overflow-hidden rounded-[2rem] border border-[#168474]/15 bg-[#e4f3ef] p-7 text-center sm:p-12"><div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(53,177,159,.18),transparent_50%)]"/><div className="relative"><CalendarCheck2 className="mx-auto text-[#168474]"/><p className="eyebrow mt-6">{d.finalCta}</p><h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">{visual.finalTitle}</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-[#5a7579]">{visual.finalText}</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><LocalizedLink locale={locale} href="/contact?industry=healthcare" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F13024] px-6 font-semibold text-white">{visual.finalPrimary}<ArrowRight size={17}/></LocalizedLink><a href="#healthcare-booking" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#173f46]/15 bg-white/60 px-6 font-semibold">{visual.finalSecondary}</a></div></div></div></HealthcareReveal>;
}
