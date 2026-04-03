"use client";

import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full group animate-in fade-in slide-in-from-top-1 duration-300">
        <div className="flex justify-between items-center ml-1">
          <label className="text-xs font-black uppercase tracking-widest text-slate-500 group-focus-within:text-blue-600 transition-colors">
            {label}
          </label>
          {error && (
            <span className="text-[10px] font-bold text-red-500 uppercase animate-pulse">
              {error}
            </span>
          )}
        </div>

        <div className="relative flex items-center">
          {icon && (
            <div className="absolute left-4 text-slate-400 group-focus-within:text-blue-500 transition-colors">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            {...props}
            className={`
              w-full py-4 rounded-2xl border-2 transition-all duration-200 outline-none text-sm font-medium
              ${icon ? "pl-12 pr-4" : "px-5"}
              ${
                error
                  ? "border-red-100 bg-red-50 text-red-900 focus:border-red-400"
                  : "border-slate-100 bg-slate-50/50 text-slate-800 focus:border-blue-500 focus:bg-white focus:shadow-xl focus:shadow-blue-50"
              }
              ${className}
            `}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";