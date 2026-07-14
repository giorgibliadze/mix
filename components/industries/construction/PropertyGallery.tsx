import Image from "next/image";
import {ArrowUpRight} from "lucide-react";
import type {Dictionary,IndustryCopy} from "@/lib/i18n";
import {ConstructionReveal} from "./ConstructionReveal";

export function PropertyGallery({d,visual}:{d:IndustryCopy;visual:Dictionary["constructionVisual"]}){
 const items=[
  {src:"/images/industries/construction/premium-residential-showcase.avif",alt:visual.galleryPrimaryAlt,label:visual.galleryPrimaryLabel,className:"col-span-12 min-h-[28rem] sm:col-span-7 sm:row-span-2 sm:min-h-[38rem]",position:"object-center"},
  {src:"/images/industries/construction/architectural-villa-exterior.jpg",alt:visual.galleryVillaAlt,label:visual.galleryVillaLabel,className:"col-span-12 min-h-[20rem] sm:col-span-5 sm:min-h-[18rem]",position:"object-center"},
  {src:"/images/industries/construction/modern-urban-residence.jpeg",alt:visual.galleryResidenceAlt,label:visual.galleryResidenceLabel,className:"col-span-12 min-h-[20rem] sm:col-span-5 sm:min-h-[18rem]",position:"object-center"}
 ];
 return <ConstructionReveal className="construction-section grid gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-14"><div className="lg:sticky lg:top-28 lg:self-start"><p className="eyebrow">{visual.galleryEyebrow}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#f4efe7] sm:text-5xl">{visual.galleryTitle}</h2><p className="mt-5 max-w-md leading-8 text-slate-400">{visual.galleryText}</p><div className="mt-8 space-y-3">{d.results.slice(0,3).map((item,index)=><div key={item} className="flex items-center gap-3 border-b border-white/8 pb-3 text-sm text-slate-300"><span className="text-[#d4aa70]">0{index+1}</span>{item}</div>)}</div></div><div className="grid grid-cols-12 gap-3 sm:auto-rows-fr">{items.map(item=><figure key={item.src} className={`construction-photo group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#151820] ${item.className}`}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 58vw, 45vw" className={`object-cover ${item.position} transition-transform duration-700 ease-out group-hover:scale-[1.02]`}/><div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent"/><figcaption className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5 text-sm font-semibold text-white"><span>{item.label}</span><ArrowUpRight size={18}/></figcaption></figure>)}</div></ConstructionReveal>
}
