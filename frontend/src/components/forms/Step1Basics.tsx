"use client";
import { useForm } from "react-hook-form";

export default function Step1Basics({ onNext, initialData }: any) {
  const { register, handleSubmit, formState: { errors } } = useForm({ 
    defaultValues: initialData 
  });

  return (
    <form 
      onSubmit={handleSubmit(onNext)} 
      className="space-y-8 animate-in fade-in zoom-in-95 duration-1000 ease-out"
    >
      <header className="relative group text-center sm:text-left">
        <div className="absolute -left-4 top-0 w-1 h-full bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block"></div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-800">
          Event <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Basics</span>
        </h2>
        <p className="text-slate-500 font-medium mt-3 text-sm sm:text-base leading-relaxed">
          Let’s start with the foundation. What’s the big plan?
        </p>
      </header>
      
      <section className="space-y-2 group">
        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1 group-focus-within:text-blue-600 transition-colors">
          Event Name
        </label>
        <div className="relative">
          <input 
            {...register("eventName", { required: "A name is needed" })} 
            className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 outline-none text-slate-700 font-semibold shadow-sm
              ${errors.eventName 
                ? 'border-red-300 bg-red-50 focus:border-red-500' 
                : 'border-slate-100 bg-slate-50 focus:border-blue-500 focus:bg-white focus:shadow-2xl focus:shadow-blue-100'
              }`}
            placeholder="e.g., The Midnight Gala" 
          />
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none opacity-20">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Event Type</label>
          <div className="relative group">
            <select 
              {...register("eventType", { required: true })} 
              className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:border-blue-500 focus:bg-white transition-all appearance-none outline-none font-bold text-slate-600 cursor-pointer"
            >
              <option value="">Select Type</option>
              <option value="Wedding">💍 Wedding</option>
              <option value="Corporate">🏢 Corporate</option>
              <option value="Concert">🎸 Concert</option>
              <option value="Birthday">🎂 Birthday</option>
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-blue-500 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Looking For</label>
          <div className="relative group">
            <select 
              {...register("category", { required: true })} 
              className="w-full px-5 py-4 rounded-2xl border-2 border-blue-50 bg-blue-50 text-blue-700 font-black focus:border-blue-600 focus:bg-white transition-all appearance-none outline-none cursor-pointer"
            >
              <option value="">Category</option>
              <option value="planner">Event Planner</option>
              <option value="performer">Live Performer</option>
              <option value="crew">Event Crew</option>
            </select>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/60 space-y-4 hover:shadow-inner transition-all duration-500">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] text-center">Schedule Details</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-blue-500 ml-1">Starts</span>
            <input 
              type="date"
              {...register("dateRange.startDate")} 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 outline-none font-medium text-slate-600 transition-all shadow-sm" 
            />
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-purple-500 ml-1">Ends</span>
            <input 
              type="date"
              {...register("dateRange.endDate")} 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-purple-500/10 outline-none font-medium text-slate-600 transition-all shadow-sm" 
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">City</label>
          <input 
            {...register("location", { required: true })} 
            className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:border-blue-500 focus:bg-white outline-none font-semibold text-slate-700 transition-all shadow-sm" 
            placeholder="Mumbai, NY, London..." 
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Specific Venue</label>
          <input 
            {...register("venue")} 
            className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 bg-slate-50 focus:border-blue-500 focus:bg-white outline-none font-semibold text-slate-700 transition-all shadow-sm" 
            placeholder="Hotel, Plaza, Park..." 
          />
        </div>
      </div>

      <div className="pt-4">
        <button 
          type="submit" 
          className="w-full group relative flex items-center justify-center py-5 px-8 bg-slate-900 text-white rounded-2xl font-black text-lg overflow-hidden transition-all duration-300 hover:bg-blue-600 hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] active:scale-[0.98]"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span className="relative z-10 mr-2 group-hover:tracking-widest transition-all duration-300">Next Step</span>
          <svg className="w-6 h-6 relative z-10 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}</style>
    </form>
  );
}