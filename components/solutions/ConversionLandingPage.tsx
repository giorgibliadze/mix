import Image from "next/image";
import {ArrowDown, ArrowRight, Check, CircleX, Layers3, MoveRight, Sparkles} from "lucide-react";
import type {IndustrySlug, Locale} from "@/lib/i18n";
import type {SolutionCopy} from "@/lib/solutions";
import {LocalizedLink} from "@/components/LocalizedLink";
import {SolutionDemo} from "./SolutionDemo";

const visuals: Record<IndustrySlug, {image: string; className: string}> = {
  construction: {image: "/images/industries/construction/construction-hero-modern-villa.webp", className: "solution-construction"},
  tourism: {image: "/images/industries/tourism/mountain-adventure-hero.avif", className: "solution-tourism"},
  ecommerce: {image: "/images/industries/ecommerce/ecommerce-storefront-hero.jpeg", className: "solution-ecommerce"},
  healthcare: {image: "/images/industries/healthcare/modern-clinic-consultation-hero.jpg", className: "solution-healthcare"},
  "ai-automation": {image: "/images/industries/ai-automation/ai-automation-hero.webp", className: "solution-ai"},
};

export function ConversionLandingPage({locale, slug, copy}: {locale: Locale; slug: IndustrySlug; copy: SolutionCopy}) {
  const visual=visuals[slug];
  const contactHref=`/contact?industry=${slug}&source=solution`;
  return <div className={`solution-page ${visual.className}`}>
    <section className="solution-hero">
      <div className="solution-hero-copy"><p className="solution-kicker">{copy.hero.eyebrow}</p><h1>{copy.hero.title}</h1><p className="solution-lead">{copy.hero.subtitle}</p><div className="solution-actions"><LocalizedLink locale={locale} href={contactHref}>{copy.hero.primary}<ArrowRight size={18}/></LocalizedLink><a href="#decision">{copy.hero.secondary}</a></div><div className="solution-trust">{copy.hero.trust.map(item=><span key={item}><Check size={14}/>{item}</span>)}</div></div>
      <div className="solution-hero-visual"><Image src={visual.image} alt={copy.name} fill priority sizes="(max-width: 1023px) 100vw, 50vw"/><div className="solution-hero-glass"><Sparkles size={18}/><span>{copy.hero.trust[0]}</span><b>{copy.hero.trust[1]}</b></div></div>
    </section>

    <section className="solution-section solution-problems"><div className="solution-section-heading"><span>01</span><h2>{copy.problems.title}</h2><p>{copy.problems.intro}</p></div><div className="solution-problem-rail">{copy.problems.items.map((item,index)=><article key={item}><CircleX/><small>0{index+1}</small><p>{item}</p></article>)}</div></section>

    <section className="solution-section solution-channels"><div className="solution-centered-heading"><span>02</span><h2>{copy.channels.title}</h2><p>{copy.channels.intro}</p></div><div className="solution-channel-map"><div><small>{copy.channels.sourceLabel}</small><div>{copy.channels.sources.map(item=><span key={item}>{item}</span>)}</div></div><ArrowDown/><strong>{copy.channels.destination}</strong></div><p className="solution-note">{copy.channels.note}</p></section>

    <section className="solution-section solution-why"><div className="solution-sticky-heading"><span>03</span><h2>{copy.why.title}</h2><p>{copy.why.intro}</p></div><div className="solution-why-list">{copy.why.items.map((item,index)=><article key={item.title}><span>0{index+1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

    <section id="decision" className="solution-section solution-decision"><div className="solution-centered-heading"><span>04</span><h2>{copy.decision.title}</h2><p>{copy.decision.intro}</p></div><SolutionDemo slug={slug} copy={copy.decision}/><ol className="solution-decision-steps">{copy.decision.steps.map((item,index)=><li key={item}><b>{index+1}</b><span>{item}</span>{index<copy.decision.steps.length-1&&<MoveRight/>}</li>)}</ol></section>

    <section className="solution-section solution-benefits"><div className="solution-section-heading"><span>05</span><h2>{copy.benefits.title}</h2></div><div className="solution-benefit-grid">{copy.benefits.items.map((item,index)=><article key={item}><span>{String(index+1).padStart(2,"0")}</span><p>{item}</p></article>)}</div></section>

    <section className="solution-section solution-compare"><div className="solution-centered-heading"><span>06</span><h2>{copy.compare.title}</h2></div><div className="solution-compare-grid"><article><h3>{copy.compare.standardLabel}</h3>{copy.compare.standard.map(item=><p key={item}><CircleX/>{item}</p>)}</article><article className="solution-compare-positive"><h3>{copy.compare.transformedLabel}</h3>{copy.compare.transformed.map(item=><p key={item}><Check/>{item}</p>)}</article></div></section>

    <section className="solution-section solution-workflow"><div className="solution-section-heading"><span>07</span><h2>{copy.workflow.title}</h2></div><ol>{copy.workflow.steps.map((item,index)=><li key={item}><span>{index+1}</span><p>{item}</p></li>)}<li className="solution-workflow-result"><Sparkles/><p>{copy.workflow.result}</p></li></ol></section>

    <section className="solution-section solution-outcomes"><div className="solution-centered-heading"><span>08</span><h2>{copy.outcomes.title}</h2></div><div className="solution-outcome-orbit">{copy.outcomes.items.map((item,index)=><article key={item} style={{"--index":index} as React.CSSProperties}><Check/><p>{item}</p></article>)}</div></section>

    <section className="solution-section solution-next-hub"><div className="solution-section-heading"><span>09</span><h2>{copy.whyUs.title}</h2></div><div className="solution-next-grid">{copy.whyUs.items.map((item,index)=><article key={item.title}><Layers3/><small>0{index+1}</small><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>

    <section className="solution-section solution-final"><div><p className="solution-kicker">Next-Hub Solutions</p><h2>{copy.final.title}</h2><p>{copy.final.text}</p><div className="solution-actions"><LocalizedLink locale={locale} href={contactHref}>{copy.final.primary}<ArrowRight size={18}/></LocalizedLink><a href="#decision">{copy.final.secondary}</a></div></div></section>
  </div>;
}
