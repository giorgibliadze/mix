import {Bell,Box,CheckCircle2,PackageOpen,ScanLine,Truck} from "lucide-react";
import type {Dictionary} from "@/lib/i18n";
import {EcommerceReveal} from "./EcommerceReveal";

const icons=[Box,PackageOpen,ScanLine,Truck,Bell,CheckCircle2];
export function DeliveryWorkflow({visual}:{visual:Dictionary["ecommerceVisual"]}){
 return <EcommerceReveal className="ecommerce-section"><div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center"><div><p className="eyebrow">{visual.deliveryEyebrow}</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{visual.deliveryTitle}</h2><p className="mt-5 leading-8 text-slate-400">{visual.deliveryText}</p></div><ol className="grid grid-cols-2 gap-3 sm:grid-cols-3">{visual.deliverySteps.map((item,index)=>{const Icon=icons[index];return <li key={item} className={`rounded-2xl border p-4 ${index===3?"border-[#7665e5] bg-[#7665e5]":"border-white/10 bg-white/5"}`}><Icon size={20} className={index===3?"text-white":"text-[#8f80f4]"}/><p className="mt-5 text-sm font-semibold">{item}</p><span className="mt-2 block text-[10px] opacity-50">0{index+1}</span></li>})}</ol></div></EcommerceReveal>;
}
