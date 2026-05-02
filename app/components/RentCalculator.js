"use client";
import React, { useState } from "react";
import { Wallet, TrendingUp, Gift } from "lucide-react";
import { motion } from "framer-motion";

export default function RentCalculator() {
  const [rent, setRent] = useState(5150000);

  const handleSliderChange = (e) => {
    setRent(Number(e.target.value));
  };

  const handleInputChange = (e) => {
    const val = e.target.value.replace(/\D/g, "");
    if (val === "") {
      setRent(0);
      return;
    }
    setRent(Number(val));
  };

  const handleInputBlur = () => {
    if (rent < 300000) setRent(300000);
    if (rent > 12000000) setRent(12000000);
  };

  const monthlySavings = Math.round(rent / 12);
  const totalContribution = rent - Math.round(rent / 12);
  const myHomePays = Math.round(rent / 12);

  const min = 300000;
  const max = 12000000;
  const percentage = Math.max(0, Math.min(100, ((rent - min) / (max - min)) * 100));

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[32px] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-10 lg:p-12">


      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
        What is your yearly rent?
      </h3>

      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
          <span className="text-gray-500 font-bold text-xl">₦</span>
        </div>
        <input
          type="text"
          value={rent || ""}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="w-full pl-14 pr-6 py-5 bg-white border-2 border-gray-100 rounded-2xl text-2xl font-bold text-gray-900 outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 transition-all font-display"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        />
      </div>

      <div className="mb-12">
        <input
          type="range"
          min={min}
          max={max}
          step="10000"
          value={rent}
          onChange={handleSliderChange}
          className="rent-slider w-full h-3 rounded-full appearance-none outline-none"
          style={{
            background: `linear-gradient(to right, #044222 ${percentage}%, #d2e4d6 ${percentage}%)`
          }}
        />
        <div className="flex justify-between mt-4 text-[15px] font-semibold text-gray-500">
          <span>₦300K</span>
          <span>₦12M</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {/* Monthly Savings Card */}
        <div className="bg-[#f8faf8] rounded-3xl p-6 lg:p-7 border border-gray-100/60 flex flex-col">
          <div className="w-14 h-14 bg-[#e5f1e7] text-[#044222] rounded-2xl flex items-center justify-center mb-6">
            <Wallet size={26} strokeWidth={2} />
          </div>
          <div className="mt-auto">
            <p className="text-[13px] font-bold text-[#5c7365] tracking-widest mb-2 uppercase">Monthly Savings</p>
            <p className="text-3xl lg:text-4xl font-black text-gray-900 mb-2 tracking-tight" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
              ₦{monthlySavings.toLocaleString()}
            </p>
            <p className="text-[15px] text-[#5c7365] font-medium">for 11 months</p>
          </div>
        </div>

        {/* You Save Card */}
        <div className="bg-[#f8faf8] rounded-3xl p-6 lg:p-7 border border-gray-100/60 flex flex-col">
          <div className="w-14 h-14 bg-[#e5f1e7] text-[#044222] rounded-2xl flex items-center justify-center mb-6">
            <TrendingUp size={26} strokeWidth={2} />
          </div>
          <div className="mt-auto">
            <p className="text-[13px] font-bold text-[#5c7365] tracking-widest mb-2 uppercase">You Save</p>
            <p className="text-3xl lg:text-4xl font-black text-gray-900 mb-2 tracking-tight" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
              ₦{totalContribution.toLocaleString()}
            </p>
            <p className="text-[15px] text-[#5c7365] font-medium">total contribution</p>
          </div>
        </div>

        {/* MyHome Pays Card */}
        <div className="bg-[#fffcf2] rounded-3xl p-6 lg:p-7 border border-[#fbebc3] flex flex-col relative overflow-hidden">
          <div className="absolute top-6 right-6 bg-[#fcc92e] text-gray-900 text-[11px] font-bold px-3 py-1.5 rounded-full tracking-bold shadow-sm uppercase">
            Bonus
          </div>
          <div className="w-14 h-14 bg-[#fdf2d6] text-[#eab308] rounded-2xl flex items-center justify-center mb-6">
            <Gift size={26} strokeWidth={2} />
          </div>
          <div className="mt-auto">
            <p className="text-[13px] font-bold text-[#8c7437] tracking-widest mb-2 uppercase">MyHome Pays</p>
            <p className="text-3xl lg:text-4xl font-black text-gray-900 mb-2 tracking-tight" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
              ₦{myHomePays.toLocaleString()}
            </p>
            <p className="text-[15px] text-[#8c7437] font-medium">your 12th month!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
