
import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  FlaskConical, 
  ScrollText, 
  Award, 
  Mail, 
  MapPin, 
  Linkedin, 
  ExternalLink,
  BrainCircuit,
  ArrowRight
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';

import Navbar from './components/Navbar';
import Section from './components/Section';
import { 
  PERSONAL_INFO, 
  EDUCATION, 
  RESEARCH_EXPERIENCE, 
  PROFESSIONAL_EXPERIENCE, 
  PUBLICATIONS, 
  SKILLS, 
  HONORS
} from './constants';

const App: React.FC = () => {
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      }
    }
  };

  const footerSocialContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const socialItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <div className="bg-slate-50 font-sans text-slate-800 pb-20 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Fixed Logo */}
      <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50">
        <motion.div 
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 15,
              delay: 0.2
            }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            className="bg-slate-900 text-white p-2.5 rounded-lg shadow-xl cursor-pointer group hover:bg-slate-800 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <div className="relative w-8 h-8 flex items-center justify-center font-bold text-xl tracking-tighter overflow-hidden">
               <span className="absolute">HN</span>
            </div>
        </motion.div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <header id="home" className="relative pt-20 pb-4 flex items-center justify-center overflow-hidden">
        {/* Decorative blurred blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 z-10 w-full">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
             {/* Image Column */}
             <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-shrink-0"
             >
                <div className="relative w-40 h-40 md:w-56 md:h-56">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-300 animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-2 bg-white rounded-full shadow-2xl overflow-hidden border-4 border-white">
                        <img 
                            src={PERSONAL_INFO.image} 
                            alt={PERSONAL_INFO.name} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${PERSONAL_INFO.name.replace(' ', '+')}&background=0f172a&color=fff&size=512`;
                            }}
                        />
                    </div>
                </div>
             </motion.div>

             {/* Content Column */}
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-center md:text-left"
             >
                <div className="inline-block px-4 py-1.5 mb-4 text-base font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full border border-indigo-100">
                    Portfolio & CV
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
                    <span className="block text-slate-900">{PERSONAL_INFO.role}</span>
                </h2>
                
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl text-justify">
                    {PERSONAL_INFO.summary}
                </p>
                
                {/* Social Links */}
                <motion.div 
                  variants={socialContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex justify-center md:justify-start items-center gap-4"
                >
                  <motion.a 
                    variants={socialItemVariants}
                    href={PERSONAL_INFO.socials.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-xl border border-slate-200 text-slate-600 hover:text-[#0077b5] hover:border-[#0077b5] hover:shadow-md transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  
                  <motion.a 
                    variants={socialItemVariants}
                    href={PERSONAL_INFO.socials.scholar} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-xl border border-slate-200 text-slate-600 hover:text-[#4285F4] hover:border-[#4285F4] hover:shadow-md transition-all duration-300"
                  >
                    <span className="font-serif font-bold text-lg">G</span>
                  </motion.a>

                  <motion.a 
                    variants={socialItemVariants}
                    href={PERSONAL_INFO.socials.researchgate} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-xl border border-slate-200 text-slate-600 hover:text-[#00ccbb] hover:border-[#00ccbb] hover:shadow-md transition-all duration-300"
                  >
                    <span className="font-bold text-xs">RG</span>
                  </motion.a>
                  
                  <motion.div variants={socialItemVariants} className="h-8 w-px bg-slate-200 mx-2"></motion.div>

                  <motion.button 
                    variants={socialItemVariants}
                    onClick={scrollToContact}
                    className="flex items-center px-5 py-3 bg-slate-900 text-white rounded-xl font-medium text-sm hover:bg-slate-800 transition-all duration-300 cursor-pointer"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </motion.button>
                </motion.div>
             </motion.div>
          </div>
        </div>
      </header>

      {/* Education Section */}
      <Section id="education" title="Academic Background" className="relative">
        <div className="grid gap-6 md:grid-cols-2">
          {EDUCATION.map((edu, index) => (
            <div key={index} className="relative bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-indigo-100 transition-all duration-300 hover:-translate-y-1">
               {/* Decorative corner */}
               <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                   <div className="absolute top-0 right-0 w-4 h-4 bg-slate-100 transform rotate-45 translate-x-2 -translate-y-2"></div>
               </div>

              <div className="flex flex-col h-full">
                <div className="mb-4">
                   <div className="inline-flex p-3 bg-indigo-50 text-indigo-600 rounded-xl mb-4">
                      <GraduationCap className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 leading-tight">{edu.degree}</h3>
                   <p className="text-slate-500 mt-1 text-base font-medium">{edu.institution}</p>
                </div>
                
                <div className="flex items-center text-slate-400 text-sm font-mono mb-6 uppercase tracking-wide">
                    <MapPin className="w-4 h-4 mr-1.5" /> 
                    {edu.location}
                    <span className="mx-2">•</span>
                    {edu.period}
                </div>

                {edu.details.length > 0 && (
                    <div className="mt-auto pt-6 border-t border-slate-50">
                        <ul className="space-y-2.5">
                        {edu.details.map((detail, i) => (
                            <li key={i} className="text-slate-600 text-lg leading-relaxed flex items-start text-justify">
                            <span className="mr-2.5 mt-2.5 w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0"></span>
                            {detail}
                            </li>
                        ))}
                        </ul>
                    </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Honors sub-section */}
        <div className="mt-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center mb-4"
            >
                <div className="h-px bg-slate-200 w-12 md:w-24"></div>
                <h3 className="text-xl font-bold text-slate-900 px-4 flex items-center gap-3">
                    <Award className="w-5 h-5 text-amber-500" /> 
                    Honors & Awards
                </h3>
                <div className="h-px bg-slate-200 flex-1"></div>
            </motion.div>
            
            <div className="grid gap-4 sm:grid-cols-2">
                {HONORS.map((honor, idx) => (
                    <motion.div 
                        whileHover={{ scale: 1.01 }}
                        key={idx} 
                        className="flex items-start p-5 rounded-xl bg-white border border-slate-100 hover:border-amber-200 hover:bg-amber-50/30 transition-colors"
                    >
                        <span className="font-mono font-bold text-slate-300 text-lg mr-4 mt-0.5">{honor.year}</span>
                        <div>
                            <h4 className="font-bold text-slate-800 text-lg mb-1">{honor.title}</h4>
                            <p className="text-slate-600 text-base leading-snug text-justify">{honor.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </Section>

      {/* Experience Section (Research + Professional) */}
      <Section id="experience" title="Experience">
        <div className="space-y-8">
            
          {/* Research Track */}
          <div>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-4"
            >
                <div className="p-2.5 bg-blue-100 text-blue-600 rounded-lg">
                    <FlaskConical className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Research Experience</h3>
            </motion.div>

            <div className="space-y-6">
              {RESEARCH_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="group relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    {/* Timeline visual */}
                    <div className="hidden md:block absolute -left-4 top-10 w-8 h-px bg-slate-300"></div>
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
                        <h4 className="text-xl font-bold text-slate-900">{exp.title}</h4>
                        <span className="font-mono text-xs text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                            {exp.period}
                        </span>
                    </div>
                    
                    <div className="flex items-center text-blue-600 text-base font-medium mb-6">
                        <Building2 className="w-4 h-4 mr-2" />
                        {exp.company}
                        <span className="mx-2 text-slate-300">|</span>
                        <span className="text-slate-500">{exp.location}</span>
                    </div>

                    <ul className="space-y-3">
                        {exp.points.map((point, i) => (
                            <li key={i} className="text-slate-700 text-lg leading-relaxed pl-4 border-l-2 border-slate-100 group-hover:border-blue-200 transition-colors text-justify">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Track */}
          <div>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-4"
            >
                <div className="p-2.5 bg-emerald-100 text-emerald-600 rounded-lg">
                    <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Professional Experience</h3>
            </motion.div>

            <div className="space-y-6">
              {PROFESSIONAL_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
                        <h4 className="text-xl font-bold text-slate-900">{exp.title}</h4>
                        <span className="font-mono text-xs text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                            {exp.period}
                        </span>
                    </div>
                    
                    <div className="flex items-center text-emerald-600 text-base font-medium mb-6">
                        <Building2 className="w-4 h-4 mr-2" />
                        {exp.company}
                        <span className="mx-2 text-slate-300">|</span>
                        <span className="text-slate-500">{exp.location}</span>
                    </div>

                    <ul className="space-y-3">
                        {exp.points.map((point, i) => (
                            <li key={i} className="text-slate-700 text-lg leading-relaxed pl-4 border-l-2 border-slate-100 group-hover:border-emerald-200 transition-colors text-justify">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Publications Section */}
      <Section id="publications" title="Publications">
        <div className="grid gap-4">
            {PUBLICATIONS.map((pub, idx) => (
                <motion.a 
                    key={idx}
                    href={pub.link || "#"}
                    target={pub.link ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.005, x: 5 }}
                    className={`block p-6 rounded-xl border bg-white transition-all group ${pub.link ? 'cursor-pointer hover:border-indigo-300' : 'cursor-default border-slate-200'}`}
                >
                    <div className="flex items-start gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${pub.type === 'Journal' ? 'bg-indigo-50 text-indigo-700' : 'bg-slate-100 text-slate-600'}`}>
                                    {pub.type}
                                </span>
                                <span className="text-slate-500 text-base font-mono">{pub.year}</span>
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors leading-snug text-justify">
                                {pub.title}
                            </h4>
                            <div className="text-slate-600 text-base mb-3 font-serif italic text-justify">
                                {pub.journal}
                            </div>
                            <div className="text-slate-500 text-base text-justify">{pub.authors}</div>
                        </div>
                        {pub.link && (
                            <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 flex-shrink-0 mt-1" />
                        )}
                    </div>
                </motion.a>
            ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Skills" className="bg-slate-900 text-slate-300 rounded-[2rem] my-4 mx-4 md:mx-8 shadow-2xl pt-8 pb-8">
         <div className="max-w-5xl mx-auto">
            <div className="grid gap-6 md:grid-cols-3">
                {SKILLS.map((cat, idx) => (
                    <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                        <div className="flex items-center mb-4">
                            <div className="p-2 rounded-lg bg-white/10 mr-3">
                                {idx === 0 && <BrainCircuit className="w-5 h-5 text-emerald-400" />}
                                {idx === 1 && <FlaskConical className="w-5 h-5 text-blue-400" />}
                                {idx === 2 && <ScrollText className="w-5 h-5 text-purple-400" />}
                            </div>
                            <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="px-3 py-1.5 bg-black/20 text-slate-200 rounded-md text-base font-medium border border-white/5 hover:border-white/20 transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-8 flex flex-col items-center">
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Languages</h4>
                <div className="flex flex-wrap justify-center gap-4 md:gap-12">
                    <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-full border border-white/10">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-white font-medium text-base">Persian <span className="text-slate-500 text-sm font-normal ml-1">(Native)</span></span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-full border border-white/10">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        <span className="text-white font-medium text-base">English <span className="text-slate-500 text-sm font-normal ml-1">(TOEFL iBT 100)</span></span>
                    </div>
                </div>
            </div>
         </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="" className="pt-0">
        <div className="max-w-3xl mx-auto text-center pt-2 pb-8">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-slate-900 mb-6"
            >
                Let's Connect
            </motion.h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-justify md:text-center text-lg">
                I am open to discussing research opportunities and collaborations in Structural Health Monitoring and AI applications in civil engineering.
            </p>
            <motion.a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-indigo-600 transition-colors duration-300 shadow-xl hover:shadow-indigo-600/25"
            >
                <Mail className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Send an Email
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </motion.a>

            <motion.div 
                variants={footerSocialContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-12 flex justify-center items-center gap-6"
            >
                <motion.a 
                  variants={socialItemVariants}
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-500 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] shadow-sm transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                
                <motion.a 
                  variants={socialItemVariants}
                  href={PERSONAL_INFO.socials.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-500 hover:bg-[#4285F4] hover:text-white hover:border-[#4285F4] shadow-sm transition-all duration-300"
                  title="Google Scholar"
                >
                  <span className="font-serif font-bold text-lg leading-none mt-0.5">G</span>
                </motion.a>

                <motion.a 
                  variants={socialItemVariants}
                  href={PERSONAL_INFO.socials.researchgate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-500 hover:bg-[#00ccbb] hover:text-white hover:border-[#00ccbb] shadow-sm transition-all duration-300"
                  title="ResearchGate"
                >
                   <span className="font-bold text-xs leading-none mt-0.5">RG</span>
                </motion.a>
            </motion.div>
            
            <div className="mt-8 text-slate-400 text-sm">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </div>
        </div>
      </Section>
    </div>
  );
};

export default App;
