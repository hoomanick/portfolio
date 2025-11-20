import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  ChevronDown, 
  ExternalLink, 
  Cpu, 
  Activity, 
  Layers, 
  Database, 
  Award,
  Terminal,
  Network,
  User,
  Home,
  Mic,
  GraduationCap,
  Briefcase,
  BookCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * HOOMAN NICK - PORTFOLIO
 * Theme: "The Structural Digital Twin" (Light Mode)
 * Aesthetic: Apple Light Mode x Engineering Precision
 * Note: Reverted to original high-tech design, but with White/Light theme.
 */

// --- ICONS ---

const ResearchGateIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M19.586 22.068l-3.21-7.91H12.85v7.91H9.063V1.932h7.126c1.695 0 3.026.33 3.993.99 1.523 1.038 2.284 2.594 2.284 4.668 0 1.323-.312 2.43-.936 3.322-.624.89-1.515 1.557-2.673 1.998l3.73 9.16h-3.001zm-6.736-10.794h3.048c1.09 0 1.908-.204 2.454-.612.546-.408.819-1.068.819-1.98 0-.96-.273-1.632-.819-2.016-.546-.384-1.35-.576-2.412-.576h-3.09v5.184z" />
  </svg>
);

// --- DATA ---

const JOURNAL_PAPERS = [
  {
    title: "Damage identification in steel frames using dual-criteria vibration-based damage detection method and artificial neural network",
    journal: "Structures, 51, 1833-1851",
    year: "2023",
    tags: ["ANN", "Vibration Analysis", "MFDI"],
    icon: Network,
    color: "cyan",
    link: "https://doi.org/10.1016/j.istruc.2023.03.152"
  },
  {
    title: "Vibration-based damage identification in steel girder bridges using artificial neural network under noisy conditions",
    journal: "Journal of Nondestructive Evaluation, 40(2)",
    year: "2021",
    tags: ["Noise Cancellation", "Steel Girder", "ABAQUS"],
    icon: Activity,
    color: "blue",
    link: "https://doi.org/10.1007/s10921-020-00744-8"
  },
  {
    title: "Damage identification in steel girder bridges using modal strain energy-based damage index method and artificial neural network",
    journal: "Engineering Failure Analysis, 119",
    year: "2021",
    tags: ["MSEDI", "Machine Learning", "Optimization"],
    icon: Database,
    color: "indigo",
    link: "https://doi.org/10.1016/j.engfailanal.2020.105010"
  }
];

const CONFERENCE_PAPERS = [
  {
    title: "Damage Identification in steel girder bridges via modal flexibility damage index and artificial neural network under the influence of noise",
    conference: "4th International Conference on Civil, Structural and Earthquake Engineering",
    location: "Tehran, Iran",
    year: "2020"
  },
  {
    title: "Damage assessment of steel girder bridges using modal strain energy and artificial neural network",
    conference: "3rd International Conference on Applied Researches in Structural",
    location: "Tehran, Iran",
    year: "2019"
  },
  {
    title: "Damage identification in steel girder bridges using improved damage index method by modal combination and artificial neural network",
    conference: "8th International Conference on Seismology & Earthquake Engineering",
    location: "Tehran, Iran",
    year: "2019"
  },
  {
    title: "Damage identification in girders of steel bridges using damage index method and artificial neural network",
    conference: "5th International Conference on Bridge",
    location: "Tehran, Iran",
    year: "2019"
  }
];

