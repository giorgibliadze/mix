import Image from "next/image";
import {ArrowUpRight} from "lucide-react";
import type {Dictionary} from "@/lib/i18n";
import {TourismReveal} from "./TourismReveal";

export function DestinationShowcase({visual}:{visual:Dictionary["tourismVisual"]}){
 const items=[
  {src:"/images/industries/tourism/adventure-hiking-tour.avif",alt:visual.adventureAlt,label:visual.adventureLabel,meta:visual.adventureMeta,className:"sm:col-span-7 sm:row-span-2 min-h-[31rem]",position:"object-center"},
  {src:"/images/industries/tourism/european-landmark-tour.webp",alt:visual.romeAlt,label:visual.romeLabel,meta:visual.romeMeta,className:"sm:col-span-5 min-h-[15rem]",position:"object-center"},
  {src:"/images/industries/tourism/cultural-city-tour.jpg",alt:visual.cultureAlt,label:visual.cultureLabel,meta:visual.cultureMeta,className:"sm:col-span-5 min-h-[15rem]",position:"object-center"}
 ];
 return <TourismReveal id="tourism-destinations" className="tourism-section scroll-mt-24"><div className="mb-9 grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="eyebrow">{visual.destinationsEyebrow}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{visual.destinationsTitle}</h2></div><p className="max-w-xl leading-8 text-[#a9c4c6] lg:justify-self-end">{visual.destinationsText}</p></div><div className="grid gap-3 sm:grid-cols-12">{items.map(item=><figure key={item.src} className={`group relative min-h-[20rem] overflow-hidden rounded-[1.6rem] border border-white/12 bg-[#0c343d] ${item.className}`}><Image src={item.src} alt={item.alt} fill sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 58vw, 52vw" className={`object-cover ${item.position} transition-transform duration-700 ease-out group-hover:scale-[1.025]`}/><div className="absolute inset-0 bg-linear-to-t from-[#021b24]/85 via-transparent to-transparent"/><figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6"><div><p className="text-xs font-semibold text-[#83d0c5]">{item.meta}</p><p className="mt-1 text-xl font-semibold text-white">{item.label}</p></div><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/25 bg-black/15"><ArrowUpRight size={18}/></span></figcaption></figure>)}</div></TourismReveal>;
}
