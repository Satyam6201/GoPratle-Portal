"use client";
import { useState } from "react";
import axios from "axios";
import Step1Basics from "@/components/forms/Step1Basics";
import Step2CategoryFields from "@/components/forms/Step2CategoryFields";
import Step3Review from "@/components/forms/Step3Review";

export default function Home() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "",
    location: "",
    venue: "",
    category: "",
    dateRange: {
      startDate: "",
      endDate: "",
    },
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
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/requirements`, formData);
      setStep(4);
    } catch (error) {
      console.error("Submission Error", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-gray-100 to-blue-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] overflow-hidden border border-white">
          
          <div className="px-8 pt-8">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h1 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em]">GoPratle Portal</h1>
                <p className="text-gray-400 text-xs font-medium">Post your event requirement</p>
              </div>
              <span className="text-2xl font-black text-slate-200">0{step}</span>
            </div>
            
            <div className="flex gap-2 mb-8">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                    step >= i ? "flex-[2] bg-blue-600" : "flex-1 bg-gray-100"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="px-8 pb-10">
            {step === 1 && (
              <Step1Basics onNext={nextStep} initialData={formData} />
            )}
            
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
              <div className="py-12 text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-black text-slate-800 mb-2">Requirement Live!</h2>
                <p className="text-slate-500 mb-8">Your posting has been successfully saved to our database.</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all active:scale-95"
                >
                  Create New Post
                </button>
              </div>
            )}
          </div>
        </div>
        
        <p className="text-center mt-8 text-slate-400 text-xs font-medium uppercase tracking-widest">
          Secure Full-Stack Application &bull; MongoDB Cloud
        </p>
      </div>
    </main>
  );
}