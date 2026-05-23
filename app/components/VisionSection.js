"use client";
import {
  Search,
  Home,
  Wrench,
  PiggyBank,
  BarChart3,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const roadmapItems = [
  { icon: Search, label: "Smarter Property Discovery", desc: "Better tools to find the right home" },
  { icon: Home, label: "Home Ownership Support", desc: "Helping Nigerians own property" },
  { icon: BarChart3, label: "Landlord Tools", desc: "More powerful property management features" },
  { icon: Wrench, label: "Home Services", desc: "Connect with trusted service providers" },
  { icon: PiggyBank, label: "Payment & Savings Tools", desc: "More ways to save and pay for housing" },
  { icon: BarChart3, label: "Property Management Improvements", desc: "Advanced oversight for property owners" },
];

export default function VisionSection() {
  return (
    <section className="relative gradient-dark py-24 lg:py-32 overflow-hidden noise">
      {/* Glowing orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary-green/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-green/5 rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <div className="tag-pill mx-auto w-fit mb-6">What&apos;s Coming</div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              More Home Solutions{" "}
              <span className="text-primary-green">Coming Soon</span>
            </h2>
            <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
              MyHome is just getting started. We are building more solutions to improve how
              Nigerians find, manage, and own homes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto mb-12">
          {roadmapItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="card-dark p-6 group h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center mb-4 group-hover:bg-primary-green/20 transition-colors duration-300">
                  <item.icon size={22} className="text-primary-green" />
                </div>
                <h3
                  className="text-white font-semibold text-[15px] mb-1"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {item.label}
                </h3>
                <p className="text-white/40 text-sm">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-primary-green/80 text-sm font-medium">
              <Sparkles size={16} />
              And more being built with Nigerian homes in mind
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
