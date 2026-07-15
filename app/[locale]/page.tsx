import type {Metadata} from "next";
import {ArrowDown} from "lucide-react";
import {notFound} from "next/navigation";
import {isLocale,getDictionary} from "@/lib/i18n";
import {localizedMetadata} from "@/lib/seo";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {IndustryChooser} from "@/components/IndustryChooser";
import {JsonLd} from "@/components/JsonLd";
import {LocalizedLink} from "@/components/LocalizedLink";
import {SolutionsOrbitSection} from "@/components/SolutionsOrbitSection";

type Props={params:Promise<{locale:string}>};

export async function generateMetadata({params}:Props):Promise<Metadata>{const{locale}=await params;if(!isLocale(locale))return{};const d=getDictionary(locale);return localizedMetadata(locale,"",`${d.common.homeTitle} | Next-Hub Solutions`,d.common.homeText,["website development","AI automation","Next-Hub Solutions"])}

export default async function Home({params}:Props){const{locale}=await params;if(!isLocale(locale))notFound();const d=getDictionary(locale);return <><Header locale={locale}/><JsonLd data={{"@context":"https://schema.org","@type":"Organization",name:"Next-Hub Solutions",url:`https://www.next-hub.pro/${locale}`,telephone:"+995555137003",email:"info@next-hub.pro",address:{"@type":"PostalAddress",addressLocality:d.common.address,addressCountry:"GE"},sameAs:["https://facebook.com/nexthubsolutions","https://instagram.com/next.hub.pro","https://linkedin.com/company/next-hub-solutions"]}}/><main><section className="home-hero"><div className="mx-auto max-w-5xl text-center"><p className="eyebrow">Next-Hub Solutions</p><h1>{d.common.homeTitle}</h1><p className="hero-copy mx-auto">{d.common.homeText}</p><div className="home-actions"><a href="#industries" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#F13024] px-6 font-semibold">{d.common.chooseField}<ArrowDown size={17}/></a><LocalizedLink locale={locale} href="/contact" className="inline-flex min-h-12 items-center rounded-full border border-white/15 px-6 font-semibold">{d.common.consultation}</LocalizedLink></div></div></section><SolutionsOrbitSection locale={locale} copy={d.solutionsOrbit}/><IndustryChooser locale={locale}/></main><Footer locale={locale}/></>}
