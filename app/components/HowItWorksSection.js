"use client";
import {
  UserPlus,
  UserCog,
  Search,
  PiggyBank,
  Home,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    step: 1,
    title: "Create Account",
    description: "Sign up in seconds with your email or phone number.",
    icon: UserPlus,
  },
  {
    step: 2,
    title: "Choose Your Role",
    description: "Select whether you're a tenant, landlord, agent, or investor.",
    icon: UserCog,
  },
  {
    step: 3,
    title: "Explore Properties",
    description: "Browse thousands of listings with smart filters and search.",
    icon: Search,
  },
  {
    step: 4,
    title: "Save or Rent",
    description: "Start saving towards rent or complete your rental instantly.",
    icon: PiggyBank,
  },
  {
    step: 5,
    title: "Manage Your Home",
    description: "Track payments, manage guests, and monitor everything in one place.",
    icon: Home,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <div className="tag-pill mx-auto w-fit mb-6" style={{ color: "#044222", background: "rgba(4, 66, 34, 0.08)" }}>
              How It Works
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              How MyHome Works
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
              Get started in just a few simple steps.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {steps.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex gap-6 lg:gap-8 mb-6 last:mb-0">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="step-number flex-shrink-0">
                    {item.step}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-full min-h-[60px] bg-gradient-to-b from-primary-green/30 to-transparent mt-2" />
                  )}
                </div>

                {/* Card */}
                <div className="card-premium p-6 flex-1 flex items-start gap-4 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-light-green flex items-center justify-center flex-shrink-0">
                    <item.icon size={22} className="text-dark-green" />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold text-gray-900 mb-1"
                      style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
