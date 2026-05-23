"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, PiggyBank, CreditCard, Building2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    tag: "Property Search",
    icon: Search,
    iconColor: "text-emerald-400",
    iconBg: "from-emerald-500/20 to-green-600/10",
    headline: "Find Homes with More Confidence",
    description:
      "MyHome Africa is building a trusted property review system that helps reduce fake listings, unreliable agents, and unclear property information. Every listing goes through a review process designed to improve trust and transparency across Nigeria.",
    cta: { label: "Search Properties", href: "/tenants" },
    screen: "/app-screens/search.png",
    alt: "MyHome App Property Search Screen",
    imageRight: true,
    bullets: [
      "Carefully reviewed listings",
      "Reduced fake agent risk",
      "Clearer property information",
      "Search by location, price, and type",
    ],
  },
  {
    tag: "11+1 Savings",
    icon: PiggyBank,
    iconColor: "text-violet-400",
    iconBg: "from-violet-500/20 to-purple-600/10",
    headline: "Save for 11 Months. Let MyHome Support the 12th.",
    description:
      "The 11+1 Savings system helps you save toward your rent monthly. Save for 11 months and MyHome supports your final month — helping you reach your rent goal without the last-minute pressure. For example: if your yearly rent is ₦1,200,000, save ₦100,000 monthly for 11 months. MyHome supports the final ₦100,000.",
    cta: { label: "Learn About 11+1 Savings", href: "/savings" },
    screen: "/app-screens/savings.png",
    alt: "MyHome App 11+1 Savings Dashboard",
    imageRight: false,
    bullets: [
      "Set your rent target in naira",
      "Save monthly at your own pace",
      "Track your progress to 100%",
      "MyHome supports month 12",
    ],
  },
  {
    tag: "Rent Payments",
    icon: CreditCard,
    iconColor: "text-blue-400",
    iconBg: "from-blue-500/20 to-indigo-600/10",
    headline: "Pay Rent Securely and Track Every Naira",
    description:
      "Pay your rent directly through the app and receive instant digital receipts. Your full payment history is always available, so there are never any disputes. No more paper receipts. No more arguments over what was paid and when.",
    cta: { label: "For Tenants", href: "/tenants" },
    screen: "/app-screens/payment.png",
    alt: "MyHome App Rent Payment Screen",
    imageRight: true,
    bullets: [
      "Secure in-app rent payments",
      "Instant digital receipts",
      "Full payment history",
      "No hidden charges",
    ],
  },
  {
    tag: "Shortlets",
    icon: Building2,
    iconColor: "text-amber-400",
    iconBg: "from-amber-500/20 to-orange-600/10",
    headline: "Reviewed Shortlets for Safer Stays",
    description:
      "Whether you need a short stay or you host a shortlet property, MyHome provides a more organised way to discover, book, and manage short-term rentals. Properties are reviewed for better transparency — so what you see online is closer to what you get.",
    cta: { label: "Explore Shortlets", href: "/shortlets" },
    screen: "/app-screens/shortlet.png",
    alt: "MyHome App Shortlet Booking Screen",
    imageRight: false,
    bullets: [
      "Discover reviewed shortlets",
      "View availability and amenities",
      "Book with more confidence",
      "Manage bookings as a host",
    ],
  },
];

export default function AppShowcaseSection() {
  return (
    <section id="features" className="relative bg-white overflow-hidden">
      {/* Stats strip */}
      <div className="border-b border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "People on the waitlist" },
              { value: "4", label: "Core features at launch" },
              { value: "Trusted", label: "Review process for listings" },
              { value: "₦0", label: "Hidden fees, ever" },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  className="text-3xl sm:text-4xl font-black text-dark-green mb-1"
                  style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature rows */}
      {features.map((feat, i) => (
        <div
          key={i}
          className={`relative pt-20 lg:pt-28 pb-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}
        >
          {/* Subtle dot pattern on alternating rows */}
          {i % 2 !== 0 && <div className="absolute inset-0 dot-pattern opacity-20" />}

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div
              className={`grid lg:grid-cols-2 gap-8 lg:gap-20 items-end ${
                feat.imageRight ? "" : "lg:[&>*:first-child]:order-2"
              }`}
            >
              {/* Text block */}
              <ScrollReveal direction={feat.imageRight ? "left" : "right"}>
                <div className="pb-6 lg:pb-28">
                  {/* Tag */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feat.iconBg} flex items-center justify-center flex-shrink-0`}
                    >
                      <feat.icon size={20} className={feat.iconColor} />
                    </div>
                    <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                      {feat.tag}
                    </span>
                  </div>

                  <h2
                    className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-gray-900 leading-tight mb-5"
                    style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                  >
                    {feat.headline}
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-6">
                    {feat.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-8">
                    {feat.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-3 text-gray-600 text-[15px]">
                        <div className="w-5 h-5 rounded-full bg-light-green flex items-center justify-center flex-shrink-0">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2 2 4-4" stroke="#044222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={feat.cta.href}
                    className="inline-flex items-center gap-2 text-dark-green font-semibold text-base group"
                  >
                    {feat.cta.label}
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Link>
                </div>
              </ScrollReveal>

              {/* Phone mockup */}
              <ScrollReveal direction={feat.imageRight ? "right" : "left"} delay={0.1}>
                <div className={`flex ${feat.imageRight ? "justify-end" : "justify-start"} lg:justify-center`}>
                  <div className="relative">
                    {/* Decorative glow */}
                    <div className="absolute inset-0 -z-10 blur-[60px] bg-primary-green/15 rounded-t-full scale-90" />
                    <Image
                      src={feat.screen}
                      alt={feat.alt}
                      width={500}
                      height={1000}
                      className="w-[300px] sm:w-[360px] lg:w-[450px] h-auto drop-shadow-xl rounded-t-[2.5rem] rounded-b-none"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
