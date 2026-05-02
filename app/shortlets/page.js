"use client";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  ShieldCheck,
  Star,
  MapPin,
  CreditCard,
  MessageSquare,
  CheckCircle,
  Building2,
  Wifi,
  Utensils,
  Car,
  Waves,
  Tv,
  Wind,
  Users,
  Clock,
  Search,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

const coreFeatures = [
  {
    icon: ShieldCheck,
    title: "Verified Shortlets",
    description:
      "Every shortlet listing is verified before going live. What you see is exactly what you get, no surprises on arrival.",
    color: "from-emerald-500/20 to-green-600/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: CalendarCheck,
    title: "Instant Booking",
    description:
      "Book your stay in minutes. No back-and-forth calls, no manual confirmations, just pick your dates and pay.",
    color: "from-blue-500/20 to-indigo-600/10",
    iconColor: "text-blue-400",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Pay securely through the app. Your money is held safely and only released to the host after you check in.",
    color: "from-violet-500/20 to-purple-600/10",
    iconColor: "text-violet-400",
  },
  {
    icon: MapPin,
    title: "Locations Across Nigeria",
    description:
      "Find shortlets in Lagos, Abuja, Port Harcourt, and more. Filter by neighborhood to find the perfect location.",
    color: "from-amber-500/20 to-orange-600/10",
    iconColor: "text-amber-400",
  },
  {
    icon: MessageSquare,
    title: "Direct Host Messaging",
    description:
      "Chat directly with the property host before and during your stay. Get answers fast without calling multiple numbers.",
    color: "from-rose-500/20 to-pink-600/10",
    iconColor: "text-rose-400",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    description:
      "Read honest reviews from real guests who have stayed there. Leave your own review to help other travelers.",
    color: "from-cyan-500/20 to-teal-600/10",
    iconColor: "text-cyan-400",
  },
];

const amenities = [
  { icon: Wifi, label: "WiFi" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Tv, label: "Cable/Netflix" },
  { icon: Utensils, label: "Equipped Kitchen" },
  { icon: Car, label: "Parking Space" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Users, label: "Concierge" },
];

const propertyTypes = [
  {
    type: "Studio Apartments",
    description: "Compact and affordable. Perfect for solo travelers or short business trips.",
    range: "From ₦60,000/night",
    badge: "Most Booked",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
  {
    type: "1-2 Bedroom Apartments",
    description: "Comfortable spaces for couples, families, or friends traveling together.",
    range: "From ₦100,000/night",
    badge: "Popular",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  {
    type: "Luxury Penthouses",
    description: "Premium apartments with top-of-the-range finishes and breathtaking views.",
    range: "From ₦350,000/night",
    badge: "Premium",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  },
  {
    type: "Entire Houses",
    description: "Full residential homes for families, group getaways, or extended stays.",
    range: "From ₦200,000/night",
    badge: "Great for Groups",
    badgeColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  },
];

const hostBenefits = [
  "List your furnished apartment in minutes",
  "Set your own pricing and availability",
  "Receive secure payments directly to your account",
  "View guest profiles and booking history",
  "Manage all bookings from one dashboard",
  "Access detailed earnings reports",
];

export default function ShortletsPage() {
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
                Shortlets & Apartments
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                Find a{" "}
                <span className="text-primary-green">Premium Stay</span>{" "}
                Anywhere in Nigeria
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
                Browse verified shortlets and furnished apartments across Lagos,
                Abuja, Port Harcourt, and beyond. Book securely, stay
                comfortably.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#waitlist" className="btn-primary text-base">
                  Join Waitlist
                  <ArrowRight size={18} />
                </Link>
                <Link href="/landlords" className="btn-secondary text-base">
                  List Your Property
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Property Types */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 lg:mb-20">
              <div
                className="tag-pill mx-auto w-fit mb-6"
                style={{ color: "#044222", background: "rgba(4, 66, 34, 0.08)" }}
              >
                Property Types
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                A Stay for Every Occasion
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
                Whether you are traveling for work, on holiday, or just need a
                temporary home, we have the right place for you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((type, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="card-premium p-7 h-full group flex flex-col">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border mb-5 w-fit ${type.badgeColor}`}>
                    {type.badge}
                  </div>
                  <h3
                    className="text-lg font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                  >
                    {type.type}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                    {type.description}
                  </p>
                  <div className="text-primary-green font-semibold text-sm">
                    {type.range}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
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
                Booking Features
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                Booking Made Simple and Safe
              </h2>
              <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
                No more stories. No more surprises. Just great stays.
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

      {/* Amenities */}
      <section className="relative bg-black py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-dark-green/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="tag-pill mx-auto w-fit mb-6">What to Expect</div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                Filter by Amenities That Matter
              </h2>
              <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
                Search for shortlets by the features you need, not just the
                price.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20">
            {amenities.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="card-dark p-6 group text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-green/20 transition-colors duration-300">
                    <item.icon size={22} className="text-primary-green" />
                  </div>
                  <p className="text-white/70 text-sm font-medium">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* For Hosts Strip */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <div className="tag-pill w-fit mb-6">For Property Owners</div>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                  style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                >
                  Have a Furnished Apartment?{" "}
                  <span className="text-primary-green">Earn from It.</span>
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  List your furnished property on MyHome and start receiving
                  bookings from verified guests across Nigeria. We handle the
                  payments so you can focus on hospitality.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {hostBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/70 text-[15px]">
                      <CheckCircle size={18} className="text-primary-green flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <Link href="/landlords" className="btn-primary inline-flex text-base">
                  Learn More for Hosts
                  <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="right">
              <div className="card-dark p-8 sm:p-10 rounded-3xl">
                <h3
                  className="text-white font-bold text-xl mb-8"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Shortlet at a Glance
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "100%", label: "Listings verified before going live" },
                    { value: "0", label: "Hidden charges on bookings", prefix: "₦" },
                    { value: "24/7", label: "Booking support available" },
                    { value: "Instant", label: "Payment on check-in" },
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
                Ready to Book Your Next Stay?
              </h2>
              <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
                Join the MyHome waitlist today. Be first in line when we launch
                our shortlet platform across Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#waitlist" className="btn-primary text-base">
                  Join Waitlist Now
                  <ArrowRight size={18} />
                </Link>
                <Link href="/landlords" className="btn-secondary text-base">
                  List Your Property
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
