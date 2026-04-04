"use client";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function Step1Basics({ onNext, initialData }: any) {
  const { register, handleSubmit, formState: { errors } } = useForm({ 
    defaultValues: initialData 
  });

  return (
    <motion.form 
      onSubmit={handleSubmit(onNext)}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <motion.header 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative group text-center sm:text-left"
      >
        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block"></div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-800">
          Event <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Basics</span>
        </h2>
        <p className="text-slate-500 font-medium mt-3 text-sm sm:text-base leading-relaxed">
          Let’s start with the foundation. What’s the big plan?
        </p>
      </motion.header>
      
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-2 group"
      >
        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1 group-focus-within:text-blue-600 transition-colors">
          Event Name
        </label>
        <input 
          {...register("eventName", { required: "A name is needed" })} 
          className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 outline-none text-slate-700 font-semibold shadow-sm focus:scale-[1.02]
            ${errors.eventName 
              ? 'border-red-300 bg-red-50 focus:border-red-500' 
              : 'border-slate-100 bg-slate-50 focus:border-blue-500 focus:bg-white focus:shadow-xl'
            }`}
          placeholder="e.g., The Midnight Gala" 
        />
      </motion.section>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        <select 
          {...register("eventType", { required: true })} 
          className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:border-blue-500 focus:bg-white transition-all outline-none font-bold text-slate-600 hover:scale-[1.02]"
        >
          <option value="">Select Type</option>
          <option value="Wedding">Wedding</option>
          <option value="Corporate">Corporate</option>
          <option value="Concert">Concert</option>
          <option value="Birthday">Birthday</option>
        </select>

        <select 
          {...register("category", { required: true })} 
          className="w-full px-5 py-4 rounded-2xl border-2 border-blue-50 bg-blue-50 text-blue-700 font-black focus:border-blue-600 focus:bg-white transition-all outline-none hover:scale-[1.02]"
        >
          <option value="">Category</option>
          <option value="planner">Event Planner</option>
          <option value="performer">Performer</option>
          <option value="crew">Crew</option>
        </select>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-6 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/60 space-y-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input 
            type="date"
            {...register("dateRange.startDate")} 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 outline-none font-medium text-slate-600 transition-all hover:scale-[1.02]" 
          />
          <input 
            type="date"
            {...register("dateRange.endDate")} 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-purple-500/10 outline-none font-medium text-slate-600 transition-all hover:scale-[1.02]" 
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        <input 
          {...register("location", { required: true })} 
          className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:border-blue-500 focus:bg-white outline-none font-semibold text-slate-700 transition-all shadow-sm hover:scale-[1.02]" 
          placeholder="City" 
        />
        <input 
          {...register("venue")} 
          className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:border-blue-500 focus:bg-white outline-none font-semibold text-slate-700 transition-all shadow-sm hover:scale-[1.02]" 
          placeholder="Venue" 
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="pt-4"
      >
        <button 
          type="submit" 
          className="w-full flex items-center justify-center py-5 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-black text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
        >
          Next Step
        </button>
      </motion.div>
    </motion.form>
  );
}