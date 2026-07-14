"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={item.question} className="rounded-2xl border border-white/10 bg-white/5">
            <button
              type="button"
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="text-base font-medium text-white">{item.question}</span>
              <ChevronDown className={`transition ${isOpen ? "rotate-180" : ""}`} size={18} />
            </button>
            {isOpen ? <p id={panelId} className="px-5 pb-5 text-sm leading-7 text-slate-400">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
