"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, CheckCircle, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqData = [
  {
    category: "General",
    items: [
      {
        question: "What is MyHome?",
        answer:
          "MyHome is an all-in-one mobile platform that helps you find, rent, save, manage, and own property with ease. It brings everything about your home journey into one simple and secure app.",
      },
      {
        question: "When will MyHome be available?",
        answer:
          "MyHome is launching soon. We are currently onboarding early users through our waitlist. Join now to get early access once the app goes live.",
      },
      {
        question: "Will MyHome be available on iOS and Android?",
        answer:
          "Yes, MyHome will be available on both iOS and Android devices at launch.",
      },
    ],
  },
  {
    category: "Features",
    items: [
      {
        question: "What can I do on MyHome?",
        answer:
          "With MyHome, you can:\n\n\u2022 Search for rental and sale properties\n\u2022 Save for rent using the 11+1 savings system\n\u2022 Book short-term rentals\n\u2022 List and manage properties\n\u2022 Track payments and transactions",
      },
      {
        question: "What is the 11+1 Savings feature?",
        answer:
          "The 11+1 Savings system allows you to save for your rent over 11 months, and MyHome completes the final month for you, helping you hit your rent target without the stress.",
      },
      {
        question: "Can I list my property on MyHome?",
        answer:
          "Yes. Landlords and property owners can list, manage, and track their properties directly on MyHome.",
      },
      {
        question: "Does MyHome support short-term rentals?",
        answer:
          "Yes. MyHome allows users to book short-term stays and also helps hosts manage their shortlet properties.",
      },
    ],
  },
  {
    category: "Payments & Security",
    items: [
      {
        question: "Is MyHome secure?",
        answer:
          "Yes. MyHome is designed with strong security systems to ensure safe transactions, verified listings, and a trusted experience for all users.",
      },
      {
        question: "How are payments handled?",
        answer:
          "All payments are processed through secure channels within the platform, with tracking systems to ensure transparency and accountability.",
      },
    ],
  },
  {
    category: "Pricing",
    items: [
      {
        question: "Is MyHome free to use?",
        answer:
          "Basic browsing is free. Some features, such as contacting landlords or accessing advanced tools, may require a premium subscription. See the plans below for a breakdown.",
      },
    ],
  },
  {
    category: "Waitlist",
    items: [
      {
        question: "How do I join the waitlist?",
        answer:
          "Simply enter your details in the waitlist form on this website. You'll be among the first to access MyHome when we launch.",
      },
      {
        question: "What happens after I join the waitlist?",
        answer:
          "You'll receive updates about our launch, early access opportunities, and important announcements about the platform.",
      },
    ],
  },
  {
    category: "Trust & Future",
    items: [
      {
        question: "How do you verify listings?",
        answer:
          "MyHome is building a system that prioritizes verified listings and trusted users to reduce fraud and improve reliability across the platform.",
      },
      {
        question: "Are more features coming?",
        answer:
          "Yes. MyHome will continue to expand with features like property financing, home services, legal verification, and more.",
      },
    ],
  },
];

const freeFeatures = [
  "Browse property listings",
  "View property details",
  "Search and filter properties",
  "Save favorite properties",
  "View neighborhood info",
  "Access basic support",
];

const premiumFeatures = [
  "Unlimited property listings",
  "Full tenant management",
  "Real-time rent tracking",
  "Virtual accounts per property",
  "Digital tenancy agreements",
  "AI-powered insights & analytics",
  "Priority support",
  "Maintenance request tracking",
];

