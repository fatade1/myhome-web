"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const userTypes = ["Tenant", "Landlord", "Agent", "Investor"];

export default function WaitlistSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    userType: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-dark" />
      <div className="absolute inset-0 noise" />

      {/* Glowing orbs */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary-green/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-primary-green/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="tag-pill mx-auto w-fit mb-6">
                <span className="w-2 h-2 bg-primary-green rounded-full animate-pulse" />
                Early Access
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              >
                Join the MyHome Waitlist
              </h2>
              <p className="text-white/50 text-lg">
                Be one of the first people to use MyHome when we launch.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="card-dark p-8 sm:p-10 rounded-3xl"
                >
                  <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="input-premium"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-white/60 text-sm mb-1.5 block">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="input-premium"
                      />
                    </div>

                    {/* Phone + City */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/60 text-sm mb-1.5 block">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+234 ..."
                          required
                          className="input-premium"
                        />
                      </div>
                      <div>
                        <label className="text-white/60 text-sm mb-1.5 block">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="e.g. Lagos"
                          required
                          className="input-premium"
                        />
                      </div>
                    </div>

                    {/* User Type */}
                    <div>
                      <label className="text-white/60 text-sm mb-2 block">I am a...</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {userTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, userType: type })}
                            className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                              formData.userType === type
                                ? "bg-primary-green text-white shadow-lg shadow-primary-green/20"
                                : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/8 hover:text-white/70"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading || !formData.userType}
                      className="btn-primary w-full mt-4 !py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Joining...
                        </>
                      ) : (
                        <>
                          Join Waitlist
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-white/30 text-xs text-center mt-4">
                    We respect your privacy. No spam, ever.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="card-dark p-12 rounded-3xl text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 rounded-full bg-primary-green/20 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle size={40} className="text-primary-green" />
                  </motion.div>
                  <h3
                    className="text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    You&apos;re on the list! 🎉
                  </h3>
                  <p className="text-white/50 text-lg mb-2">
                    Thank you for joining the MyHome waitlist.
                  </p>
                  <p className="text-white/40 text-sm">
                    We&apos;ll notify you as soon as we launch. Stay tuned!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