const RESEARCH_ROLES = [
  {
    title: "Senior Researcher",
    institution: "Iran’s National Elites Foundation",
    period: "01/2021 – 12/2023",
    location: "Tehran",
    details: [
      "Developed a dual-criteria, two-stage damage identification framework for steel frames, integrating modified Modal Flexibility Damage Index (MFDI) and Modal Strain Energy-based Damage Index (MSEDI) to significantly improve detection reliability.",
      "Developed and trained two distinct Artificial Neural Networks, each specialized for an individual damage index, to precisely quantify the severity of both single and multiple damage scenarios.",
      "Introduced a computationally efficient data-gathering strategy for ANN training by collecting data exclusively from the detected damage location and its immediate neighbors.",
      "Published the methodology and results in Structures (2023)."
    ]
  },
  {
    title: "Research Assistant (M.Sc.)",
    institution: "Islamic Azad University of Science and Research Branch",
    period: "01/2016 – 09/2019",
    location: "Tehran",
    details: [
      "Developed a method for steel girder bridges that couples a modal strain energy-based (for localization) with an ANN (for severity quantification).",
      "Advanced the methodology to address real-world limitations by investigating its performance under noisy conditions, identifying Modal Flexibility (MFDI) as the most robust damage indicator.",
      "Engineered a novel noise-cancellation and quantification approach by training an ANN to map noisy vibration data to a noise-free output.",
      "Constructed and validated a 3D Finite Element (FE) model of the I-40 Bridge in ABAQUS."
    ]
  }
];

const PROFESSIONAL_ROLES = [
  {
    title: "Bridge Designer",
    company: "ASAN TARH PARS Engineering Consultant Co.",
    period: "01/2018 – Present",
    location: "Tehran",
    details: [
      "Designed urban/rural steel-girder bridges with earthquake-resistant details and code compliance.",
      "Built and validated analysis models with SAP2000, ETABS, SAFE, CSiBridge."
    ]
  },
  {
    title: "Bridge & Structural Designer",
    company: "KIATARH Engineering Consultant Co.",
    period: "01/2017 – 12/2018",
    location: "Tehran",
    details: [
      "Contributed to superstructure/substructure designs and performed seismic checks for buildings."
    ]
  },
  {
    title: "Intern (Structural & Bridge Design)",
    company: "PASAR Engineering Consultant Co.",
    period: "01/2016 – 12/2017",
    location: "Tehran",
    details: [
      "Supported project execution via AutoCAD drafting, 3D modeling, preliminary concepts, and material/cost studies."
    ]
  }
];

// --- COMPONENTS ---

const SectionHeading = ({ children, number }: { children: React.ReactNode; number: string }) => (
  <div className="flex items-center gap-4 mb-12 group">
    <span className="text-cyan-600 font-mono text-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">0{number}.</span>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight group-hover:text-cyan-600 transition-colors duration-300">
      {children}
    </h2>
    <div className="h-[1px] bg-slate-300 flex-grow ml-4 group-hover:bg-cyan-600 transition-colors duration-500"></div>
  </div>
);

const Card: React.FC<{ className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white/60 backdrop-blur-md border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-cyan-500/50 hover:bg-white/80 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] shadow-sm group ${className}`}>
    {children}
  </div>
);

const Badge: React.FC = ({ children }) => (
  <span className="px-3 py-1 text-xs font-semibold font-mono text-cyan-700 bg-cyan-50 border border-cyan-200 rounded-full">
    {children}
  </span>
);

// --- BACKGROUND PARTICLE SYSTEM (Adapted for Light Mode) ---
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width: number, height: number;
    
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
    }

    let particles: Particle[] = [];
    let mouse = { x: null as number | null, y: null as number | null, radius: 150 };

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles = [];
      const numberOfParticles = (width * height) / 9000; 

      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          baseX: Math.random() * width,
          baseY: Math.random() * height,
          density: (Math.random() * 30) + 1
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        
        // Mouse interaction
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - p.x;
          let dy = mouse.y - p.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = forceDirectionX * force * p.density;
            const directionY = forceDirectionY * force * p.density;
            
            p.x -= directionX;
            p.y -= directionY;
          } else {
            if (p.x !== p.baseX) {
              let dx = p.x - p.baseX;
              p.x -= dx/10;
            }
            if (p.y !== p.baseY) {
              let dy = p.y - p.baseY;
              p.y -= dy/10;
            }
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;

        // Draw Particle (Dark Blue/Slate for visibility on white)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.3)'; // Dark Slate
        ctx.fill();
      }

      // Connect particles
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(15, 23, 42, ${0.15 - distance/1000})`; // Dark lines
            ctx.lineWidth = 1;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
        mouse.x = null;
        mouse.y = null;
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    init();
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-50" />;
};

