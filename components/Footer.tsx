
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="text-xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
            M. GHARBI
          </p>
          <p className="text-sm text-slate-400 font-medium tracking-wide">
            DESIGNED & DEVELOPED WITH PASSION
          </p>
        </div>
        
        <div className="flex gap-8 text-sm font-bold text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Terms of Service</a>
        </div>
        
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Mohamed Gharbi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
