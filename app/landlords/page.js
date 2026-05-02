"use client";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Users,
  BarChart3,
  Landmark,
  FileText,
  Brain,
  CheckCircle,
  Home,
  Search,
  CreditCard,
  Wallet,
  Bell,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

const coreFeatures = [
  {
    icon: Building2,
    title: "Property Listing",
    description: "List unlimited properties with photos, videos, descriptions, and pricing. Reach thousands of potential tenants and buyers.",
    color: "from-emerald-500/20 to-green-600/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: Users,
    title: "Tenant Management",
    description: "Manage all your tenants from one dashboard. Track lease periods, communication history, and tenant profiles.",
    color: "from-blue-500/20 to-indigo-600/10",
    iconColor: "text-blue-400",
  },
  {
    icon: BarChart3,
    title: "Rent Tracking",
    description: "Monitor rent payments in real-time. Track who has paid, who is due, and view complete payment histories.",
    color: "from-violet-500/20 to-purple-600/10",
    iconColor: "text-violet-400",
  },
  {
    icon: Landmark,
    title: "Virtual Accounts",
    description: "Each property gets a unique virtual account for seamless rent collection and transparent financial records.",
    color: "from-amber-500/20 to-orange-600/10",
    iconColor: "text-amber-400",
  },
  {
    icon: FileText,
    title: "Tenancy Agreements",
    description: "Generate and manage digital tenancy agreements. Send, sign, and store all lease documents securely.",
    color: "from-rose-500/20 to-pink-600/10",
    iconColor: "text-rose-400",
  },
  {
    icon: Brain,
    title: "AI Insights",
    description: "Data-driven insights on market pricing, occupancy trends, and rental yield to maximize your property returns.",
    color: "from-cyan-500/20 to-teal-600/10",
    iconColor: "text-cyan-400",
  },
];

const benefits = [
  "List properties in minutes",
  "Track all rent payments automatically",
  "Digital tenancy agreements",
  "Virtual accounts for each property",
  "AI-powered pricing suggestions",
  "Real-time occupancy analytics",
  "Tenant screening tools",
  "Maintenance request tracking",
];

const freeFeatures = [
  "Browse property listings",
  "View property details",
  "Search and filter properties",
  "Save favorite properties",
  "View neighborhood info",
  "Access basic support",
];

const premiumLandlordFeatures = [
  "Unlimited property listings",
  "Full tenant management",
  "Real-time rent tracking",
  "Virtual accounts per property",
  "Digital tenancy agreements",
  "AI-powered insights & analytics",
  "Priority support",
  "Maintenance request tracking",
];

