"use client";
import {
  SearchX,
  Banknote,
  PiggyBank,
  Building2,
  ListX,
  ServerCrash,
  ArrowDown,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  { icon: SearchX, text: "Finding houses is difficult" },
  { icon: Banknote, text: "Rent payment is stressful" },
  { icon: PiggyBank, text: "No structured savings system" },
  { icon: Building2, text: "Short-term rentals are hard to manage" },
  { icon: ListX, text: "Property listing process is scattered" },
  { icon: ServerCrash, text: "No centralized home management system" },
];

export default function ProblemSection() {
  return (
    <section className="relative bg-black py-24 lg:py-32 overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-dark-green/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="tag-pill mx-auto w-fit mb-6">The Problem</div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              Managing Property and Housing in Nigeria is{" "}
              <span className="text-primary-green">Stressful</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto mb-16">
          {problems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="card-dark p-6 flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                  <item.icon size={22} className="text-red-400" />
                </div>
                <p className="text-white/70 text-[15px] leading-relaxed pt-1">
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary-green/10 border border-primary-green/20">
              <ArrowDown size={20} className="text-primary-green animate-bounce" />
              <span className="text-white text-lg font-semibold" style={{ fontFamily: "var(--font-outfit)" }}>
                MyHome solves all of this in one place
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
