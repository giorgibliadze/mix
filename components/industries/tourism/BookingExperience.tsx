import {Check,CreditCard,Globe2,MessageCircle,ShieldCheck} from "lucide-react";
import type {Dictionary} from "@/lib/i18n";
import {TourismReveal} from "./TourismReveal";

export function BookingExperience({visual}:{visual:Dictionary["tourismVisual"]}){
 return <TourismReveal className="tourism-section">
  <div className="grid gap-5 lg:grid-cols-[.72fr_1.28fr]">
   <div className="rounded-[2rem] border border-white/12 bg-white/5 p-6 sm:p-8">
    <Globe2 className="text-[#74cec3]"/>
    <p className="eyebrow mt-7">{visual.languagesEyebrow}</p>
    <h2 className="mt-4 text-3xl font-semibold tracking-tight">{visual.languagesTitle}</h2>
    <p className="mt-4 leading-7 text-[#a9c4c6]">{visual.languagesText}</p>
    <div className="mt-7 flex gap-2">{visual.languages.map((item,index)=><span key={item} className={`grid h-12 min-w-12 place-items-center rounded-xl border px-3 text-sm font-bold ${index===0?"border-[#74cec3] bg-[#74cec3] text-[#0b3138]":"border-white/12 bg-white/5"}`}>{item}</span>)}</div>
    <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-[#082b34] p-3 text-xs text-[#bdd2d2]"><MessageCircle size={17} className="text-[#74cec3]"/>{visual.chatbot}</div>
   </div>
   <div className="rounded-[2rem] border border-white/12 bg-[#eef2ed] p-5 text-[#17363c] sm:p-8">
    <div className="flex items-center justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#167b78]">{visual.bookingEyebrow}</p><h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{visual.bookingTitle}</h2></div><ShieldCheck className="text-[#167b78]"/></div>
    <div className="mt-7 grid gap-4 sm:grid-cols-[1fr_auto]">
     <div className="space-y-2">{visual.bookingRows.map((row,index)=><div key={row} className="flex items-center justify-between gap-4 rounded-xl border border-[#163c42]/10 bg-white/75 p-3 text-sm"><span>{row}</span><b>{visual.bookingValues[index]}</b></div>)}</div>
     <div className="flex min-w-40 flex-col justify-between rounded-xl bg-[#113b43] p-4 text-white"><div><p className="text-xs text-[#a8caca]">{visual.total}</p><p className="mt-1 text-2xl font-semibold">{visual.totalValue}</p></div><div className="mt-8 flex items-center gap-2 text-xs text-[#b8d1d1]"><CreditCard size={15}/>{visual.paymentStep}</div></div>
    </div>
    <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#16877d]/20 bg-[#d8eee8] p-4 text-sm font-semibold text-[#12685f]"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#16877d] text-white"><Check size={15}/></span>{visual.confirmation}</div>
   </div>
  </div>
 </TourismReveal>;
}
