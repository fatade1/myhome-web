"use client";
import {
  Cpu,
  Zap,
  TrendingUp,
  Users2,
  Wrench,
  UserCheck,
  ClipboardCheck,
  BarChart3,
  Calculator,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const futureFeatures = [
  { icon: Cpu, label: "Smart Home Integration", desc: "Control connected devices" },
  { icon: Zap, label: "Utility Payments", desc: "Pay all bills in one place" },
  { icon: TrendingUp, label: "Property Investment", desc: "Invest in real estate" },
  { icon: Users2, label: "Community Living", desc: "Connect with neighbors" },
  { icon: Wrench, label: "Home Services", desc: "Book repairs & cleaning" },
  { icon: UserCheck, label: "Tenant & Landlord Management", desc: "Streamlined agreements" },
  { icon: ClipboardCheck, label: "Maintenance Tracking", desc: "Track all repairs" },
  { icon: BarChart3, label: "Property Analytics", desc: "Data-driven insights" },
  { icon: Calculator, label: "Financial Planning", desc: "Housing finance planning" },
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
            <div className="tag-pill mx-auto w-fit mb-6">Full Vision</div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              Everything Home Will Soon Be in{" "}
              <span className="text-primary-green">MyHome</span>
            </h2>
            <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
              Our roadmap includes powerful features to transform your entire home
              experience.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto mb-12">
          {futureFeatures.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="card-dark p-6 group h-full">
                <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center mb-4 group-hover:bg-primary-green/20 transition-colors duration-300">
                  <item.icon size={22} className="text-primary-green" />
                </div>
                <h3 className="text-white font-semibold text-[15px] mb-1" style={{ fontFamily: "var(--font-outfit)" }}>
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
              And much more coming soon
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
