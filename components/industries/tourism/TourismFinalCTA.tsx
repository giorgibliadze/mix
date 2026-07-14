import {ArrowRight,MapPinned} from "lucide-react";
import type {Dictionary,IndustryCopy,Locale} from "@/lib/i18n";
import {LocalizedLink} from "@/components/LocalizedLink";
import {TourismReveal} from "./TourismReveal";

export function TourismFinalCTA({d,visual,locale}:{d:IndustryCopy;visual:Dictionary["tourismVisual"];locale:Locale}){
 return <TourismReveal className="tourism-section pb-[calc(6rem+env(safe-area-inset-bottom))]"><div className="relative overflow-hidden rounded-[2rem] border border-[#75cec2]/20 bg-[#0a3540] p-7 text-center sm:p-12"><div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(102,210,195,.2),transparent_48%)]"/><div className="relative"><MapPinned className="mx-auto text-[#75cec2]" size={30}/><p className="eyebrow mt-6">{d.finalCta}</p><h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">{visual.finalTitle}</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-[#acc7c8]">{visual.finalText}</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><LocalizedLink locale={locale} href="/contact?industry=tourism" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F13024] px-6 font-semibold text-white">{visual.finalPrimary}<ArrowRight size={17}/></LocalizedLink><a href="#tourism-destinations" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 font-semibold">{visual.finalSecondary}</a></div></div></div></TourismReveal>;
}
