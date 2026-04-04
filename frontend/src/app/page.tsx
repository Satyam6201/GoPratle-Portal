"use client";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import api from "@/lib/axios"; 
import Step1Basics from "@/components/forms/Step1Basics";
import Step2CategoryFields from "@/components/forms/Step2CategoryFields";
import Step3Review from "@/components/forms/Step3Review";

// Advanced Animation Variants
const containerVariants = {
  initial: { opacity: 0, scale: 0.95, y: 30 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } 
  }
};

const stepVariants = {
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
    } catch (error) {
      console.error("Submission Error", error);
      alert("Submission fail ho gaya. Check karein backend live hai ya nahi!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_50%_50%,_rgba(240,244,255,1)_0%,_rgba(220,230,250,1)_100%)] flex items-center justify-center p-6 selection:bg-blue-100">
      <div className="max-w-2xl w-full">
        <LayoutGroup>
          <motion.div 
            variants={containerVariants}
            initial="initial"
            animate="animate"
            layout
            className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden border border-white/50 relative"
          >
            {/* Glow Decorative Elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-400/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-400/10 blur-3xl rounded-full" />

            {/* Header Section */}
            <div className="px-10 pt-10 relative z-10">
              <div className="flex justify-between items-center mb-6">
                <motion.div layout>
                  <motion.h1 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="text-sm font-black text-blue-600 uppercase tracking-[0.3em]"
                  >
                    GoPratle Portal
                  </motion.h1>
                  <p className="text-slate-400 text-xs font-semibold mt-1">Global Event Deployment</p>
                </motion.div>
                <div className="relative flex items-center justify-center">
                   <svg className="w-16 h-16 transform -rotate-90">
                      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-slate-100" />
                      <motion.circle 
                        cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="3" fill="transparent" 
                        strokeDasharray="176"
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
                  <motion.div 
                    key={i}
                    layoutId={`step-bar-${i}`}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      step >= i ? "flex-[3] bg-gradient-to-r from-blue-600 to-indigo-500" : "flex-1 bg-slate-100"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content Area */}
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
                    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="py-16 text-center">
                      <div className="relative inline-block mb-8">
                        <motion.div 
                          initial={{ scale: 0 }} animate={{ scale: 1.2 }}
                          className="absolute inset-0 bg-green-200 blur-2xl rounded-full opacity-50"
                        />
                        <div className="relative w-24 h-24 bg-gradient-to-tr from-green-500 to-emerald-400 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-200">
                          <motion.svg 
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                          </motion.svg>
                        </div>
                      </div>
                      <h2 className="text-4xl font-black text-slate-800 mb-3 tracking-tight">Mission Success!</h2>
                      <p className="text-slate-500 font-medium mb-10">Your requirement is now securely stored in MongoDB.</p>
                      <motion.button 
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.reload()}
                        className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl shadow-slate-300 transition-all"
                      >
                        Launch Another Req
                      </motion.button>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </LayoutGroup>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="text-center mt-10 space-y-2"
        >
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-1">Architecture</p>
          <div className="flex justify-center gap-4 grayscale opacity-60">
             <span className="text-xs font-bold text-slate-500">NEXT.JS 14</span>
             <span className="text-xs font-bold text-slate-500">EXPRESS.JS</span>
             <span className="text-xs font-bold text-slate-500">MONGODB</span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}