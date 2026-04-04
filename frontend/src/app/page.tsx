"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup, Variants } from "framer-motion";
import api from "@/lib/axios"; 
import Step1Basics from "@/components/forms/Step1Basics";
import Step2CategoryFields from "@/components/forms/Step2CategoryFields";
import Step3Review from "@/components/forms/Step3Review";

const containerVariants: Variants = {
  initial: { opacity: 0, scale: 0.95, y: 30 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut", 
      staggerChildren: 0.2
    } 
  }
};

const stepVariants: Variants = {
  initial: { opacity: 0, x: 50, filter: "blur(10px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -50, filter: "blur(10px)" },
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
    console.log("Full Error:", error);
    console.log("Response:", error.response);
    console.log("Message:", error.message);

    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_50%,_rgba(240,244,255,1)_0%,_rgba(220,230,250,1)_100%)] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <LayoutGroup>
          <motion.div 
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden border border-white/50 relative"
          >
            <div className="px-10 pt-10 relative z-10">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h1 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em]">GoPratle Portal</h1>
                  <p className="text-slate-400 text-xs font-semibold mt-1">Global Event Deployment</p>
                </div>
                <div className="relative flex items-center justify-center">
                   <svg className="w-16 h-16 transform -rotate-90">
                      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-slate-100" />
                      <motion.circle 
                        cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="3" fill="transparent" 
                        strokeDasharray="176"
                        initial={{ strokeDashoffset: 176 }}
                        animate={{ strokeDashoffset: 176 - (176 * step) / 3 }}
                        className="text-blue-600"
                        transition={{ duration: 1, ease: "easeInOut" }}
                      />
                   </svg>
                   <span className="absolute text-sm font-bold text-slate-700">{Math.round((step/3)*100)}%</span>
                </div>
              </div>
              
              <div className="flex gap-3 mb-10">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      step >= i ? "flex-[3] bg-blue-600" : "flex-1 bg-slate-100"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="px-10 pb-12 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {step === 1 && <Step1Basics onNext={nextStep} initialData={formData} />}
                  {step === 2 && <Step2CategoryFields category={formData.category} onNext={nextStep} onBack={prevStep} />}
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
                    <div className="py-16 text-center">
                      <h2 className="text-4xl font-black text-slate-800 mb-3">Success!</h2>
                      <button onClick={() => window.location.reload()} className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold">
                        Launch Another Req
                      </button>
                    </div>
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