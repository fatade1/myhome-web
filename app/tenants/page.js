"use client";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  PiggyBank,
  CreditCard,
  ShieldCheck,
  Bell,
  MessageSquare,
  MapPin,
  Star,
  CheckCircle,
  Home,
  Wrench,
  FileText,
  Smartphone,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

const coreFeatures = [
  {
    icon: Search,
    title: "Smart Property Search",
    description:
      "Browse thousands of verified listings. Filter by location, price, size, and property type so you only see what actually fits your needs.",
    color: "from-emerald-500/20 to-green-600/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    description:
      "Every listing on MyHome goes through a verification process. No fake agents, no ghost apartments, no money wasted on fake properties.",
    color: "from-blue-500/20 to-indigo-600/10",
    iconColor: "text-blue-400",
  },
  {
    icon: PiggyBank,
    title: "11+1 Rent Savings",
    description:
      "Save for your rent over 11 months and MyHome covers the 12th month for you. A simple way to make rent stress-free all year round.",
    color: "from-violet-500/20 to-purple-600/10",
    iconColor: "text-violet-400",
  },
  {
    icon: CreditCard,
    title: "Easy Rent Payments",
    description:
      "Pay your rent directly through the app. Get instant receipts, track every payment, and never lose records of what you have paid.",
    color: "from-amber-500/20 to-orange-600/10",
    iconColor: "text-amber-400",
  },
  {
    icon: Wrench,
    title: "Maintenance Requests",
    description:
      "Report issues to your landlord directly from the app. Track the status of repairs so nothing gets forgotten or ignored.",
    color: "from-rose-500/20 to-pink-600/10",
    iconColor: "text-rose-400",
  },
  {
    icon: FileText,
    title: "Digital Agreements",
    description:
      "Review, sign, and store your tenancy agreement digitally. Access it anytime without needing to keep a paper copy.",
    color: "from-cyan-500/20 to-teal-600/10",
    iconColor: "text-cyan-400",
  },
];

const benefits = [
  "Search verified properties near you",
  "Pay rent securely from your phone",
  "Save towards rent with 11+1 Savings",
  "Get instant payment receipts",
  "Submit and track maintenance requests",
  "Store your tenancy agreement digitally",
  "Direct messaging with your landlord",
  "Move-in and move-out checklists",
];

const steps = [
  {
    step: 1,
    icon: Smartphone,
    title: "Download MyHome",
    description: "Sign up in seconds with your phone number or email.",
  },
  {
    step: 2,
    icon: Search,
    title: "Find Your Home",
    description:
      "Search from thousands of verified rentals across Nigeria. Filter by budget, location, and more.",
  },
  {
    step: 3,
    icon: PiggyBank,
    title: "Save or Pay Rent",
    description:
      "Start the 11+1 Savings plan or pay your rent directly through the app.",
  },
  {
    step: 4,
    icon: Home,
    title: "Manage Your Home",
    description:
      "Track payments, raise maintenance requests, and manage everything from one place.",
  },
];

const stats = [
  { value: "0", label: "Scam risk with verified listings", prefix: "", suffix: "%" },
  { value: "11+1", label: "Months to own your rent cycle", prefix: "", suffix: "" },
  { value: "100%", label: "Digital and no paperwork needed", prefix: "", suffix: "" },
  { value: "24/7", label: "Access to your rental records", prefix: "", suffix: "" },
];

export default function TenantsPage() {
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
                For Tenants
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                Find, Pay, and{" "}
                <span className="text-primary-green">Manage</span>{" "}
                Your Rent in One App
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
                No more chasing agents, losing payment receipts, or dealing with
                fake listings. MyHome puts you in control of your entire renting
                experience.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#waitlist" className="btn-primary text-base">
                  Join Waitlist
                  <ArrowRight size={18} />
                </Link>
                <Link href="/savings" className="btn-secondary text-base">
                  Explore 11+1 Savings
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
              <div
                className="tag-pill mx-auto w-fit mb-6"
                style={{ color: "#044222", background: "rgba(4, 66, 34, 0.08)" }}
              >
                Tenant Features
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                Everything a Renter Needs
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
                Tools built to make your life as a tenant simpler and more secure.
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

      {/* Why MyHome for Tenants */}
      <section className="relative bg-black py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-dark-green/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <div className="tag-pill w-fit mb-6">Why Tenants Love MyHome</div>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                  style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                >
                  Renting in Nigeria Just Got{" "}
                  <span className="text-primary-green">A Lot Easier</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  Between fake listings, lost receipts, and landlords who never
                  respond to repairs, renting has always been stressful. MyHome
                  fixes all of that in one app.
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
                  What to Expect
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "0%", label: "Scam risk on verified listings" },
                    { value: "11+1", label: "Savings plan to cover your rent" },
                    { value: "100%", label: "Digital and paperwork-free" },
                    { value: "24/7", label: "Access to your rental records" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-4 rounded-2xl bg-white/3 border border-white/5">
                      <div
                        className="text-primary-green font-bold text-3xl mb-1"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
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

      {/* How It Works */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 lg:mb-20">
              <div
                className="tag-pill mx-auto w-fit mb-6"
                style={{ color: "#044222", background: "rgba(4, 66, 34, 0.08)" }}
              >
                How It Works
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                Up and Running in 4 Steps
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
                From signing up to managing your home, it all takes minutes.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {steps.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-6 lg:gap-8 mb-6 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="step-number flex-shrink-0">{item.step}</div>
                    {i < steps.length - 1 && (
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

      {/* CTA Section */}
      <section className="relative gradient-dark py-24 lg:py-32 overflow-hidden noise">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-green/8 rounded-full blur-[200px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 rounded-3xl bg-primary-green/15 flex items-center justify-center mx-auto mb-6">
                <Home size={36} className="text-primary-green" />
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                Ready to Rent Smarter?
              </h2>
              <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
                Join thousands of tenants who are already on the MyHome
                waitlist. Be the first to experience renting done right.
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
