"use client";
import {
  Search,
  MapPin,
  Home,
  Phone,
  PiggyBank,
  TrendingUp,
  CreditCard,
  BarChart3,
  Building2,
  CalendarCheck,
  Users,
  Activity,
  ListPlus,
  Upload,
  ClipboardList,
  Bell,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    title: "Property Rent, Listings & Search",
    description: "Find your perfect home with powerful search and filtering tools.",
    icon: Home,
    color: "from-emerald-500/20 to-green-600/10",
    iconColor: "text-emerald-400",
    items: [
      { icon: Search, text: "Search for houses" },
      { icon: MapPin, text: "Filter by location, price, type" },
      { icon: Home, text: "View property details" },
      { icon: Phone, text: "Contact agents" },
    ],
  },
  {
    title: "Rent & Contribution (Savings)",
    description: "Smart savings and rent management to make housing affordable.",
    icon: PiggyBank,
    color: "from-blue-500/20 to-indigo-600/10",
    iconColor: "text-blue-400",
    items: [
      { icon: PiggyBank, text: "Save for rent" },
      { icon: TrendingUp, text: "Track contributions" },
      { icon: CreditCard, text: "Manage rent payments" },
      { icon: BarChart3, text: "Monitor savings progress" },
    ],
  },
  {
    title: "Short-Term Rental Management",
    description: "Manage your Airbnb-style rentals effortlessly.",
    icon: Building2,
    color: "from-violet-500/20 to-purple-600/10",
    iconColor: "text-violet-400",
    items: [
      { icon: Building2, text: "Manage Airbnb-style rentals" },
      { icon: CalendarCheck, text: "Track bookings" },
      { icon: Users, text: "Manage guests" },
      { icon: Activity, text: "Monitor availability" },
    ],
  },
  {
    title: "Property Listing & Sales",
    description: "List and sell properties with ease, reach buyers faster.",
    icon: ListPlus,
    color: "from-amber-500/20 to-orange-600/10",
    iconColor: "text-amber-400",
    items: [
      { icon: ListPlus, text: "List properties for sale" },
      { icon: Upload, text: "Upload property details" },
      { icon: ClipboardList, text: "Manage listings" },
      { icon: Bell, text: "Track inquiries" },
    ],
  },
];

export default function MVPFeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-green-subtle" />
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <div className="tag-pill mx-auto w-fit mb-6" style={{ color: "#044222", background: "rgba(4, 66, 34, 0.08)" }}>
              MVP Features
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              Core Features
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
              Everything you need to find, save, and manage your home. Here is what we are launching with.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-premium p-8 h-full group">
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon size={26} className={feature.iconColor} />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-gray-900 mb-1"
                      style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-3 pl-0">
                  {feature.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-3 text-gray-600 text-[15px]"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                        <item.icon size={16} className="text-gray-400" />
                      </div>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Link href="/#waitlist" className="btn-primary !bg-dark-green hover:!bg-dark-green/90 inline-flex">
              Join Waitlist to Get Early Access
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
