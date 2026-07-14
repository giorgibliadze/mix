"use client";
import {usePathname,useRouter,useSearchParams} from "next/navigation";
import {getDictionary,type Locale} from "@/lib/i18n";

export function LanguageSwitcher({locale,onNavigate}:{locale:Locale;onNavigate?:()=>void}){
 const pathname=usePathname();const query=useSearchParams();const router=useRouter();const d=getDictionary(locale);
 const change=(next:Locale)=>{const parts=pathname.split("/");parts[1]=next;const search=query.toString();const hash=window.location.hash;onNavigate?.();router.push(`${parts.join("/")}${search?`?${search}`:""}${hash}` as never)};
 return <div className="flex h-9 items-center rounded-full border border-white/12 bg-black/15 px-1" aria-label={d.common.language} role="group">{(["ka","en","ru"] as Locale[]).map((code,index)=><div className="contents" key={code}>{index>0&&<span aria-hidden="true" className="text-[10px] text-white/20">/</span>}<button type="button" onClick={()=>change(code)} aria-label={`${d.common.language}: ${code.toUpperCase()}`} aria-pressed={code===locale} className={`grid h-7 min-w-8 place-items-center rounded-full px-1.5 text-[11px] font-bold outline-none transition focus-visible:ring-2 focus-visible:ring-white/70 ${code===locale?"bg-white/12 text-white":"text-slate-500 hover:text-white"}`}>{code.toUpperCase()}</button></div>)}</div>
}
