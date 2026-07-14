"use client";

import {useCallback,useEffect,useRef,useState} from "react";
import {usePathname} from "next/navigation";
import {ArrowRight,Bot,Building2,ChevronDown,HeartPulse,Menu,Plane,ShoppingBag,X} from "lucide-react";
import {AnimatePresence,motion} from "framer-motion";
import {getDictionary,industrySlugs,type IndustrySlug,type Locale} from "@/lib/i18n";
import {LocalizedLink} from "./LocalizedLink";
import {LanguageSwitcher} from "./LanguageSwitcher";

const iconMap:Record<IndustrySlug,typeof Building2>={construction:Building2,tourism:Plane,ecommerce:ShoppingBag,healthcare:HeartPulse,"ai-automation":Bot};

export function Header({locale}:{locale:Locale}){
 const pathname=usePathname();
 const d=getDictionary(locale);
 const [scrolled,setScrolled]=useState(false);
 const [mobileOpen,setMobileOpen]=useState(false);
 const [mobileIndustriesOpen,setMobileIndustriesOpen]=useState(false);
 const [desktopIndustriesOpen,setDesktopIndustriesOpen]=useState(false);
 const menuButtonRef=useRef<HTMLButtonElement>(null);
 const mobilePanelRef=useRef<HTMLElement>(null);
 const desktopMenuRef=useRef<HTMLDivElement>(null);
 const closeTimerRef=useRef<ReturnType<typeof setTimeout>|null>(null);
 const isHome=pathname===`/${locale}`;
 const isIndustry=pathname.startsWith(`/${locale}/industries/`);
 const isActive=(route:string)=>pathname===`/${locale}${route}`;

 const cancelDelayedClose=()=>{if(closeTimerRef.current)clearTimeout(closeTimerRef.current)};
 const scheduleClose=()=>{cancelDelayedClose();closeTimerRef.current=setTimeout(()=>setDesktopIndustriesOpen(false),180)};
 const closeMobile=useCallback((restoreFocus=false)=>{setMobileOpen(false);setMobileIndustriesOpen(false);if(restoreFocus)requestAnimationFrame(()=>menuButtonRef.current?.focus())},[]);

 useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>12);onScroll();window.addEventListener("scroll",onScroll,{passive:true});return()=>window.removeEventListener("scroll",onScroll)},[]);
 useEffect(()=>{const frame=requestAnimationFrame(()=>{setMobileOpen(false);setMobileIndustriesOpen(false);setDesktopIndustriesOpen(false)});return()=>cancelAnimationFrame(frame)},[pathname]);
 useEffect(()=>{
  if(!mobileOpen)return;
  const previous=document.body.style.overflow;
  document.body.style.overflow="hidden";
  requestAnimationFrame(()=>mobilePanelRef.current?.querySelector<HTMLElement>("a,button")?.focus());
  const onKey=(event:KeyboardEvent)=>{
   if(event.key==="Escape"){closeMobile(true);return}
   if(event.key!=="Tab"||!mobilePanelRef.current)return;
   const focusable=Array.from(mobilePanelRef.current.querySelectorAll<HTMLElement>("a[href],button:not([disabled])")).filter(item=>item.offsetParent!==null);
   if(!focusable.length)return;
   const first=focusable[0];const last=focusable[focusable.length-1];
   if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
   else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
  };
  document.addEventListener("keydown",onKey);
  return()=>{document.body.style.overflow=previous;document.removeEventListener("keydown",onKey)};
 },[mobileOpen,closeMobile]);
 useEffect(()=>{const onPointerDown=(event:PointerEvent)=>{if(desktopMenuRef.current&&!desktopMenuRef.current.contains(event.target as Node))setDesktopIndustriesOpen(false)};const onKey=(event:KeyboardEvent)=>{if(event.key==="Escape")setDesktopIndustriesOpen(false)};document.addEventListener("pointerdown",onPointerDown);document.addEventListener("keydown",onKey);return()=>{document.removeEventListener("pointerdown",onPointerDown);document.removeEventListener("keydown",onKey);cancelDelayedClose()}},[]);

 const navClass=(active:boolean)=>`nav-link inline-flex items-center whitespace-nowrap px-1 py-2 text-sm font-medium leading-none transition-colors ${active?"nav-link-active":""}`;
 return <header className={`site-header ${scrolled||mobileOpen?"site-header-scrolled":""}`}>
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
   <LocalizedLink locale={locale} href="/" className="flex shrink-0 items-center gap-2 font-semibold text-white" aria-label="Next-Hub Solutions"><span className="grid h-9 w-9 place-items-center rounded-full bg-linear-to-br from-[#F13024] to-orange-400 text-sm font-black">NH</span><span className="hidden xl:inline">Next-Hub Solutions</span></LocalizedLink>
   <div className="hidden items-center gap-3 lg:flex">
    <nav className="flex items-center gap-5 text-slate-300 xl:gap-7" aria-label={d.common.navigation}>
     <LocalizedLink locale={locale} href="/" className={navClass(isHome)}>{d.common.home}</LocalizedLink>
     <div ref={desktopMenuRef} className="relative" onMouseEnter={()=>{cancelDelayedClose();setDesktopIndustriesOpen(true)}} onMouseLeave={scheduleClose} onFocus={cancelDelayedClose} onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node))scheduleClose()}}>
      <button type="button" onClick={()=>setDesktopIndustriesOpen(value=>!value)} className={`${navClass(isIndustry)} gap-1.5`} aria-expanded={desktopIndustriesOpen} aria-haspopup="menu"><span>{d.common.industries}</span><ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${desktopIndustriesOpen?"rotate-180":""}`}/></button>
      <AnimatePresence>{desktopIndustriesOpen&&<motion.div role="menu" initial={{opacity:0,y:-6,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:-4,scale:.98}} transition={{duration:.16}} className="absolute left-0 top-full mt-3 w-[34rem] rounded-2xl border border-white/10 bg-[#121624]/97 p-2.5 shadow-2xl shadow-black/40 backdrop-blur-xl">{industrySlugs.map(slug=>{const Icon=iconMap[slug];const active=pathname===`/${locale}/industries/${slug}`;return <LocalizedLink role="menuitem" onClick={()=>setDesktopIndustriesOpen(false)} key={slug} locale={locale} href={`/industries/${slug}`} className={`group/menu grid grid-cols-[2.25rem_1fr] gap-x-3 rounded-xl p-3 outline-none transition hover:bg-white/7 focus-visible:bg-white/10 ${active?"bg-white/8":""}`}><span className="row-span-2 grid h-9 w-9 place-items-center rounded-lg bg-white/6 text-[#ff756c] transition group-hover/menu:bg-[#F13024]/15"><Icon size={17}/></span><span className="font-semibold text-white">{d.industries[slug].nav}</span><span className="mt-0.5 line-clamp-1 text-xs text-slate-400">{d.industries[slug].results[0]}</span></LocalizedLink>})}</motion.div>}</AnimatePresence>
     </div>
     <LocalizedLink locale={locale} href="/about" className={navClass(isActive("/about"))}>{d.common.about}</LocalizedLink>
     <LocalizedLink locale={locale} href="/faq" className={navClass(isActive("/faq"))}>{d.common.faq}</LocalizedLink>
    </nav>
    <div className="flex shrink-0 items-center gap-3">
     <LanguageSwitcher locale={locale}/>
     <LocalizedLink locale={locale} href="/contact" className="inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-full bg-[#F13024] px-4 font-semibold text-white outline-none transition hover:bg-[#d9281e] focus-visible:ring-2 focus-visible:ring-white/80">{d.common.start}<ArrowRight size={15}/></LocalizedLink>
    </div>
   </div>
   <button ref={menuButtonRef} type="button" onClick={()=>setMobileOpen(value=>!value)} className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-white outline-none transition hover:bg-white/8 focus-visible:ring-2 focus-visible:ring-white/80 lg:hidden" aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={d.common.navigation}>{mobileOpen?<X size={19}/>:<Menu size={19}/>}</button>
  </div>
  <AnimatePresence>{mobileOpen&&<motion.nav ref={mobilePanelRef} id="mobile-navigation" initial={{opacity:0,height:0}} animate={{opacity:1,height:"calc(100dvh - 4rem)"}} exit={{opacity:0,height:0}} transition={{duration:.22}} className="mobile-navigation lg:hidden" aria-label={d.common.navigation}>
   <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 pt-3 sm:px-6">
    <LocalizedLink onClick={()=>closeMobile()} locale={locale} href="/" className={`mobile-nav-item ${isHome?"mobile-nav-active":""}`}>{d.common.home}</LocalizedLink>
    <button type="button" onClick={()=>setMobileIndustriesOpen(value=>!value)} className={`mobile-nav-item justify-between ${isIndustry?"mobile-nav-active":""}`} aria-expanded={mobileIndustriesOpen}><span>{d.common.industries}</span><ChevronDown size={17} className={`transition ${mobileIndustriesOpen?"rotate-180":""}`}/></button>
    <AnimatePresence initial={false}>{mobileIndustriesOpen&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden"><div className="grid gap-1 py-1 pl-2">{industrySlugs.map(slug=>{const Icon=iconMap[slug];return <LocalizedLink onClick={()=>closeMobile()} key={slug} locale={locale} href={`/industries/${slug}`} className={`flex min-h-12 items-center gap-3 rounded-xl px-3 text-sm text-slate-300 outline-none hover:bg-white/7 focus-visible:bg-white/10 ${pathname===`/${locale}/industries/${slug}`?"bg-white/8 text-white":""}`}><Icon size={18} className="text-[#ff756c]"/><span>{d.industries[slug].nav}</span></LocalizedLink>})}</div></motion.div>}</AnimatePresence>
    <LocalizedLink onClick={()=>closeMobile()} locale={locale} href="/about" className={`mobile-nav-item ${isActive("/about")?"mobile-nav-active":""}`}>{d.common.about}</LocalizedLink>
    <LocalizedLink onClick={()=>closeMobile()} locale={locale} href="/faq" className={`mobile-nav-item ${isActive("/faq")?"mobile-nav-active":""}`}>{d.common.faq}</LocalizedLink>
    <LocalizedLink onClick={()=>closeMobile()} locale={locale} href="/contact" className={`mobile-nav-item ${isActive("/contact")?"mobile-nav-active":""}`}>{d.common.contact}</LocalizedLink>
    <div className="mt-2 flex items-center justify-between border-t border-white/10 px-2 pt-4"><span className="text-sm text-slate-400">{d.common.language}</span><LanguageSwitcher locale={locale} onNavigate={()=>closeMobile()}/></div>
    <LocalizedLink onClick={()=>closeMobile()} locale={locale} href="/contact" className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F13024] px-5 font-semibold text-white outline-none focus-visible:ring-2 focus-visible:ring-white/80">{d.common.start}<ArrowRight size={17}/></LocalizedLink>
   </div>
  </motion.nav>}</AnimatePresence>
 </header>
}
