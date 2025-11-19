
import React, { useState, useEffect } from 'react';
import { User, Briefcase, BookOpen, Award, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['experience', 'publications', 'skills', 'contact'];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // If we are at the bottom of the page, force 'contact' to be active
      // Using a small buffer (50px) to account for mobile browser address bars/rounding
      if (scrollY + windowHeight >= docHeight - 50) {
        setActiveSection('contact');
        return;
      }

      // We treat 'home' (About) as the default for the top part of the page (Hero + Education)
      // The loop checks subsequent sections; if we are past them, they become active.
      const scrollPosition = scrollY + 300;
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          current = section;
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // We intentionally don't set activeSection here because the scroll event listener 
    // will update it as the page scrolls, preventing conflicting states.
  };

  const navLinks = [
    { name: 'About', href: '#home', icon: User },
    { name: 'Exp.', href: '#experience', icon: Briefcase },
    { name: 'Pubs.', href: '#publications', icon: BookOpen },
    { name: 'Skills', href: '#skills', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <div className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl shadow-slate-900/10 rounded-full px-2 py-2 pointer-events-auto flex items-center gap-1"
      >
        {navLinks.map((link) => {
          // Map link href to ID for active check
          const linkId = link.href.substring(1);
          const isActive = activeSection === linkId;
          const Icon = link.icon;
          
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`relative px-4 py-3 rounded-full transition-all duration-300 flex flex-col items-center justify-center min-w-[4.5rem] group cursor-pointer`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-slate-900 rounded-full"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <div className={`relative z-10 flex flex-col items-center gap-1 ${isActive ? 'text-white' : 'text-slate-500 hover:text-slate-900'}`}>
                <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                <span className="text-[10px] font-medium leading-none">{link.name}</span>
              </div>
            </a>
          );
        })}
      </motion.nav>
    </div>
  );
};

export default Navbar;
