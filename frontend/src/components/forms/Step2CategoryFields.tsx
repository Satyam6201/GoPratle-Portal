"use client";
import { useForm } from "react-hook-form";

export default function Step2CategoryFields({ category, onNext, onBack }: any) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleNext = (data: any) => {
    onNext({ details: data });
  };

  return (
    <form 
      onSubmit={handleSubmit(handleNext)} 
      className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000 ease-out"
    >
      <header className="relative text-center sm:text-left">
        <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-3">
          Step 02 — Category Specifics
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight capitalize">
          {category} <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-4">Details</span>
        </h2>
        <p className="text-slate-500 font-medium mt-3 text-sm sm:text-base leading-relaxed">
          Almost there! We need a few more technical bits for the {category} team.
        </p>
      </header>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
        
        <div className="relative bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-sm space-y-6">
          {category === "planner" && (
            <div className="space-y-3 animate-in fade-in zoom-in-95 duration-500">
              <label className="flex items-center text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Estimated Budget Range
              </label>
              <div className="relative">
                <input 
                  {...register("budget", { required: true })} 
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none font-bold text-slate-700 shadow-inner" 
                  placeholder="e.g. ₹5,00,000 - ₹10,00,000" 
                />
                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 font-bold">INR</div>
              </div>
            </div>
          )}

          {category === "performer" && (
            <div className="space-y-3 animate-in fade-in zoom-in-95 duration-500">
              <label className="flex items-center text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Genre or Style
              </label>
              <input 
                {...register("genre", { required: true })} 
                className="w-full px-5 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/5 transition-all outline-none font-bold text-slate-700 shadow-inner" 
                placeholder="e.g. Sufi Rock, Stand-up Comedy" 
              />
            </div>
          )}

          {category === "crew" && (
            <div className="space-y-3 animate-in fade-in zoom-in-95 duration-500">
              <label className="flex items-center text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Required Personnel Count
              </label>
              <div className="flex items-center space-x-4">
                <input 
                  type="number" 
                  {...register("count", { required: true })} 
                  className="w-full px-5 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all outline-none font-black text-2xl text-blue-600 shadow-inner" 
                  placeholder="0"
                />
                <div className="text-slate-400 font-bold uppercase text-[10px] tracking-tighter leading-tight w-12">
                  People Needed
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button 
          type="button" 
          onClick={onBack} 
          className="order-2 sm:order-1 w-full sm:w-1/3 flex items-center justify-center px-6 py-5 font-black text-slate-400 transition-all duration-300 bg-slate-50 rounded-2xl hover:bg-slate-100 hover:text-slate-600 active:scale-95 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Go Back
        </button>

        <button 
          type="submit" 
          className="order-1 sm:order-2 w-full sm:w-2/3 group relative flex items-center justify-center px-8 py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg overflow-hidden transition-all duration-300 hover:bg-indigo-700 hover:shadow-[0_20px_40px_rgba(79,70,229,0.3)] active:scale-[0.98]"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span className="relative z-10 mr-2">Review Summary</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </form>
  );
}