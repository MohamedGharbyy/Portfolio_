
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
            Computer Science Engineering Student
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Engineering the <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Future of Tech
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mb-10 leading-relaxed">
            I'm Mohamed Gharbi, a 1st-year engineering student at École Polytechnique de Sousse. 
            I specialize in web development, computer systems, and cybersecurity, turning 
            complex challenges into efficient digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all hover:-translate-y-1 shadow-xl"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all"
            >
              Get in Touch
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 justify-center md:justify-start opacity-60">
            <div className="flex -space-x-3 overflow-hidden">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/tech1/100" alt="" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/tech2/100" alt="" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/tech3/100" alt="" />
            </div>
            <p className="text-sm font-medium text-slate-600">Active in Tunisian Tech Communities</p>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] mx-auto">
            <div className="absolute -top-4 -right-4 w-full h-full rounded-[3rem] bg-blue-100 rotate-6 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-[3rem] bg-indigo-50 -rotate-3 -z-10 border border-indigo-100"></div>
            
            <div className="w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="IMG_0581.PNG"
                alt="Mohamed Gharbi"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="absolute bottom-8 right-4 glass p-4 rounded-2xl shadow-xl hidden lg:block" animate-bounce>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400">Status</p>
                        <p className="text-sm font-bold text-slate-800">Looking for Internship</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
