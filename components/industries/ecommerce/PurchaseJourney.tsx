import {CheckCircle2,CreditCard,PackageCheck,Search,ShoppingCart,SlidersHorizontal,Truck} from "lucide-react";
import type {Dictionary} from "@/lib/i18n";
import {EcommerceReveal} from "./EcommerceReveal";

const icons=[Search,SlidersHorizontal,CheckCircle2,ShoppingCart,CreditCard,PackageCheck,Truck];
export function PurchaseJourney({visual}:{visual:Dictionary["ecommerceVisual"]}){
 return <EcommerceReveal className="ecommerce-section"><div className="rounded-[2rem] border border-[#7566e8]/20 bg-[#141225] p-5 sm:p-9 lg:p-12"><p className="eyebrow">{visual.journeyEyebrow}</p><div className="mt-4 grid gap-5 lg:grid-cols-[.75fr_1.25fr]"><h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">{visual.journeyTitle}</h2><p className="max-w-xl leading-8 text-slate-400 lg:justify-self-end">{visual.journeyText}</p></div><ol className="ecommerce-journey mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">{visual.journeySteps.map((item,index)=>{const Icon=icons[index];return <li key={item} className="relative rounded-2xl border border-white/10 bg-white/4 p-4"><div className="flex items-center justify-between text-[#8e80ff]"><Icon size={19}/><b className="text-[10px] opacity-60">0{index+1}</b></div><p className="mt-6 text-xs font-semibold leading-5">{item}</p></li>})}</ol></div></EcommerceReveal>;
}
