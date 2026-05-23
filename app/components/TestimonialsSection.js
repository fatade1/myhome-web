"use client";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const scenarios = [
  {
    name: "Ada",
    location: "Lekki, Lagos",
    role: "Tenant",
    color: "from-emerald-500/20 to-green-600/10",
    initial: "A",
    quote:
      "I've paid inspection fees more than once only to find out the house was no longer available. A platform that reviews listings before showing them would save people a lot of stress.",
  },
  {
    name: "Tunde",
    location: "Bodija, Ibadan",
    role: "Young Professional",
    color: "from-violet-500/20 to-purple-600/10",
    initial: "T",
    quote:
      "Raising one year rent at once is not easy. A structured savings plan like 11+1 would help me plan ahead instead of waiting until rent is due before panicking.",
  },
  {
    name: "Mrs. Adeola",
    location: "Abeokuta, Ogun",
    role: "Landlord",
    color: "from-amber-500/20 to-orange-600/10",
    initial: "A",
    quote:
      "Managing tenants and tracking payments manually can be stressful. I'd like a platform that helps me see what is happening across my properties without calling people every month.",
  },
  {
    name: "Chidinma",
    location: "Yaba, Lagos",
    role: "Shortlet User",
    color: "from-blue-500/20 to-indigo-600/10",
    initial: "C",
    quote:
      "Sometimes shortlet pictures online look very different from what you meet when you arrive. I want a platform that gives better confidence before I make a booking.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-6">
            <div
              className="tag-pill mx-auto w-fit mb-6"
              style={{ color: "#044222", background: "rgba(4, 66, 34, 0.08)" }}
            >
              Early Conversations &amp; User Scenarios
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              Real Housing Challenges from{" "}
              <span className="text-primary-green">Nigerians We&apos;ve Spoken With</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-gray-500 text-lg text-center max-w-xl mx-auto mb-16">
            These are representative scenarios from early conversations with people in Lagos, Ogun,
            and Oyo — the real problems MyHome is being built to solve.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {scenarios.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-premium p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <span
                      className="text-xl font-bold text-gray-700"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {item.initial}
                    </span>
                  </div>
                  <div>
                    <p
                      className="text-gray-900 font-bold text-[16px]"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {item.name}
                    </p>
                    <p className="text-gray-400 text-sm flex items-center gap-1.5 mt-0.5">
                      <MapPin size={13} />
                      {item.location}
                    </p>
                    <span className="inline-block mt-1.5 text-xs font-semibold text-primary-green bg-light-green px-2.5 py-0.5 rounded-full">
                      {item.role}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-600 text-[15px] leading-relaxed italic flex-1">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <p className="text-gray-500 text-lg mb-6 max-w-xl mx-auto">
              Join Nigerians waiting for a better way to rent, save, and manage homes.
            </p>
            <Link href="/#waitlist" className="btn-primary !bg-dark-green hover:!bg-dark-green/90 inline-flex">
              Join the Waitlist
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
