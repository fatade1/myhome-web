"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  PiggyBank,
  CalendarCheck,
  ShieldCheck,
  Bell,
  CreditCard,
  TrendingUp,
  Users,
  CheckCircle,
  Sparkles,
  Calculator,
  Clock,
  Target,
  Wallet,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import RentCalculator from "../components/RentCalculator";

const howItWorks = [
  {
    step: 1,
    title: "Create Your Account",
    description: "Sign up on MyHome and set up your profile in seconds.",
    icon: Users,
  },
  {
    step: 2,
    title: "Join a Savings Plan",
    description: "Select the 11+1 Savings plan and set your target rent amount.",
    icon: Target,
  },
  {
    step: 3,
    title: "Save Monthly for 11 Months",
    description: "Contribute a fixed amount monthly. We track every payment and keep you on schedule.",
    icon: CalendarCheck,
  },
  {
    step: 4,
    title: "MyHome Completes Your Rent",
    description: "In the 12th month, MyHome adds the final contribution, and your rent is fully funded.",
    icon: Sparkles,
  },
];

const keyFeatures = [
  {
    icon: TrendingUp,
    title: "Savings Progress Tracking",
    description: "Real-time dashboard showing exactly how much you've saved and how much is left.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Automated reminders so you never miss a contribution deadline.",
  },
  {
    icon: CreditCard,
    title: "Auto Payment Option",
    description: "Set up automatic deductions from your bank account for hassle-free saving.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Savings",
    description: "Your funds are held securely with bank-grade encryption and protection.",
  },
  {
    icon: Clock,
    title: "Flexible Start Dates",
    description: "Begin your savings cycle any month, on your own schedule.",
  },
  {
    icon: Wallet,
    title: "Easy Withdrawal",
    description: "Rent is paid directly to your landlord when the cycle completes.",
  },
];

export default function SavingsPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-hero relative min-h-[85vh] flex items-center overflow-hidden noise">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-green/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-green/8 rounded-full blur-[140px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <div className="tag-pill mb-6 mx-auto w-fit">
                <span className="w-2 h-2 bg-primary-green rounded-full animate-pulse" />
                11+1 Savings
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                Save for Rent the{" "}
                <span className="text-primary-green">Smart Way</span>{" "}
                with 11+1 Savings
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
                Contribute for 11 months and MyHome covers your rent in the 12th month.
                No stress. No last-minute scrambles. Just smart saving.
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

      {/* What is 11+1 Savings */}
      <section className="relative bg-black py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-dark-green/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <div className="tag-pill w-fit mb-6">How It Works</div>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                  style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                >
                  What is{" "}
                  <span className="text-primary-green">11+1 Savings?</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  11+1 Savings is a monthly rent savings program where you save consistently
                  for 11 months, and MyHome completes your rent by adding the 12th month&apos;s
                  contribution, <span className="text-white font-medium">completely on us</span>.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-white/50 text-base leading-relaxed">
                  Think of it as a savings bonus. You commit to a plan, stay
                  consistent, and we cover your final month. It&apos;s our way of
                  making rent more manageable for every Nigerian.
                </p>
              </ScrollReveal>
            </div>

            {/* Example Card */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="card-dark p-8 sm:p-10 rounded-3xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary-green/15 flex items-center justify-center">
                    <Calculator size={24} className="text-primary-green" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-outfit)" }}>
                      Example Breakdown
                    </h3>
                    <p className="text-white/40 text-sm">₦1.2M Annual Rent</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between py-3 border-b border-white/5">
                    <span className="text-white/60 text-sm">Annual Rent</span>
                    <span className="text-white font-semibold">₦1,200,000</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/5">
                    <span className="text-white/60 text-sm">Monthly Contribution</span>
                    <span className="text-white font-semibold">₦100,000</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/5">
                    <span className="text-white/60 text-sm">Your Total (11 months)</span>
                    <span className="text-white font-semibold">₦1,100,000</span>
                  </div>
                  <div className="flex items-center justify-between py-3 bg-primary-green/10 rounded-xl px-4 -mx-4">
                    <span className="text-primary-green text-sm font-medium">MyHome Adds (12th month)</span>
                    <span className="text-primary-green font-bold text-lg">+ ₦100,000</span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-4 border-t border-white/10">
                  <span className="text-white font-semibold">Total Rent Covered</span>
                  <span className="text-primary-green font-bold text-xl">₦1,200,000 ✓</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Rent Calculator Section */}
      <section className="relative pt-24 lg:pt-32 pb-12 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <RentCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 lg:mb-20">
              <div className="tag-pill mx-auto w-fit mb-6" style={{ color: "#044222", background: "rgba(4, 66, 34, 0.08)" }}>
                Step by Step
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                How 11+1 Savings Works
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
                Four simple steps to stress-free rent.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {howItWorks.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-6 lg:gap-8 mb-6 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="step-number flex-shrink-0">
                      {item.step}
                    </div>
                    {i < howItWorks.length - 1 && (
                      <div className="w-0.5 h-full min-h-[60px] bg-gradient-to-b from-primary-green/30 to-transparent mt-2" />
                    )}
                  </div>
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

      {/* Key Features */}
      <section className="relative gradient-dark py-24 lg:py-32 overflow-hidden noise">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary-green/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-green/5 rounded-full blur-[180px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 lg:mb-20">
              <div className="tag-pill mx-auto w-fit mb-6">Key Features</div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                Built for <span className="text-primary-green">Consistency</span>
              </h2>
              <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
                Tools that make saving for rent simple and rewarding.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto">
            {keyFeatures.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="card-dark p-6 group h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center mb-4 group-hover:bg-primary-green/20 transition-colors duration-300">
                    <item.icon size={22} className="text-primary-green" />
                  </div>
                  <h3 className="text-white font-semibold text-[15px] mb-1" style={{ fontFamily: "var(--font-outfit)" }}>
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-green-subtle" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 rounded-3xl bg-light-green flex items-center justify-center mx-auto mb-6">
                <PiggyBank size={36} className="text-dark-green" />
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                Ready to Save Smarter?
              </h2>
              <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
                Join the waitlist today and be among the first to start your 11+1 Savings plan
                when MyHome launches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#waitlist" className="btn-primary !bg-dark-green hover:!bg-dark-green/90 inline-flex text-base">
                  Join Waitlist Now
                  <ArrowRight size={18} />
                </Link>
                <Link href="/" className="btn-primary !bg-gray-100 !text-gray-900 hover:!bg-gray-200 inline-flex text-base">
                  Explore MyHome
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
