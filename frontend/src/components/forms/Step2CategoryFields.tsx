"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function Step2CategoryFields({ category, onNext, onBack }: any) {
  const { register, handleSubmit } = useForm();

  const handleNext = (data: any) => {
    onNext({ details: data });
  };

  return (
    <motion.form
      onSubmit={handleSubmit(handleNext)}
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center sm:text-left"
      >
        <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-3">
          Step 02 — Category Specifics
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight capitalize">
          {category} <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-4">Details</span>
        </h2>
        <p className="text-slate-500 font-medium mt-3 text-sm sm:text-base leading-relaxed">
          Almost there! We need a few more technical bits for the {category} team.
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-700"></div>
        
        <div className="relative bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
          {category === "planner" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                Estimated Budget Range
              </label>
              <input 
                {...register("budget", { required: true })} 
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none font-bold text-slate-700 hover:scale-[1.02]" 
                placeholder="₹5,00,000 - ₹10,00,000" 
              />
            </motion.div>
          )}

          {category === "performer" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                Genre or Style
              </label>
              <input 
                {...register("genre", { required: true })} 
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 transition-all outline-none font-bold text-slate-700 hover:scale-[1.02]" 
                placeholder="Sufi Rock, Stand-up Comedy" 
              />
            </motion.div>
          )}

          {category === "crew" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                Required Personnel Count
              </label>
              <input 
                type="number" 
                {...register("count", { required: true })} 
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-black text-xl text-blue-600 hover:scale-[1.02]" 
                placeholder="0"
              />
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 pt-4"
      >
        <button 
          type="button" 
          onClick={onBack} 
          className="w-full sm:w-1/3 flex items-center justify-center px-6 py-5 font-black text-slate-400 bg-slate-50 rounded-2xl hover:bg-slate-100 hover:text-slate-600 active:scale-95 transition-all"
        >
          Go Back
        </button>

        <button 
          type="submit" 
          className="w-full sm:w-2/3 flex items-center justify-center px-8 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-black text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
        >
          Review Summary
        </button>
      </motion.div>
    </motion.form>
  );
}