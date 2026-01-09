
import React from 'react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -z-0"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 blur-[100px] -z-0"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to see my <br />
              <span className="text-blue-400">full journey?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-md mb-0">
              My resume contains a detailed overview of my professional experience, 
              academic achievements, and extra-curricular contributions.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col gap-4">
            <a
              href="/resume.pdf"
              download
              className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40 active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download Resume
            </a>
            <button className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                View in Browser
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
