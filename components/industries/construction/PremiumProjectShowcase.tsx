import Image from "next/image";
import {Check} from "lucide-react";
import type {Dictionary} from "@/lib/i18n";
import {ConstructionReveal} from "./ConstructionReveal";

export function PremiumProjectShowcase({visual}:{visual:Dictionary["constructionVisual"]}){
 return <ConstructionReveal className="construction-section"><div className="relative min-h-[34rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#11151b] shadow-[0_35px_100px_rgba(0,0,0,.35)] sm:min-h-[42rem]"><Image src="/images/industries/construction/construction-hero-modern-villa.webp" alt={visual.showcaseAlt} fill sizes="calc(100vw - 2rem)" className="object-cover object-center"/><div className="absolute inset-0 bg-linear-to-r from-[#080b11]/94 via-[#080b11]/60 to-transparent"/><div className="relative flex min-h-[34rem] max-w-xl flex-col justify-center p-7 sm:min-h-[42rem] sm:p-12 lg:p-16"><p className="eyebrow">{visual.showcaseEyebrow}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{visual.showcaseTitle}</h2><p className="mt-5 leading-8 text-slate-300">{visual.showcaseText}</p><ul className="mt-8 grid gap-3">{visual.showcaseItems.map(item=><li key={item} className="flex items-center gap-3 text-sm text-white"><span className="grid h-7 w-7 place-items-center rounded-full border border-[#d4aa70]/40 bg-[#d4aa70]/10 text-[#e0b982]"><Check size={14}/></span>{item}</li>)}</ul></div></div></ConstructionReveal>
}
