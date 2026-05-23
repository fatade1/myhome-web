"use client";
import {
  ShieldCheck,
  PiggyBank,
  Search,
  Building2,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    icon: PiggyBank,
    title: "Help people save toward rent",
    description:
      "The 11+1 Savings system gives tenants a structured, achievable way to prepare for rent months ahead — removing the pressure of last-minute scrambling.",
  },
  {
    icon: Search,
    title: "Make property discovery more trustworthy",
    description:
      "Every listing on MyHome goes through a review process designed to reduce fake agents, unavailable properties, and unclear information.",
  },
  {
    icon: Building2,
    title: "Give landlords better tools",
    description:
      "Landlords and property owners deserve a platform that helps them manage tenants, track rent, and oversee their properties without the chaos.",
  },
  {
    icon: ShieldCheck,
    title: "Bring confidence to the housing process",
    description:
      "Whether renting, buying, saving, or managing a property — MyHome Africa is building the structure and transparency that Nigerian housing has been missing.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-6">
            <div
              className="tag-pill mx-auto w-fit mb-6"
              style={{ color: "#044222", background: "rgba(4, 66, 34, 0.08)" }}
            >
              Why We Built This
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              Built to Restore Trust in the{" "}
              <span className="text-primary-green">Nigerian Housing Journey</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-gray-500 text-lg leading-relaxed text-center max-w-2xl mx-auto mb-16">
            MyHome Africa exists because finding, renting, buying, and managing property in Nigeria
            has become unnecessarily complicated. We are building a platform that helps people
            save for rent, discover trusted homes, manage properties, and make better housing
            decisions with confidence.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {pillars.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-premium p-8 flex items-start gap-5 h-full group">
                <div className="w-14 h-14 rounded-2xl bg-light-green flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={24} className="text-dark-green" />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
