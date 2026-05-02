"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function ComingSoonSection() {
  return (
    <section className="relative gradient-dark pt-24 lg:pt-32 overflow-hidden noise">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-green/8 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 h-full">
          {/* Text */}
          <div className="text-center lg:text-left pb-2 lg:pb-32 flex flex-col justify-center">
            <ScrollReveal>
              <div className="tag-pill w-fit mx-auto lg:mx-0 mb-6">
                <span className="w-2 h-2 bg-primary-green rounded-full animate-pulse" />
                Coming Soon
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                Coming Soon on
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                {/* App Store */}
                <div className="flex items-center gap-3 px-6 py-4 card-dark rounded-2xl cursor-pointer hover:border-primary-green/40 transition-all">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="white"/>
                  </svg>
                  <div>
                    <div className="text-white/50 text-xs">Download on the</div>
                    <div className="text-white font-semibold text-lg leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>App Store</div>
                  </div>
                </div>

                {/* Google Play */}
                <div className="flex items-center gap-3 px-6 py-4 card-dark rounded-2xl cursor-pointer hover:border-primary-green/40 transition-all">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" fill="white"/>
                  </svg>
                  <div>
                    <div className="text-white/50 text-xs">Get it on</div>
                    <div className="text-white font-semibold text-lg leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>Google Play</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-white/40 text-sm">
                Be the first to know when we launch. Join the waitlist today.
              </p>
            </ScrollReveal>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end items-end h-full pt-0">
            <ScrollReveal delay={0.2} direction="right">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative -mb-px z-10"
              >
                <div className="relative w-[340px] sm:w-[420px] lg:w-[500px]">
                  <Image
                    src="/coming-soon-mockup.png"
                    alt="MyHome App - Coming Soon"
                    width={800}
                    height={800}
                    className="w-full h-auto drop-shadow-2xl rounded-t-[2.5rem] rounded-b-none"
                  />
                  <div className="absolute inset-0 -z-10 blur-[60px] bg-primary-green/20 rounded-t-full scale-75" />
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
