
import React from 'react';
import { SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-50/50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Professional Profile</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-4 mb-8">
              Serious, Solution-Oriented & <span className="text-blue-600 italic">Driven by Innovation</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I am a 1st-year Computer Science Engineering student admitted via the National Entrance Exam 
                for Engineering Schools. My core interests lie in web and mobile development, computer systems, 
                and cybersecurity.
              </p>
              <p>
                With a serious and solution-oriented profile, I am highly motivated and capable of rapidly 
                upskilling. I thrive in collaborative team environments and believe in building software 
                that is both functional and secure.
              </p>
              
              <div className="pt-6">
                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    Community & Association Life
                </h4>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0"></div>
                        <p className="text-sm font-medium text-slate-600"><span className="text-slate-900 font-bold">Securinets EPS:</span> Active Member (2025 – 2026)</p>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0"></div>
                        <p className="text-sm font-medium text-slate-600"><span className="text-slate-900 font-bold">Tunivisions LJFK:</span> Active Member (2021 – 2022)</p>
                    </li>
                </ul>
              </div>

              <div className="pt-2">
                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.583L9 14.05M7 16l-1.018-3.054M5 19l2-2m-2 2H3m2 0V21" /></svg>
                    Languages
                </h4>
                <div className="flex flex-wrap gap-4">
                    <div className="px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold text-slate-700">Arabic: Native</div>
                    <div className="px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold text-slate-700">English: Advanced</div>
                    <div className="px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-sm font-bold text-slate-700">French: DELF B2 Certified</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="glass rounded-[2rem] p-8 md:p-12 shadow-inner border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    Technical Proficiency
                </h3>
                <div className="space-y-6">
                    {SKILLS.map((skill) => (
                        <div key={skill.name}>
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-semibold text-slate-700">{skill.name}</span>
                                <span className="text-sm font-medium text-slate-400">{skill.level}%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 space-y-4">
                    <div className="p-6 bg-slate-900 rounded-2xl text-white">
                        <h4 className="font-bold mb-1">École Polytechnique de Sousse</h4>
                        <p className="text-slate-400 text-xs">Engineering Cycle in Computer Science</p>
                        <p className="text-blue-400 text-xs font-medium mt-1">2025 – 2028</p>
                    </div>
                    <div className="p-6 bg-white border border-slate-100 rounded-2xl text-slate-900">
                        <h4 className="font-bold mb-1">IPEI Kairouan</h4>
                        <p className="text-slate-500 text-xs">Preparatory Cycle: Math-Physics</p>
                        <p className="text-blue-600 text-xs font-medium mt-1">2023 – 2025</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