export default function LandlordsPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-hero relative min-h-[85vh] flex items-center overflow-hidden noise">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-green/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-green/8 rounded-full blur-[140px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="tag-pill mb-6 mx-auto w-fit">
                <span className="w-2 h-2 bg-primary-green rounded-full animate-pulse" />
                For Landlords
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                A Smarter Way to{" "}
                <span className="text-primary-green">Manage</span>{" "}
                Your Properties
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
                List properties, manage tenants, track rent, handle agreements, and get data-driven
                insights. All from one platform built for landlords.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#waitlist" className="btn-primary text-base">
                  Join Waitlist
                  <ArrowRight size={18} />
                </Link>
                <Link href="/" className="btn-secondary text-base">
                  Back to Home
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Core Features */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-green-subtle" />
        <div className="absolute inset-0 dot-pattern opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 lg:mb-20">
              <div className="tag-pill mx-auto w-fit mb-6" style={{ color: "#044222", background: "rgba(4, 66, 34, 0.08)" }}>
                Platform Features
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                Everything You Need to Manage Properties
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
                Practical tools built for Nigerian landlords and property managers.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreFeatures.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="card-premium p-8 h-full group">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon size={26} className={feature.iconColor} />
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="relative bg-black py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-dark-green/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <div className="tag-pill w-fit mb-6">Why MyHome for Landlords</div>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                  style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                >
                  Stop Managing Properties the{" "}
                  <span className="text-primary-green">Old Way</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  MyHome replaces spreadsheets, WhatsApp groups, and manual tracking
                  with one platform that saves you time and helps you earn more from your properties.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="grid sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/70 text-[15px]">
                      <CheckCircle size={18} className="text-primary-green flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Stats Card */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="card-dark p-8 sm:p-10 rounded-3xl">
                <h3
                  className="text-white font-bold text-xl mb-8"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Expected Impact
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "80%", label: "Less time managing" },
                    { value: "95%", label: "Rent collection rate" },
                    { value: "3x", label: "Faster tenant placement" },
                    { value: "100%", label: "Payment transparency" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-4 rounded-2xl bg-white/3 border border-white/5">
                      <div className="text-primary-green font-bold text-3xl mb-1" style={{ fontFamily: "var(--font-outfit)" }}>
                        {stat.value}
                      </div>
                      <div className="text-white/40 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 lg:mb-20">
              <div className="tag-pill mx-auto w-fit mb-6" style={{ color: "#044222", background: "rgba(4, 66, 34, 0.08)" }}>
                Pricing
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                Simple, Transparent Pricing
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
                No surprises. No hidden charges. Just straightforward pricing.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6 items-start">
            {/* Basic Plan */}
            <ScrollReveal delay={0.05}>
              <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10 flex flex-col shadow-sm h-full">
                <div className="mb-8">
                  <span className="inline-block text-xs font-bold text-gray-400 uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full mb-5">
                    Basic
                  </span>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-5xl font-black text-gray-900" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                      &#8358;0
                    </span>
                    <span className="text-gray-400 text-sm mb-2">/forever</span>
                  </div>
                  <p className="text-sm text-gray-400">Free, no card required</p>
                </div>

                <div className="h-px bg-gray-100 mb-8" />

                <div className="space-y-5 flex-1">
                  {freeFeatures.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3.5">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-gray-300" />
                      </div>
                      <span className="text-[15px] text-gray-600 leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Premium Plan */}
            <ScrollReveal delay={0.1}>
              <div className="rounded-3xl overflow-hidden flex flex-col shadow-xl">
                {/* Dark header */}
                <div className="bg-gradient-to-br from-dark-green via-[#065a30] to-black px-8 sm:px-10 pt-8 sm:pt-10 pb-12 relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary-green/20 rounded-full blur-3xl" />
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-green/20 border border-primary-green/30 rounded-full text-primary-green text-sm font-semibold mb-5 relative">
                    <Star size={14} />
                    Premium Plan
                  </div>
                  <div className="flex items-baseline gap-1 mb-2 relative">
                    <span className="text-white/50 text-xl font-bold">&#8358;</span>
                    <span className="text-white font-black text-5xl sm:text-6xl" style={{ fontFamily: "var(--font-outfit)" }}>
                      5,000
                    </span>
                    <span className="text-white/40 text-lg">/mo</span>
                  </div>
                  <p className="text-white/40 text-sm relative">
                    + 5% charge on rental transactions
                  </p>
                </div>

                {/* Features */}
                <div className="bg-white px-8 sm:px-10 py-8 flex-1 border border-t-0 border-primary-green/20 rounded-b-3xl">
                  <div className="space-y-5 mb-10">
                    {premiumLandlordFeatures.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3.5">
                        <div className="w-5 h-5 rounded-full bg-light-green flex items-center justify-center flex-shrink-0">
                          <CheckCircle size={12} className="text-dark-green" />
                        </div>
                        <span className="text-gray-700 text-[15px] leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/#waitlist"
                    className="btn-primary !bg-dark-green hover:!bg-dark-green/90 w-full text-center text-base"
                  >
                    Join Waitlist for Early Access
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative gradient-dark py-24 lg:py-32 overflow-hidden noise">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-green/8 rounded-full blur-[200px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 rounded-3xl bg-primary-green/15 flex items-center justify-center mx-auto mb-6">
                <Building2 size={36} className="text-primary-green" />
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                Ready to Manage Smarter?
              </h2>
              <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
                Hundreds of landlords are already on the MyHome waitlist.
                Join them and get early access before we launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#waitlist" className="btn-primary text-base">
                  Join Waitlist Now
                  <ArrowRight size={18} />
                </Link>
                <Link href="/savings" className="btn-secondary text-base">
                  Learn About 11+1 Savings
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
