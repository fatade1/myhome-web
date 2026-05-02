"use client";
import {
  Layers,
  Search,
  ShieldCheck,
  PiggyBank,
  CreditCard,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  {
    icon: Layers,
    title: "All-in-One Platform",
    description: "Everything you need for your home is right here. No more switching between apps.",
  },
  {
    icon: Search,
    title: "Easy Property Search",
    description: "Advanced filters, map views, and smart recommendations so you can actually find what you are looking for.",
  },
  {
    icon: ShieldCheck,
    title: "Secure System",
    description: "Your money and your data are protected. We take security seriously.",
  },
  {
    icon: PiggyBank,
    title: "Smart Savings",
    description: "Save towards rent at your own pace, with a plan that actually works for you.",
  },
  {
    icon: CreditCard,
    title: "Simple Rent Management",
    description: "Pay rent, keep track of payments, and access your receipts whenever you need them.",
  },
  {
    icon: Sparkles,
    title: "Modern Real Estate Experience",
    description: "A clean, easy-to-use app that makes renting and managing a home feel simple.",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-myhome" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-green-subtle" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <div className="tag-pill mx-auto w-fit mb-6" style={{ color: "#044222", background: "rgba(4, 66, 34, 0.08)" }}>
              Why MyHome
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              Why Choose MyHome
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
              Built for everyone who rents, owns, or manages a home.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="card-premium p-8 text-center group h-full">
                <div className="w-16 h-16 rounded-2xl bg-light-green flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={28} className="text-dark-green" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
