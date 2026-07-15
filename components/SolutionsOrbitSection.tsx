import type {LucideIcon} from "lucide-react";
import {ArrowUpRight,Bot,Building2,Compass,HeartPulse,ShoppingBag} from "lucide-react";
import type {Dictionary,IndustrySlug,Locale} from "@/lib/i18n";
import {LocalizedLink} from "./LocalizedLink";

type OrbitCopy=Dictionary["solutionsOrbit"];
type SolutionItem={slug:IndustrySlug;icon:LucideIcon;accentClass:string};

const solutionItems:SolutionItem[]=[
 {slug:"construction",icon:Building2,accentClass:"solutions-orbit-construction"},
 {slug:"tourism",icon:Compass,accentClass:"solutions-orbit-tourism"},
 {slug:"ecommerce",icon:ShoppingBag,accentClass:"solutions-orbit-ecommerce"},
 {slug:"healthcare",icon:HeartPulse,accentClass:"solutions-orbit-healthcare"},
 {slug:"ai-automation",icon:Bot,accentClass:"solutions-orbit-ai"},
];

function SolutionLink({item,index,locale,copy,orbit=false}:{item:SolutionItem;index:number;locale:Locale;copy:OrbitCopy;orbit?:boolean}){
 const Icon=item.icon;
 const text=copy.items[item.slug];
 const link=<LocalizedLink locale={locale} href={`/solutions/${item.slug}`} aria-label={text.ariaLabel} className={`solutions-orbit-card ${item.accentClass}`}><span className="solutions-orbit-icon"><Icon aria-hidden="true"/></span><strong>{text.name}</strong><span className="solutions-orbit-cta">{copy.cta}<ArrowUpRight aria-hidden="true"/></span><span className="solutions-orbit-tooltip" role="tooltip">{text.tooltip}</span></LocalizedLink>;
 if(!orbit)return <article className="solutions-mobile-card"><div>{link}</div><p>{text.description}</p></article>;
 return <div className="solutions-orbit-item" style={{"--orbit-angle":`${index*72}deg`,"--orbit-counter-angle":`${index*-72}deg`} as React.CSSProperties}><div className="solutions-orbit-counter">{link}</div></div>;
}

export function SolutionsOrbitSection({locale,copy}:{locale:Locale;copy:OrbitCopy}){
 return <section className="solutions-orbit-section" aria-labelledby="solutions-orbit-title">
  <div className="solutions-orbit-heading"><p className="eyebrow">{copy.eyebrow}</p><h2 id="solutions-orbit-title">{copy.title}</h2><p>{copy.subtitle}</p></div>
  <div className="solutions-orbit-shell" aria-label={copy.orbitLabel}>
   <div className="solutions-orbit-ring solutions-orbit-ring-secondary" aria-hidden="true"/>
   <div className="solutions-orbit-track">{solutionItems.map((item,index)=><SolutionLink key={item.slug} item={item} index={index} locale={locale} copy={copy} orbit/>)}</div>
   <div className="solutions-orbit-core"><span>Next-Hub</span><strong>{copy.centerTitle}</strong><small>{copy.centerText}</small></div>
  </div>
  <nav className="solutions-static-navigation" aria-label={copy.navigationLabel}>{solutionItems.map((item,index)=><SolutionLink key={item.slug} item={item} index={index} locale={locale} copy={copy}/>)}</nav>
 </section>;
}
