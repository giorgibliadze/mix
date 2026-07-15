import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {JsonLd} from "@/components/JsonLd";
import {ConversionLandingPage} from "@/components/solutions/ConversionLandingPage";
import {getDictionary,industrySlugs,isIndustry,isLocale,locales} from "@/lib/i18n";
import {localizedMetadata} from "@/lib/seo";
import {getSolution} from "@/lib/solutions";

type Props={params:Promise<{locale:string;slug:string}>};

export function generateStaticParams(){return locales.flatMap(locale=>industrySlugs.map(slug=>({locale,slug})))}

export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {locale,slug}=await params;
 if(!isLocale(locale)||!isIndustry(slug))return{};
 const copy=getSolution(locale,slug);
 return localizedMetadata(locale,`solutions/${slug}`,copy.metaTitle,copy.metaDescription,copy.keywords);
}

export default async function SolutionPage({params}:Props){
 const {locale,slug}=await params;
 if(!isLocale(locale)||!isIndustry(slug))notFound();
 const copy=getSolution(locale,slug);
 const common=getDictionary(locale).common;
 const url=`https://www.next-hub.pro/${locale}/solutions/${slug}`;
 const graph=[
  {"@type":"Service",name:copy.name,description:copy.metaDescription,url,provider:{"@type":"Organization",name:"Next-Hub Solutions",url:"https://www.next-hub.pro"},areaServed:"Worldwide",serviceType:copy.name},
  {"@type":"BreadcrumbList",itemListElement:[common.home,copy.name].map((name,index)=>({"@type":"ListItem",position:index+1,name,item:index===0?`https://www.next-hub.pro/${locale}`:url}))},
  {"@type":"FAQPage",mainEntity:copy.faq.map(item=>({"@type":"Question",name:item.question,acceptedAnswer:{"@type":"Answer",text:item.answer}}))},
 ];
 return <><Header locale={locale}/><JsonLd data={{"@context":"https://schema.org","@graph":graph}}/><main><ConversionLandingPage locale={locale} slug={slug} copy={copy}/></main><Footer locale={locale}/></>;
}
