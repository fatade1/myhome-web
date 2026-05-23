"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  return (
    <section className="gradient-hero relative pt-32 lg:pt-36 flex flex-col justify-end overflow-hidden noise">
      {/* Background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-green/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-green/8 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-green/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex-1 flex flex-col">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 flex-1">

          {/* Left Column: Text & Buttons */}
          <div className="text-left pb-4 lg:pb-20 flex flex-col justify-center self-center">
            <ScrollReveal direction="left">
              <div className="tag-pill mb-6 w-fit">
                <span className="w-2 h-2 bg-primary-green rounded-full animate-pulse" />
                Coming Soon on iOS &amp; Android
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <h1
                className="text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                Helping Nigerians{" "}
                <span className="text-primary-green">Save for Rent</span>,{" "}
                Find Trusted Homes &amp; Manage Properties
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-lg sm:text-xl text-white/60 max-w-lg leading-relaxed mb-10">
                11+1 Rent Savings, Trusted Properties, Verified Shortlets, and
                Home Management — all from one Nigerian-built platform.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/#waitlist" className="btn-primary text-base justify-center">
                  Join the Waitlist
                  <ArrowRight size={18} />
                </Link>
                <Link href="/#features" className="btn-secondary text-base justify-center">
                  See Features
                </Link>
              </div>
            </ScrollReveal>

            {/* Waitlist count */}
            <ScrollReveal direction="left" delay={0.4}>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`/avatars/avatar-${i}.png`}
                      alt={`Waitlist user ${i}`}
                      className="w-8 h-8 rounded-full border-2 border-dark-green object-cover"
                    />
                  ))}
                </div>
                <span className="text-white/50 text-sm">
                  <span className="text-white font-semibold">500+</span> already on the waitlist
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end self-end pt-2 lg:pt-16 w-full -mb-px z-10">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full flex justify-center lg:justify-end"
            >
              <div className="relative w-[340px] sm:w-[420px] lg:w-[500px] xl:w-[620px]">
                {/* Glow behind phone */}
                <div className="absolute inset-0 -z-10 blur-[80px] bg-primary-green/20 rounded-t-[3rem] scale-90" />

                <Image
                  src="/app-screens/hero.png"
                  alt="MyHome App — Nigerian property savings and home management"
                  width={800}
                  height={1600}
                  className="w-full h-auto drop-shadow-2xl rounded-t-[2.5rem] rounded-b-none"
                  priority
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
