"use client";

export default function Step3Review({ formData, onBack, onSubmit, goToStep }: any) {
  return (
    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-1000 ease-out">
      <header className="relative text-center sm:text-left border-b border-slate-100 pb-6">
        <div className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
          Step 03 — Final Review
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
          Ready to <span className="text-green-600 underline decoration-green-200 underline-offset-4">Publish?</span>
        </h2>
        <p className="text-slate-500 font-medium mt-3 text-sm sm:text-base leading-relaxed">
          Verify everything below. You can hop back to any section to make changes.
        </p>
      </header>

      <div className="space-y-4">
        {/* Event Identity Card */}
        <div className="group relative p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all duration-300">
          <button 
            onClick={() => goToStep(1)}
            className="absolute top-6 right-6 flex items-center text-[10px] font-black text-blue-600 uppercase tracking-widest bg-white px-3 py-1.5 rounded-full shadow-sm hover:bg-blue-600 hover:text-white transition-all active:scale-90"
          >
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
            Edit
          </button>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-2">Primary Information</span>
          <h3 className="font-black text-2xl text-slate-800 leading-tight pr-12">{formData.eventName}</h3>
          
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-bold capitalize">
              {formData.eventType}
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold capitalize">
              {formData.category}
            </span>
          </div>
        </div>

        {/* Location & Schedule */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100 relative group">
             <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Where</span>
             <div className="flex items-start">
               <div className="p-2 bg-red-100 rounded-xl mr-3">
                 <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
               </div>
               <div>
                 <p className="font-bold text-slate-800 leading-tight">{formData.location}</p>
                 <p className="text-xs text-slate-500 mt-1 font-medium">{formData.venue || "No specific venue"}</p>
               </div>
             </div>
          </div>

          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-100">
             <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">When</span>
             <div className="flex items-center text-sm font-bold text-slate-700">
               <div className="p-2 bg-blue-100 rounded-xl mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
               </div>
               <div>
                <p className="text-xs text-slate-400 font-black uppercase">Date Range</p>
                <p className="tracking-tight">{formData.dateRange?.startDate} — {formData.dateRange?.endDate}</p>
               </div>
             </div>
          </div>
        </div>

        {/* Dynamic Requirements Card */}
        <div className="p-6 rounded-3xl bg-green-50/40 border-2 border-dashed border-green-200 relative group transition-all duration-500 hover:bg-green-50">
          <button 
            onClick={() => goToStep(2)}
            className="absolute top-6 right-6 flex items-center text-[10px] font-black text-green-600 uppercase tracking-widest bg-white px-3 py-1.5 rounded-full shadow-sm hover:bg-green-600 hover:text-white transition-all active:scale-90"
          >
            Modify
          </button>
          <span className="block text-[10px] font-black text-green-600 uppercase tracking-[0.2em] mb-4">Specific Requirements</span>
          
          <div className="space-y-3">
            {Object.entries(formData.details || {}).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center bg-white/60 p-3 rounded-2xl">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter capitalize">{key}</span>
                <span className="font-black text-slate-800 tracking-tight">
                   {value ? String(value) : "—"}
                </span>
              </div>
            ))}
            {Object.keys(formData.details || {}).length === 0 && (
              <p className="text-slate-400 text-sm italic py-2">No additional constraints provided.</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button 
          onClick={onBack} 
          className="order-2 sm:order-1 w-full sm:w-1/3 flex items-center justify-center py-5 px-6 font-black text-slate-400 bg-slate-50 rounded-2xl hover:bg-slate-100 hover:text-slate-600 transition-all active:scale-95 group"
        >
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M11 17l-5-5m0 0l5-5m-5 5h12"/></svg>
          Go Back
        </button>

        <button 
          onClick={onSubmit} 
          className="order-1 sm:order-2 w-full sm:w-2/3 group relative flex items-center justify-center py-5 px-8 bg-green-600 text-white rounded-2xl font-black text-lg overflow-hidden transition-all duration-300 hover:bg-green-700 hover:shadow-[0_20px_40px_rgba(22,163,74,0.3)] active:scale-[0.98]"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span className="relative z-10 mr-2 group-hover:tracking-wider transition-all duration-300">Confirm & Post</span>
          <svg className="w-6 h-6 relative z-10 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
          
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </button>
      </div>
    </div>
  );
}