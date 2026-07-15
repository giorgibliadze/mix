import {Bot, CalendarDays, Check, MapPin, Search, ShoppingBag, Stethoscope} from "lucide-react";
import type {IndustrySlug} from "@/lib/i18n";
import type {SolutionCopy} from "@/lib/solutions";
import {InteractiveBuildingMap} from "./InteractiveBuildingMap";

export function SolutionDemo({slug, copy}: {slug: IndustrySlug; copy: SolutionCopy["decision"]}) {
  if (slug === "construction") return <InteractiveBuildingMap copy={copy}/>;

  if (slug === "tourism") return <div className="solution-demo solution-booking-demo"><div className="solution-demo-bar"><MapPin size={18}/><b>{copy.demoTitle}</b><span>{copy.uiLabels[0]}</span></div><div className="solution-booking-grid"><div className="solution-route-card"><div className="solution-route-map"><i/><i/><i/></div><strong>{copy.uiLabels[1]}</strong><p>{copy.uiLabels[2]}</p></div><div className="solution-demo-panel"><CalendarDays size={20}/><small>{copy.uiLabels[3]}</small><strong>{copy.uiLabels[4]}</strong><button type="button">{copy.uiLabels[5]}</button></div></div></div>;

  if (slug === "ecommerce") return <div className="solution-demo solution-shop-demo"><div className="solution-demo-bar"><Search size={18}/><b>{copy.demoTitle}</b><span>{copy.uiLabels[0]}</span></div><div className="solution-search-field"><Search size={16}/><span>{copy.uiLabels[1]}</span></div><div className="solution-products">{copy.uiLabels.slice(2,5).map((label,index)=><div key={label}><span className={`product-shape product-${index+1}`}/><strong>{label}</strong><small>₾ {49+index*30}</small></div>)}</div><div className="solution-cart-row"><ShoppingBag size={18}/><span>{copy.uiLabels[5]}</span><button type="button">{copy.uiLabels[6]}</button></div></div>;

  if (slug === "healthcare") return <div className="solution-demo solution-health-demo"><div className="solution-demo-bar"><Stethoscope size={18}/><b>{copy.demoTitle}</b><span>{copy.uiLabels[0]}</span></div><div className="solution-doctor-grid">{copy.uiLabels.slice(1,4).map((label,index)=><div key={label} className={index===0?"active":""}><span>{String.fromCharCode(65+index)}</span><strong>{label}</strong><small>{copy.uiLabels[4]}</small></div>)}</div><div className="solution-times"><CalendarDays size={17}/>{["10:00","12:30","15:00"].map((time,index)=><button type="button" className={index===1?"active":""} key={time}>{time}</button>)}<b>{copy.uiLabels[5]}</b></div></div>;

  return <div className="solution-demo solution-ai-demo"><div className="solution-demo-bar"><Bot size={18}/><b>{copy.demoTitle}</b><span>{copy.uiLabels[0]}</span></div><div className="solution-ai-flow">{copy.uiLabels.slice(1,6).map((label,index)=><div key={label} className={index===4?"result":""}><span>{index===4?<Check size={18}/>:index+1}</span><strong>{label}</strong>{index<4&&<i/>}</div>)}</div></div>;
}