function PricingCards() {
  return (
    <div className="mt-8 -mx-6 sm:-mx-8 px-6 sm:px-8 pt-8 pb-2 border-t border-gray-100">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 text-center">
        Choose a plan
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Basic Plan */}
        <div className="relative rounded-3xl border border-gray-200 bg-white p-8 flex flex-col shadow-sm">
          <div className="mb-6">
            <span className="inline-block text-xs font-bold text-gray-400 uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full mb-4">
              Basic
            </span>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-black text-gray-900" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                &#8358;0
              </span>
              <span className="text-gray-400 text-sm mb-1.5">/forever</span>
            </div>
            <p className="text-sm text-gray-400">Free, no card required</p>
          </div>

          <div className="h-px bg-gray-100 mb-6" />

          <div className="space-y-4 flex-1">
            {freeFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-3.5">
                <div className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-gray-300" />
                </div>
                <span className="text-[15px] text-gray-600 leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Plan */}
        <div className="relative rounded-3xl overflow-hidden flex flex-col shadow-lg">
          {/* Dark header */}
          <div className="bg-gradient-to-br from-dark-green via-[#065a30] to-black px-8 pt-8 pb-10 relative overflow-hidden">
            {/* Glow blob */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-green/20 rounded-full blur-2xl" />
            <span className="relative inline-flex items-center gap-1.5 text-xs font-bold text-primary-green uppercase tracking-widest bg-primary-green/15 border border-primary-green/30 px-3 py-1 rounded-full mb-4">
              <Sparkles size={11} />
              Premium Plan
            </span>
            <div className="relative flex items-end gap-1 mb-1">
              <span className="text-white/50 text-xl font-bold mb-0.5">&#8358;</span>
              <span className="text-5xl font-black text-white leading-none" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                5,000
              </span>
              <span className="text-white/40 text-sm mb-1">/mo</span>
            </div>
            <p className="relative text-white/40 text-xs mt-1">+ 5% charge on rental transactions</p>
          </div>

          {/* Features */}
          <div className="bg-white px-8 py-6 flex-1 border border-t-0 border-primary-green/20 rounded-b-3xl">
            <div className="space-y-4">
              {premiumFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-light-green flex items-center justify-center flex-shrink-0 flex-shrink-0">
                    <CheckCircle size={12} className="text-dark-green" />
                  </div>
                  <span className="text-[15px] text-gray-700 leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, isOpen, onClick }) {
  var spanClass = "text-lg font-semibold transition-colors duration-200 ";
  spanClass += isOpen
    ? "text-primary-green"
    : "text-gray-900 group-hover:text-primary-green";

  var iconClass =
    "flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ";
  iconClass += isOpen
    ? "bg-primary-green/10 text-primary-green"
    : "bg-gray-50 text-gray-400 group-hover:bg-primary-green/10 group-hover:text-primary-green";

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span
          className={spanClass}
          style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
        >
          {question}
        </span>
        <div className={iconClass}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12">
              <p className="text-gray-500 leading-relaxed whitespace-pre-line">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openCategory, setOpenCategory] = useState("General");
  const [openItemIndex, setOpenItemIndex] = useState(0);

  const handleItemClick = (index) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  const activeCategoryData =
    faqData.find((c) => c.category === openCategory) || faqData[0];

  function getCategoryClass(cat) {
    if (openCategory === cat) {
      return "flex-shrink-0 text-left px-5 py-4 rounded-xl transition-all duration-200 bg-primary-green/10 text-dark-green font-semibold shadow-sm";
    }
    return "flex-shrink-0 text-left px-5 py-4 rounded-xl transition-all duration-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900";
  }

  return (
    <section
      id="faq"
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <div
              className="tag-pill mx-auto w-fit mb-6"
              style={{ color: "#044222", background: "rgba(4, 66, 34, 0.08)" }}
            >
              Got Questions?
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              style={{
                fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              }}
            >
              Frequently Asked{" "}
              <span className="text-primary-green">Questions</span>
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
              Everything you need to know about MyHome and how it works.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Categories Sidebar */}
          <ScrollReveal className="lg:w-1/3 flex-shrink-0" delay={0.1}>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
              {faqData.map((category) => (
                <button
                  key={category.category}
                  onClick={() => {
                    setOpenCategory(category.category);
                    setOpenItemIndex(0);
                  }}
                  className={getCategoryClass(category.category)}
                  style={{
                    fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                  }}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* FAQ Items */}
          <ScrollReveal className="lg:w-2/3" delay={0.2}>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-8">
              {activeCategoryData.items.map((item, index) => (
                <FAQItem
                  key={openCategory + "-" + index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openItemIndex === index}
                  onClick={() => handleItemClick(index)}
                />
              ))}

              {/* Show pricing cards when Pricing category is active */}
              {openCategory === "Pricing" && <PricingCards />}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
