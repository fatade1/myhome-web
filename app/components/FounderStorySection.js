"use client";
import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function FounderStorySection() {
  return (
    <section className="relative gradient-dark py-24 lg:py-32 overflow-hidden noise">
      {/* Glowing orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary-green/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-green/5 rounded-full blur-[180px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="tag-pill mx-auto w-fit mb-6">Our Story</div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
            >
              Born from a Real{" "}
              <span className="text-primary-green">Housing Experience</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Story text */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <div className="space-y-6 text-white/65 text-[17px] leading-relaxed">
              <p>
                MyHome Africa was inspired by a simple discipline practised within the founder&apos;s
                family. They consistently saved for rent every month, and by the tenth month of each
                year, their rent was already fully prepared. This created financial stability and
                removed the usual pressure that comes with rent payments in Nigeria.
              </p>
              <p>
                Over time, this consistency even influenced their landlord — who, after seeing many
                cases of tenant defaults, chose not to increase their rent for six years.
              </p>
              <p>
                But the journey to finding a home revealed deeper problems. From repeated inspection
                fees and unavailable properties to multiple agents handling the same listing,
                unreasonable commissions, fake agents, unclear titles, and inflated property prices
                — it became clear that the housing system had a trust problem.
              </p>
              <p>
                MyHome Africa was created to change that reality by bringing transparency, structure,
                and confidence to how Nigerians save, rent, buy, and manage homes.
              </p>
            </div>
          </ScrollReveal>

          {/* Quote card */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-2">
            <div className="card-dark p-8 rounded-3xl border border-primary-green/20 relative">
              {/* Large quote icon */}
              <div className="w-12 h-12 rounded-2xl bg-primary-green/15 flex items-center justify-center mb-6">
                <Quote size={22} className="text-primary-green" />
              </div>

              <blockquote
                className="text-white text-xl font-semibold leading-snug mb-8"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                &ldquo;We are not just building another property platform. We are building the
                housing experience we wish existed.&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-green/20 flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-primary-green font-bold text-lg"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    TO
                  </span>
                </div>
                <div>
                  <p
                    className="text-white font-semibold text-[15px]"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Tayo Oladele
                  </p>
                  <p className="text-white/40 text-sm">Founder, MyHome Africa</p>
                </div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary-green/30 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
