"use client";
import {useState,type FormEvent} from "react";
import {useSearchParams} from "next/navigation";
import {CheckCircle2,Loader2} from "lucide-react";
import {getDictionary,isIndustry,type IndustrySlug,type Locale} from "@/lib/i18n";

export function ContactForm({locale}:{locale:Locale}){
 const query=useSearchParams(); const requested=query.get("industry"); const preset=requested&&isIndustry(requested)?requested:"";
 const [industry,setIndustry]=useState<IndustrySlug|"">(preset); const [service,setService]=useState(""); const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [consent,setConsent]=useState(false); const [status,setStatus]=useState<""|"loading"|"success">(""); const [error,setError]=useState("");
 const d=getDictionary(locale); const t=d.form;
 async function submit(event:FormEvent){event.preventDefault();setError("");if(!name||!email||!industry||!service||!consent){setError(t.required);return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setError(t.invalid);return}setStatus("loading");const payload={locale,sourceIndustry:industry,name,email,service};await new Promise(resolve=>setTimeout(resolve,500));console.info("contact-form",payload);setStatus("success")}
 const input="mt-2 min-h-12 w-full rounded-2xl border border-white/10 bg-[#11131f] px-4 outline-none focus:border-[#F13024]";
 return <form onSubmit={submit} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8" noValidate>
  <div className="grid gap-5 sm:grid-cols-2"><label>{t.name}*<input className={input} value={name} onChange={e=>setName(e.target.value)} placeholder={t.name}/></label><label>{t.company}<input className={input} placeholder={t.company}/></label><label>{t.phone}<input className={input} type="tel" placeholder="+995"/></label><label>{t.email}*<input className={input} type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="name@company.com"/></label><label>{t.industry}*<select className={input} value={industry} onChange={e=>setIndustry(e.target.value as IndustrySlug)}><option value="">{t.choose}</option>{Object.entries(d.industries).map(([slug,item])=><option key={slug} value={slug}>{item.nav}</option>)}</select></label><label>{t.service}*<select className={input} value={service} onChange={e=>setService(e.target.value)}><option value="">{t.choose}</option><option value="website">{t.website}</option><option value="platform">{t.platform}</option><option value="ai">{t.ai}</option></select></label></div>
  <label className="mt-5 block">{t.details}<textarea className={`${input} py-3`} rows={5} placeholder={t.details}/></label><label className="mt-5 flex gap-3 text-sm text-slate-400"><input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)}/>{t.consent}</label>
  {error&&<p className="mt-4 text-sm text-orange-400">{error}</p>}{status==="success"&&<p className="mt-4 flex gap-2 text-sm text-emerald-400"><CheckCircle2 size={18}/>{t.success}</p>}<button disabled={status==="loading"} className="mt-6 flex min-h-12 items-center gap-2 rounded-full bg-[#F13024] px-6 font-semibold">{status==="loading"?<><Loader2 className="animate-spin"/>{t.loading}</>:t.submit}</button>
 </form>
}