// --- MAIN APP COMPONENT ---

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Scroll Spy Logic
      const sections = ['hero', 'about', 'research', 'research-experience', 'professional-experience', 'skills'];
      // Default to hero
      let current = 'hero';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            // If section top is within the top half of screen, consider it active
            if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0) {
                current = section;
            }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const bottomNavItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'research', label: 'Res.', icon: Network },
    { id: 'professional-experience', label: 'Exp.', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Cpu },
  ];

  return (
    <div className="min-h-screen text-slate-600 selection:bg-cyan-200 selection:text-cyan-900 font-sans overflow-x-hidden pb-20 md:pb-0">
      <ParticleBackground />

      {/* --- TOP NAVIGATION (DESKTOP) --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/10 backdrop-blur-3xl border-b border-white/30 py-2 shadow-lg shadow-slate-200/20' : 'bg-transparent py-4'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <button
            type="button"
            onClick={() => scrollTo('hero')}
            className="group flex flex-col items-start cursor-pointer"
            aria-label="Back to top"
          >
            <img
              src="/images/logo.svg"
              alt="Hooman Nick logo"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="h-1 w-0 bg-cyan-600 group-hover:w-full transition-all duration-300"></div>
          </button>
          
          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <button 
              onClick={() => scrollTo('about')} 
              className={`hover:text-cyan-600 transition-colors uppercase tracking-wide font-semibold ${activeSection === 'about' ? 'text-cyan-600' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollTo('research')} 
              className={`hover:text-cyan-600 transition-colors uppercase tracking-wide font-semibold ${activeSection === 'research' || activeSection === 'research-experience' ? 'text-cyan-600' : ''}`}
            >
              Research
            </button>
            <button 
              onClick={() => scrollTo('professional-experience')} 
              className={`hover:text-cyan-600 transition-colors uppercase tracking-wide font-semibold ${activeSection === 'professional-experience' ? 'text-cyan-600' : ''}`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollTo('skills')} 
              className={`hover:text-cyan-600 transition-colors uppercase tracking-wide font-semibold ${activeSection === 'skills' ? 'text-cyan-600' : ''}`}
            >
              Skills
            </button>
            
            <a 
              href="mailto:hooman.nick@gmail.com"
              className="text-cyan-600 border border-cyan-200 px-4 py-1.5 rounded-full hover:bg-cyan-50 transition-all font-bold"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* --- BOTTOM NAVIGATION (MOBILE/TABLET) --- */}
      <div className="md:hidden fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none">
        <nav className="bg-white/10 backdrop-blur-3xl border border-white/40 shadow-2xl shadow-slate-400/20 rounded-full p-2 pointer-events-auto flex items-center justify-evenly w-[90%] max-w-md mx-4">
          {bottomNavItems.map((item) => {
            const isActive = activeSection === item.id || (item.id === 'research' && activeSection === 'research-experience');
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3 py-3 rounded-full transition-all duration-300 flex flex-col items-center justify-center min-w-[3.5rem] group`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-white shadow-md rounded-full transition-all duration-300" />
                )}
                <div className={`relative z-10 flex flex-col items-center gap-1 ${isActive ? 'text-cyan-600' : 'text-slate-600'}`}>
                  <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
                  <span className="text-[9px] font-bold leading-none uppercase tracking-tight">{item.label}</span>
                </div>
              </button>
            );
          })}
          <a 
             href="mailto:hooman.nick@gmail.com"
             className="relative px-3 py-3 rounded-full flex flex-col items-center justify-center min-w-[3.5rem] text-slate-600 hover:text-cyan-600"
          >
             <Mail className="w-5 h-5" />
             <span className="text-[9px] font-bold leading-none mt-1 uppercase tracking-tight">Contact</span>
          </a>
        </nav>
      </div>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 max-w-6xl mx-auto relative overflow-hidden md:overflow-visible pt-20 md:pt-0 gap-10">
        
        {/* Left Content: Text */}
        <div className="space-y-6 max-w-2xl z-10 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 backdrop-blur-sm mb-4 animate-fade-in-up shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono font-bold text-cyan-700">Open to PhD Opportunities Fall 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight leading-tight">
            Hooman <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Nick</span>
          </h1>
          
          <h2 className="text-xl md:text-3xl text-slate-500 font-light max-w-2xl leading-relaxed">
            Structural Engineer specializing in <span className="text-slate-900 font-semibold">Structural Health Monitoring</span> & <span className="text-slate-900 font-semibold">AI</span>. 
            Quantifying damage through modal data and neural networks.
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
            <a href="#" className="flex items-center gap-2 bg-slate-900 text-white px-7 py-3.5 rounded-full font-bold hover:scale-105 transition-transform shadow-lg hover:shadow-cyan-500/20">
              <FileText size={20} />
              Download CV
            </a>
            
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:bg-[#0077b5]/5 transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>

              {/* Google Scholar */}
              <a 
                href="https://scholar.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-[#4285F4] hover:border-[#4285F4]/30 hover:bg-[#4285F4]/5 transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="Google Scholar"
              >
                <GraduationCap size={22} />
              </a>

              {/* ResearchGate */}
              <a 
                href="https://researchgate.net" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-[#00ccbb] hover:border-[#00ccbb]/30 hover:bg-[#00ccbb]/5 transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="ResearchGate"
              >
                <ResearchGateIcon size={22} />
              </a>

              {/* Email */}
              <a 
                href="mailto:hooman.nick@gmail.com"
                className="p-3 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-slate-900 hover:border-slate-900/30 hover:bg-slate-100 transition-all duration-300 hover:scale-110 shadow-sm"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Content: Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 order-1 md:order-2 flex justify-center"
        >
           {/* Glowing blob behind image */}
           <div className="absolute inset-0 bg-cyan-300 rounded-full blur-3xl opacity-20 animate-pulse scale-110"></div>
           
           {/* Liquid glass container */}
           <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-white/20 backdrop-blur-md border border-white/40 shadow-2xl shadow-cyan-100/50 ring-1 ring-white/60">
              <img 
                src="/images/profile.jpg"
                alt="Hooman Nick" 
                className="w-full h-full object-cover rounded-full shadow-inner"
              />
           </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hidden md:block">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading number="1">The Intersection of Civil & AI</SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I am a researcher driven by a singular question: <span className="text-slate-900 italic font-medium">How can we make our infrastructure intelligent?</span>
              </p>
              <p>
                With an M.Sc. in Structural Engineering (GPA 17.20/20) and a background as a top-ranked graduate student, I have dedicated my academic career to 
                <strong className="text-cyan-700"> Structural Health Monitoring (SHM)</strong>. 
              </p>
              <p>
                My work focuses on bridging the gap between Finite Element Modeling (ABAQUS) and Machine Learning pipelines (Python/MATLAB). I develop Artificial Neural Networks that can "listen" to the vibrations of a bridge and pinpoint damage with precision, even in noisy environments.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Wide High-Impact Card */}
              <Card className="col-span-2 flex flex-row items-center justify-between px-8 py-6 border-l-4 !border-l-cyan-500">
                <div className="flex flex-col">
                   <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">Top 1% National</div>
                   <div className="text-sm text-slate-500 font-bold">Of ~570,000 Candidates</div>
                </div>
                <div className="bg-cyan-50 p-3 rounded-full text-cyan-600">
                   <Award size={32} />
                </div>
              </Card>

              {/* Row 2 */}
              <Card className="flex flex-col items-center justify-center text-center h-40 border-l-4 !border-l-indigo-500">
                <Activity className="text-indigo-500 mb-3" size={32} />
                <div className="text-2xl font-bold text-slate-900 mb-1">189+ Citations</div>
                <div className="text-xs text-slate-500 font-bold">h-index 3 & High Impact</div>
              </Card>
              
              <Card className="flex flex-col items-center justify-center text-center h-40 border-l-4 !border-l-emerald-500">
                <BookCheck className="text-emerald-500 mb-3" size={32} />
                <div className="text-2xl font-bold text-slate-900 mb-1">Peer Reviewer</div>
                <div className="text-xs text-slate-500 font-bold">Scientific Reports (Springer)</div>
              </Card>

              {/* Row 3 */}
              <Card className="flex flex-col items-center justify-center text-center h-40 border-l-4 !border-l-blue-500">
                <FileText className="text-blue-500 mb-3" size={32} />
                <div className="text-2xl font-bold text-slate-900 mb-1">TOEFL iBT 100</div>
                <div className="text-xs text-slate-500 font-bold">R25 | L27 | S23 | W25</div>
              </Card>

              <Card className="flex flex-col items-center justify-center text-center h-40 border-l-4 !border-l-purple-500">
                <Layers className="text-purple-500 mb-3" size={32} />
                <div className="text-2xl font-bold text-slate-900 mb-1">5+ Yrs Design</div>
                <div className="text-xs text-slate-500 font-bold">Bridges & Seismic</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* --- RESEARCH SECTION --- */}
      <section id="research" className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading number="2">Selected Publications</SectionHeading>
          
          {/* Journal Papers */}
          <h3 className="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-cyan-500 pl-4">Peer-Reviewed Journals</h3>
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {JOURNAL_PAPERS.map((paper, index) => {
              const Icon = paper.icon;
              const gradientColors = paper.color === 'cyan' 
                ? 'from-cyan-500 to-blue-600' 
                : paper.color === 'blue' 
                  ? 'from-blue-500 to-indigo-600' 
                  : 'from-indigo-500 to-pink-600';
              
              const iconColor = paper.color === 'cyan' 
                ? 'text-cyan-600' 
                : paper.color === 'blue' 
                  ? 'text-blue-600' 
                  : 'text-indigo-600';

              const hoverColor = paper.color === 'cyan'
                ? 'group-hover:text-cyan-600'
                : paper.color === 'blue'
                  ? 'group-hover:text-blue-600'
                  : 'group-hover:text-indigo-600';

              return (
                <Card key={index} className="relative overflow-hidden group flex flex-col h-full">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradientColors} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  <div className="mb-6 flex justify-between items-start">
                    <Icon className={iconColor} size={32} />
                    <span className="text-xs font-bold font-mono text-slate-400">{paper.year} • {paper.journal.split(',')[0]}</span>
                  </div>
                  <h3 className={`text-lg font-bold text-slate-900 mb-3 ${hoverColor} transition-colors line-clamp-4 leading-tight`}>
                    {paper.title}
                  </h3>
                  <div className="text-slate-500 text-xs font-medium mb-6 italic flex-grow">
                    {paper.journal}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {paper.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
                  </div>
                  {paper.link && (
                    <a href={paper.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors">
                      Read Article <ExternalLink size={12} />
                    </a>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Conference Papers */}
          <h3 className="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-indigo-500 pl-4">Conference Presentations</h3>
          <div className="space-y-6">
            {CONFERENCE_PAPERS.map((paper, index) => (
              <div key={index} className="bg-white/40 border border-slate-200 rounded-xl p-6 hover:bg-white/70 hover:border-indigo-300 transition-all flex flex-col md:flex-row md:items-center gap-4 group">
                <div className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                   <Mic size={24} />
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">{paper.title}</h4>
                  <p className="text-sm text-slate-600 font-medium">{paper.conference}</p>
                </div>
                <div className="flex-shrink-0 text-right md:text-right flex md:flex-col gap-2 md:gap-0 items-center md:items-end text-slate-500 text-xs font-mono">
                  <span className="font-bold">{paper.year}</span>
                  <span>{paper.location}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <p className="text-slate-500 mb-4 font-medium">Academic Impact: <span className="text-slate-900 font-bold">189 Citations</span> | h-index: <span className="text-slate-900 font-bold">3</span></p>
             <a href="https://scholar.google.com" className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-500 transition-colors font-bold border-b border-cyan-200 hover:border-cyan-500 pb-1">
                View Google Scholar Profile <ExternalLink size={14} />
             </a>
          </div>
        </div>
      </section>

      {/* --- RESEARCH EXPERIENCE SECTION --- */}
      <section id="research-experience" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
           <SectionHeading number="3">Research Experience</SectionHeading>

           <div className="relative border-l border-slate-300 ml-4 md:ml-8 space-y-12">
              {RESEARCH_ROLES.map((role, index) => (
                 <div key={index} className="relative pl-8 md:pl-12 group">
                    <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-cyan-500 ring-4 ring-slate-100 group-hover:ring-cyan-100 transition-all"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                       <h3 className="text-xl font-bold text-slate-900">{role.title}</h3>
                       <span className="font-mono text-sm font-bold text-cyan-600">{role.period}</span>
                    </div>
                    <div className="text-slate-500 mb-4 font-semibold">{role.institution} • {role.location}</div>
                    <ul className="space-y-2 text-slate-600 text-sm leading-relaxed max-w-2xl">
                       {role.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                             <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-300 flex-shrink-0" />
                             <span>{detail}</span>
                          </li>
                       ))}
                    </ul>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- PROFESSIONAL EXPERIENCE SECTION --- */}
      <section id="professional-experience" className="py-16 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
           <SectionHeading number="4">Professional Experience</SectionHeading>

           <div className="relative border-l border-slate-300 ml-4 md:ml-8 space-y-12">
              {PROFESSIONAL_ROLES.map((role, index) => (
                 <div key={index} className="relative pl-8 md:pl-12 group">
                    <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-slate-400 ring-4 ring-slate-100 group-hover:ring-slate-200 transition-all"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                       <h3 className="text-xl font-bold text-slate-900">{role.title}</h3>
                       <span className="font-mono text-sm font-bold text-slate-500">{role.period}</span>
                    </div>
                    <div className="text-slate-500 mb-4 font-semibold">{role.company} • {role.location}</div>
                     <ul className="space-y-2 text-slate-600 text-sm leading-relaxed max-w-2xl">
                       {role.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                             <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                             <span>{detail}</span>
                          </li>
                       ))}
                    </ul>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- SKILLS --- */}
      <section id="skills" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading number="5">Technical Arsenal</SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-8 text-cyan-600 border-b border-slate-100 pb-4">
                <div className="p-2 bg-cyan-50 rounded-lg">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Engineering Simulation</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {['ABAQUS', 'SAP2000', 'ETABS', 'SAFE', 'CSiBridge', 'AutoCAD', 'Finite Element Modeling (FEM)'].map(skill => (
                  <div key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium text-sm hover:border-cyan-400 hover:bg-cyan-50/30 hover:text-cyan-700 transition-all cursor-default shadow-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </Card>

            <Card className="h-full">
              <div className="flex items-center gap-3 mb-8 text-indigo-600 border-b border-slate-100 pb-4">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <Terminal size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Computational & AI</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {['Python (Data/ML)', 'MATLAB (ANN/Signal)', 'C (Basic)', 'Artificial Neural Networks', 'Damage Detection Algorithms', 'Machine Learning', 'Vibration-Based Detection', 'Modal Strain Energy'].map(skill => (
                  <div key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium text-sm hover:border-indigo-400 hover:bg-indigo-50/30 hover:text-indigo-700 transition-all cursor-default shadow-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-slate-200 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20"></div>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2025 Hooman Nick. Engineering the Future.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-600 transition-colors font-bold">ResearchGate</a>
            <a href="#" className="hover:text-cyan-600 transition-colors font-bold">Google Scholar</a>
            <a href="#" className="hover:text-cyan-600 transition-colors font-bold">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}