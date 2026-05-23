"use client";
import {
  UserX,
  Receipt,
  Banknote,
  FileWarning,
  HousePlug,
  ShieldAlert,
  ArrowDown,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  {
    icon: UserX,
    title: "Fake Agents & Fake Listings",
    text: "Listings that don't exist. Agents who disappear after collecting fees. Trust is hard to find.",
  },
  {
    icon: Receipt,
    title: "Repeated Inspection Fee Scams",
    text: "Paying to view a property that was already taken, or was never real to begin with.",
  },
  {
    icon: Banknote,
    title: "Raising 1–2 Years Rent Upfront",
    text: "Most landlords demand one or two years rent at once — leaving tenants financially strained.",
  },
  {
    icon: FileWarning,
    title: "High Agreement & Caution Fees",
    text: "Agreement fees, legal fees, caution deposits — costs that pile up before you even move in.",
  },
  {
    icon: HousePlug,
    title: "Unverified Shortlets",
    text: "Shortlet photos online rarely match what you meet on arrival. Surprises are rarely good ones.",
  },
  {
    icon: ShieldAlert,
    title: "No Trust in Online Listings",
    text: "Multiple agents managing the same property. Unclear titles. Inflated prices. No accountability.",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative bg-black py-24 lg:py-32 overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-dark-green/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-6">
            <div className="tag-pill mx-auto w-fit mb-6">The Problem</div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              Housing in Nigeria Shouldn&apos;t Be{" "}
              <span className="text-primary-green">This Stressful</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-white/50 text-lg leading-relaxed text-center max-w-2xl mx-auto mb-16">
            From paying repeated inspection fees to dealing with fake listings and sudden rent pressure,
            finding and managing a home in Nigeria often comes with too much uncertainty. MyHome Africa
            was created to bring structure, transparency, and trust into the process.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto mb-16">
          {problems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="card-dark p-6 flex flex-col gap-4 group h-full">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                  <item.icon size={22} className="text-red-400" />
                </div>
                <div>
                  <h3
                    className="text-white font-semibold text-[15px] mb-1"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary-green/10 border border-primary-green/20">
              <ArrowDown size={20} className="text-primary-green animate-bounce" />
              <span className="text-white text-lg font-semibold" style={{ fontFamily: "var(--font-outfit)" }}>
                MyHome Africa was built to change this reality
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
