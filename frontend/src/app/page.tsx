"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup, Variants } from "framer-motion";
import api from "@/lib/axios"; 
import Step1Basics from "@/components/forms/Step1Basics";
import Step2CategoryFields from "@/components/forms/Step2CategoryFields";
import Step3Review from "@/components/forms/Step3Review";

const containerVariants: Variants = {
  initial: { opacity: 0, scale: 0.9, y: 60 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.25
    }
  }
};

const stepVariants: Variants = {
  initial: { opacity: 0, x: 80, scale: 0.95, filter: "blur(12px)" },
  animate: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, x: -80, scale: 0.95, filter: "blur(12px)" }
};

export default function Home() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "",
    location: "",
    venue: "",
    category: "",
    dateRange: { startDate: "", endDate: "" },
    details: {},
  });

  const nextStep = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => s - 1);
  const goToStep = (stepNumber: number) => setStep(stepNumber);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await api.post('/requirements', formData);
      setStep(4);
    } catch (error: any) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100">
      <div className="w-full max-w-3xl">
        <LayoutGroup>
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="relative bg-white/60 backdrop-blur-3xl border border-white/40 rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-purple-300/20 pointer-events-none" />

            <div className="relative z-10 px-6 md:px-10 pt-8 md:pt-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <div>
                  <h1 className="text-xs md:text-sm font-black text-indigo-600 uppercase tracking-[0.35em]">
                    GoPratle Portal
                  </h1>
                  <p className="text-slate-500 text-xs md:text-sm mt-1 font-medium">
                    Global Event Deployment
                  </p>
                </div>

                <div className="relative flex items-center justify-center">
                  <svg className="w-14 h-14 md:w-16 md:h-16 -rotate-90">
                    <circle cx="32" cy="32" r="28" strokeWidth="3" fill="transparent" className="text-slate-200" />
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="28"
                      strokeWidth="3"
                      fill="transparent"
                      strokeDasharray="176"
                      initial={{ strokeDashoffset: 176 }}
                      animate={{ strokeDashoffset: 176 - (176 * step) / 3 }}
                      className="text-indigo-600"
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                    />
                  </svg>
                  <span className="absolute text-xs md:text-sm font-bold text-slate-700">
                    {Math.round((step / 3) * 100)}%
                  </span>
                </div>
              </div>

              <div className="flex gap-2 md:gap-3 mb-8 md:mb-10">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    layout
                    className={`h-2 rounded-full ${
                      step >= i
                        ? "flex-[3] bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md"
                        : "flex-1 bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="px-6 md:px-10 pb-10 md:pb-12 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                  {step === 1 && <Step1Basics onNext={nextStep} initialData={formData} />}

                  {step === 2 && (
                    <Step2CategoryFields
                      category={formData.category}
                      onNext={nextStep}
                      onBack={prevStep}
                    />
                  )}

                  {step === 3 && (
                    <Step3Review
                      formData={formData}
                      onBack={prevStep}
                      onSubmit={handleSubmit}
                      goToStep={goToStep}
                      loading={isSubmitting}
                    />
                  )}

                  {step === 4 && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="py-16 text-center"
                    >
                      <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-4">
                        Success 🎉
                      </h2>
                      <p className="text-slate-500 mb-8 text-sm md:text-base">
                        Your requirement has been submitted successfully
                      </p>
                      <button
                        onClick={() => window.location.reload()}
                        className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                      >
                        Launch Another Req
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </LayoutGroup>
      </div>
    </main>
  );
}