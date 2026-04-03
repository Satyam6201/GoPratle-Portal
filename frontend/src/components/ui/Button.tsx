"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md',
  isLoading, 
  children, 
  className,
  ...props 
}: ButtonProps) => {
  
  const baseStyles = "relative inline-flex items-center justify-center font-bold transition-all duration-200 active:scale-95 disabled:opacity-60 disabled:pointer-events-none overflow-hidden rounded-2xl";
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base"
  };

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200",
    secondary: "bg-slate-100 text-slate-600 hover:bg-slate-200",
    danger: "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-100",
    ghost: "bg-transparent text-slate-500 hover:bg-slate-50"
  };

  return (
    <button 
      {...props} 
      disabled={isLoading || props.disabled}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      
      <span className={isLoading ? "opacity-0" : "opacity-100"}>
        {children}
      </span>

      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center text-xs font-black uppercase tracking-widest">
          Processing
        </span>
      )}
    </button>
  );
};