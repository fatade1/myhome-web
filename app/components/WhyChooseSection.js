"use client";
import {
  ListPlus,
  Users,
  Bell,
  Calendar,
  CreditCard,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const tools = [
  {
    icon: ListPlus,
    title: "Property Listing Tools",
    description:
      "List your properties on MyHome and reach tenants, buyers, and shortlet guests from one platform.",
  },
  {
    icon: Users,
    title: "Tenant Management",
    description:
      "Keep track of your tenants, manage agreements, and stay informed about occupancy across your properties.",
  },
  {
    icon: Bell,
    title: "Rent Reminders & Tracking",
    description:
      "Automated rent reminders help reduce defaults. Know when rent is due and when it has been paid.",
  },
  {
    icon: Calendar,
    title: "Booking & Inspection Visibility",
    description:
      "Manage shortlet bookings and property inspection requests from a single, organised dashboard.",
  },
  {
    icon: CreditCard,
    title: "Payment Tracking",
    description:
      "See every payment made across your rental portfolio. No disputes. No guesswork. Full transaction records.",
  },
  {
    icon: BarChart3,
    title: "Property Activity Overview",
    description:
      "Get a clear view of what is happening across all your properties — occupancy, payments, and activity at a glance.",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="landlords" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-green-subtle" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-6">
            <div
              className="tag-pill mx-auto w-fit mb-6"
              style={{ color: "#044222", background: "rgba(4, 66, 34, 0.08)" }}
            >
              For Landlords &amp; Property Owners
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              Better Tools for Landlords and Property Owners
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-gray-500 text-lg leading-relaxed text-center max-w-2xl mx-auto mb-16">
            MyHome helps landlords and property owners list properties, manage tenants, track rent
            activity, and improve visibility across their rental portfolio — all from one platform.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {tools.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="card-premium p-8 group h-full">
                <div className="w-16 h-16 rounded-2xl bg-light-green flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={28} className="text-dark-green" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="text-center">
            <Link
              href="/#waitlist"
              className="btn-primary !bg-dark-green hover:!bg-dark-green/90 inline-flex"
            >
              Join the Waitlist
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
