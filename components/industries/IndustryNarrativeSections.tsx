import {ArrowRight,CheckCircle2,Compass,Layers3,TrendingUp} from "lucide-react";
import type {Dictionary,IndustryCopy,IndustrySlug} from "@/lib/i18n";

type Narrative=Dictionary["industryNarrative"][IndustrySlug];
type Common=Dictionary["common"];

export function WebsiteWhy({narrative,common}:{narrative:Narrative;common:Common}){
 return <section className="industry-section narrative-section"><p className="eyebrow">{common.whyWebsite}</p><h2 className="narrative-heading">{narrative.whyTitle}</h2><p className="narrative-intro">{narrative.whyText}</p><div className="narrative-grid mt-7">{narrative.whyReasons.map((item,index)=><article key={item} className="narrative-card"><span>0{index+1}</span><p>{item}</p></article>)}</div></section>;
}

export function BusinessBenefits({d,narrative,common}:{d:IndustryCopy;narrative:Narrative;common:Common}){
 return <section className="industry-section narrative-section"><p className="eyebrow">{common.businessBenefits}</p><h2 className="narrative-heading">{narrative.benefitsTitle}</h2><p className="narrative-intro">{narrative.benefitsText}</p><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{d.results.map(item=><article key={item} className="narrative-card"><TrendingUp size={19}/><p>{item}</p></article>)}</div></section>;
}

export function FeatureOutcomes({d,narrative,common}:{d:IndustryCopy;narrative:Narrative;common:Common}){
 return <section className="industry-section narrative-section"><p className="eyebrow">{common.featureImpact}</p><h2 className="narrative-heading">{narrative.featuresTitle}</h2><p className="narrative-intro">{narrative.featuresText}</p><div className="mt-7 grid gap-3 md:grid-cols-2">{d.features.map((feature,index)=><article key={feature} className="narrative-feature"><CheckCircle2/><div><h3>{feature}</h3><p>{narrative.featureResults[index]}</p></div></article>)}</div></section>;
}

export function CompetitiveAdvantage({narrative,common}:{narrative:Narrative;common:Common}){
 return <section className="industry-section narrative-section"><p className="eyebrow">{common.competitiveAdvantage}</p><h2 className="narrative-heading">{narrative.advantageTitle}</h2><p className="narrative-intro">{narrative.advantageText}</p><div className="narrative-grid mt-7">{narrative.advantages.map(item=><article key={item} className="narrative-card"><Compass size={19}/><p>{item}</p></article>)}</div></section>;
}

export function BeforeAfter({d,common}:{d:IndustryCopy;common:Common}){
 return <section className="industry-section narrative-section"><p className="eyebrow">{common.beforeAfter}</p><h2 className="narrative-heading">{common.changeTitle}</h2><div className="mt-7 grid gap-4 lg:grid-cols-2"><div className="comparison-panel comparison-before"><h3>{common.withoutWebsite}</h3>{d.problems.map(item=><p key={item}>{item}</p>)}</div><div className="comparison-panel comparison-after"><h3>{common.withWebsite}</h3>{d.results.map(item=><p key={item}><ArrowRight size={15}/>{item}</p>)}</div></div></section>;
}

export function NextHubApproach({d,common}:{d:IndustryCopy;common:Common}){
 return <section className="industry-section narrative-section"><p className="eyebrow">{common.nextHubApproach}</p><h2 className="narrative-heading">{common.nextHubTitle}</h2><p className="narrative-intro">{common.nextHubText}</p><ol className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{d.process.map((item,index)=><li key={item} className="narrative-card"><Layers3 size={18}/><span>0{index+1}</span><p>{item}</p></li>)}</ol></section>;
}
