"use client";
import { motion } from "framer-motion";

export default function Step3Review({ formData, onBack, onSubmit, goToStep }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center sm:text-left border-b border-slate-100 pb-6"
      >
        <div className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
          Step 03 — Final Review
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
          Ready to <span className="text-green-600 underline decoration-green-200 underline-offset-4">Publish?</span>
        </h2>
        <p className="text-slate-500 font-medium mt-3 text-sm sm:text-base">
          Verify everything below. You can edit anytime.
        </p>
      </motion.header>

      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all"
        >
          <button 
            onClick={() => goToStep(1)}
            className="absolute top-6 right-6 text-xs font-black text-blue-600 bg-white px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            Edit
          </button>

          <h3 className="font-black text-2xl text-slate-800 pr-12">
            {formData.eventName}
          </h3>

          <div className="flex gap-3 mt-4 flex-wrap">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-bold">
              {formData.eventType}
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold">
              {formData.category}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-5 rounded-3xl bg-slate-50 border border-slate-100"
          >
            <p className="font-bold text-slate-800">{formData.location}</p>
            <p className="text-sm text-slate-500">{formData.venue || "No venue"}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-5 rounded-3xl bg-slate-50 border border-slate-100"
          >
            <p className="font-bold text-slate-800">
              {formData.dateRange?.startDate} — {formData.dateRange?.endDate}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-3xl bg-green-50 border border-green-200"
        >
          {Object.entries(formData.details || {}).map(([key, value]) => (
            <div key={key} className="flex justify-between py-2 text-sm">
              <span className="text-slate-500">{key}</span>
              <span className="font-bold text-slate-800">{String(value)}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 pt-4"
      >
        <button 
          onClick={onBack}
          className="w-full sm:w-1/3 py-4 bg-slate-100 text-slate-500 rounded-2xl font-bold hover:bg-slate-200 transition"
        >
          Go Back
        </button>

        <button 
          onClick={onSubmit}
          className="w-full sm:w-2/3 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl font-bold hover:scale-105 active:scale-95 transition shadow-lg"
        >
          Confirm & Post
        </button>
      </motion.div>
    </motion.div>
  );
}