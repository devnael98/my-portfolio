"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Code2, Cpu, Layers, Mail, Terminal, ExternalLink, Monitor, Sun, Moon, MapPin, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 🧮 دالة ديناميكية لحساب العمر تلقائياً بناءً على تاريخ ميلادك 17/01/1998
  const calculateAge = (birthDateString: string) => {
    const birthDate = new Date(birthDateString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const myAge = calculateAge("1998-01-17");

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  if (!mounted) return null;

  // المهارات التقنية
  const skillCategories = [
    {
      title: "Frontend Architecture",
      icon: <Layers className="w-5 h-5 text-amber-500" />,
      skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Redux Toolkit"],
    },
    {
      title: "Backend & Core Systems",
      icon: <Cpu className="w-5 h-5 text-amber-500" />,
      skills: ["Laravel (Sanctum)", "Node.js", "Python", "RESTful APIs", "MySQL / PostgreSQL", "Redis"],
    },
    {
      title: "Mobile & Desktop Dev",
      icon: <Monitor className="w-5 h-5 text-amber-500" />,
      skills: ["Android Development", "Electron.js", "Desktop Architecture", "Java / Kotlin Native"],
    },
    {
      title: "Automation & DevOps",
      icon: <Terminal className="w-5 h-5 text-amber-500" />,
      skills: ["Web Scraping", "Puppeteer / ZenRows", "Git & GitHub", "Docker", "Linux VPS Hosted"],
    }
  ];

  // خط زمني كامل للخبرات والتدريبات المهنية من الأحدث إلى الأقدم
  const experiences = [
    {
      role: "Lead Full Stack Developer / Platform Manager",
      company: "Coinzat",
      period: "2025 - Present",
      description: "Engineering and maintaining a high-traffic e-commerce and digital financial asset ecosystem. Built secure localized custom authorization protocols, high-stakes webhook integration for TRON network payments (USDT), and structured role-based analytics dashboards.",
    },
    {
      role: "Senior Software Developer",
      company: "MNI for digital solutions",
      period: "06/2019 - Present",
      description: "Architecting tailored scalable corporate solutions, microservices, and multi-tenant database designs. Refined backend workflow pipelines and API integrations for heavy consumer interactions.",
    },
    {
      role: "Full Stack Software Developer",
      company: "Digital Order Company",
      period: "12/2018 - 06/2019",
      description: "Developed modern consumer-centric web applications, focusing on performance, modular components, and real-time state synchronization.",
    },
    {
      role: "Software Developer (Civilian Section)",
      company: "Internal Security",
      period: "01/2017 - 10/2017",
      description: "Engineered secure administrative systems and automated localized reporting structures to enhance operational velocity.",
    },
    {
      role: "Software Developer (Trainee)",
      company: "Pal Apps",
      period: "01/2017 - 05/2017",
      description: "Contributed to rapid prototyping, interactive mobile interfaces, and foundational full-stack software lifecycle methodologies.",
    }
  ];

  const projects = [
    {
      title: "Coinzat Platform",
      description: "An automated digital assets storefront and real-time gaming voucher delivery system. Packed with encrypted multi-role dashboard controls and fast financial API relays.",
      tech: ["Next.js", "Laravel", "MySQL", "Tailwind"],
      link: "https://coinzat.net"
    },
    {
      title: "Cross-Platform Desktop Client",
      description: "A secure, high-performance desktop application engineered with Electron.js, featuring real-time state synchronization, local caching, and native OS integrations.",
      tech: ["Electron.js", "TypeScript", "Node.js"],
      link: "#"
    },
    {
      title: "Stealth Python Automation Engine",
      description: "High-velocity parallel scraping and automation array scripted in Python. Engineered to bypass enterprise-grade anti-bot guardrails and handle heavy asynchronous data loads.",
      tech: ["Python", "Asyncio", "ZenRows Engine"],
      link: "#"
    }
  ];

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.2 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors duration-500 selection:bg-amber-400 selection:text-slate-950 scroll-smooth relative">
      
      {/* 🔘 الزر العائم لتبديل الثيم */}
      <div className="fixed top-6 right-6 z-50">
        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-xl bg-white dark:bg-[#131b2e] border border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-center text-slate-700 dark:text-amber-400 transition-colors duration-300"
          aria-label="Toggle Theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={darkMode ? "dark" : "light"}
              initial={{ y: -20, opacity: 0, rotate: -45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2 }}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* تأثيرات الإضاءة الخلفية الفاخرة */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/[0.03] rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/[0.02] rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* 1. SECTION: HERO */}
      <section id="im-hero" className="w-full h-screen snap-start flex flex-col justify-center items-center px-8 relative overflow-hidden shrink-0 pt-16">
        <div className="max-w-6xl w-full grid md:grid-cols-12 gap-12 items-center z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 space-y-6 text-center md:text-left"
          >
            <motion.div 
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider"
            >
              <Code2 className="w-3.5 h-3.5" /> Available for Elite Projects
            </motion.div>
            <h1 className="text-5xl font-black tracking-tight bg-gradient-to-r from-slate-950 via-slate-800 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-500 bg-clip-text text-transparent">
              Nael Al-Saqqa
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-600 dark:text-slate-400 leading-tight">
              Engineering <span className="text-slate-900 dark:text-white border-b-2 border-amber-500">Web, Mobile & Desktop</span> Ecosystems
            </h2>
            
            {/* عرض العمر والدولة والمدينة بشكل متناسق */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-sm font-mono text-slate-500 dark:text-slate-400 font-medium">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-500" /> Gaza, Palestine</span>
              <span>•</span>
              <span>{myAge} Years Old</span>
            </div>

            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-normal max-w-xl">
              Full-Stack engineer specialized in building high-availability web architectures, native Android apps, and robust desktop software via <span className="text-amber-500 font-medium">Electron.js & Python</span>.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-xl shadow-amber-500/10 transition-all text-center">
                Explore Creations
              </motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="border border-slate-300 dark:border-slate-800 font-semibold px-8 py-3.5 rounded-xl text-center">
                Lets Talk
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="md:col-span-5 flex justify-center relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <motion.div 
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-amber-500/30 p-2 bg-white dark:bg-slate-900 shadow-2xl flex-shrink-0"
            >
              <Image 
                src="/assets/hero.jpeg" 
                alt="Nael" 
                className="w-full h-full object-cover rounded-xl filter contrast-125 shadow-inner"
                width={384}
                height={384}
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block opacity-50">
          <ArrowDown className="w-6 h-6 text-amber-500" />
        </div>
      </section>

      {/* 2. SECTION: ABOUT & EDUCATION */}
      <section id="about" className="w-full h-screen snap-start flex flex-col justify-center max-w-5xl mx-auto px-8 shrink-0">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={{hidden: { opacity: 0, y: 50 },visible: {opacity: 1,y: 0,transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1]} // تأثير easeOut فخم واحترافي متوافق مع TS
    }
  }} className="space-y-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-mono text-amber-500">&lt;01. Overview /&gt;</h2>
              <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-1"></div>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-4xl">
              <p>
                I am a multi-disciplinary software engineer dedicated to building seamless digital architectures across the web, desktop, and mobile operating systems. My technical approach bridges heavy-duty backend computation with production-ready execution.
              </p>
              <p>
                Whether it’s developing custom payment handlers and automated microservices, wrapping intricate web logic into sleek cross-platform desktop apps with <span className="text-amber-500 font-semibold">Electron.js</span>, or writing high-performance data processing arrays using <span className="text-amber-500 font-semibold">Python</span>, I engineer software tailored for durability and velocity.
              </p>
            </div>
          </div>

          {/* 🎓 قسم التعليم الأكاديمي المدمج */}
          <div className="pt-4">
            <div className="flex items-center gap-3 mb-4 text-slate-800 dark:text-slate-200">
              <GraduationCap className="w-5 h-5 text-amber-500" />
              <h3 className="font-bold text-lg md:text-xl font-mono">Academic Background</h3>
            </div>
            <div className="bg-white dark:bg-[#131b2e] p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 max-w-3xl shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h4 className="font-bold text-slate-900 dark:text-white text-base md:text-lg">University College of Applied Sciences (UCAS) - Gaza</h4>
                <span className="text-xs font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded-md self-start sm:self-center">09/2015 - 07/2017</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
                Software Engineering / Applied Sciences Discipline • <span className="text-emerald-600 dark:text-emerald-400 font-semibold">GPA: 90.00%</span>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. SECTION: SKILLS */}
      <section id="skills" className="w-full h-screen snap-start flex flex-col justify-center bg-slate-100/40 dark:bg-[#0c121e]/40 border-y border-slate-200/50 dark:border-slate-900 shrink-0">
        <div className="max-w-6xl w-full mx-auto px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={{hidden: { opacity: 0, y: 50 },visible: {opacity: 1,y: 0,transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1]} // تأثير easeOut فخم واحترافي متوافق مع TS
    }
  }} className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-mono text-amber-500">&lt;02. Stack /&gt;</h2>
            <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-1"></div>
          </motion.div>

          <motion.div 
            variants={{hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {skillCategories.map((cat, i) => (
              <motion.div 
                key={i} 
                variants={{hidden: { opacity: 0, y: 50 }, visible: {opacity: 1,y: 0,transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1]} }}}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-[#131b2e] p-6 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800/80 transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-xl bg-amber-500/10">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-base">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, idx) => (
                    <span key={idx} className="bg-slate-50 dark:bg-[#1c263f] text-slate-700 dark:text-slate-300 text-xs font-mono px-2.5 py-1.5 rounded-lg border border-slate-200/40 dark:border-slate-800/40">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. SECTION: EXPERIENCE (الجدول الزمني المهني الكامل والمنسق) */}
      <section id="experience" className="w-full h-screen snap-start flex flex-col justify-center max-w-4xl mx-auto px-8 shrink-0 overflow-y-auto md:overflow-visible">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} variants={{hidden: { opacity: 0, y: 50 },visible: {opacity: 1,y: 0,transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1]} // تأثير easeOut فخم واحترافي متوافق مع TS
    }
  }} className="py-8 md:py-0">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-mono text-amber-500">&lt;03. History /&gt;</h2>
            <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-1"></div>
          </div>

          <div className="space-y-8 border-l border-slate-200 dark:border-slate-800 pl-6 md:pl-10 ml-2 relative">
            {experiences.map((exp, i) => (
              <div key={i} className="relative group">
                <div className="absolute w-3.5 h-3.5 bg-amber-500 rounded-full -left-[37px] md:-left-[53px] top-1.5 ring-4 ring-slate-50 dark:ring-[#090d16] group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-xs font-mono font-bold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-md">{exp.period}</span>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-2">{exp.role}</h3>
                <p className="text-xs font-semibold text-slate-400 mb-2 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400" /> {exp.company}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed max-w-3xl">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. SECTION: PROJECTS */}
      <section id="projects" className="w-full h-screen snap-start flex flex-col justify-center bg-slate-100/40 dark:bg-[#0c121e]/60 border-y border-slate-200/50 dark:border-slate-900 shrink-0">
        <div className="max-w-5xl w-full mx-auto px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={{hidden: { opacity: 0, y: 50 },visible: {opacity: 1,y: 0,transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1]} // تأثير easeOut فخم واحترافي متوافق مع TS
    }
  }} className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-mono text-amber-500">&lt;04. Productions /&gt;</h2>
            <div className="h-[1px] bg-slate-200 dark:bg-slate-800 flex-1"></div>
          </motion.div>

          <motion.div 
            variants={{hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {projects.map((proj, i) => (
              <motion.div 
                key={i} 
                variants={{hidden: { opacity: 0, y: 50 }, visible: {opacity: 1,y: 0,transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1]} }}}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-[#131b2e] p-6 rounded-2xl shadow-md border border-slate-200/60 dark:border-slate-800/80 flex flex-col justify-between group hover:border-amber-500/30 transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-[#1c263f] flex items-center justify-center border border-slate-200/40 dark:border-slate-800/40">
                      <Terminal className="w-5 h-5 text-amber-500" />
                    </div>
                    {proj.link !== "#" && (
                      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-400 hover:text-amber-500 hover:bg-amber-500/5 transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-500 transition-colors duration-300">{proj.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-normal">{proj.description}</p>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-1 pt-4 border-t border-slate-100 dark:border-slate-800/60 text-[11px] font-mono opacity-60">
                  {proj.tech.map((t, idx) => (
                    <span key={idx}>
                      {t} {idx < proj.tech.length - 1 && "•"}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. SECTION: CONTACT & FOOTER */}
      <section id="contact" className="w-full h-screen snap-start flex flex-col justify-between items-center px-8 relative z-10 shrink-0 pt-24 pb-8">
        <div className="my-auto max-w-3xl text-center space-y-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={{hidden: { opacity: 0, y: 50 },visible: {opacity: 1,y: 0,transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1]} }}} className="space-y-4">
            <p className="text-amber-500 font-mono text-sm font-bold">{"// Connect"}</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Initiate A Project</h2>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
              Currently accepting technical inquiries, global solutions, and full ecosystem deployments from <span className="text-amber-500 font-medium">Khan Younis, Gaza</span> to the world.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <motion.a 
              variants={{hidden: { opacity: 0, y: 50 }, visible: {opacity: 1,y: 0,transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1]} }}}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:dev.nael98@gmail.com" 
              className="flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131b2e] hover:border-amber-500 dark:hover:border-amber-500/50 hover:text-amber-600 dark:hover:text-amber-400 transition-all font-mono font-semibold text-sm shadow-sm"
            >
              <Mail className="w-4 h-4" /> Email
            </motion.a>

            <motion.a 
              variants={{hidden: { opacity: 0, y: 50 }, visible: {opacity: 1,y: 0,transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1]} }}}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://api.whatsapp.com/send?phone=972567466553"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131b2e] hover:border-emerald-500 dark:hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all font-mono font-semibold text-sm shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.288 1.498 5.342 1.499 5.543 0 10.051-4.508 10.055-10.05.002-2.685-1.04-5.208-2.936-7.105C17.215 1.597 14.69 1.554 12.01 1.554c-5.55 0-10.056 4.508-10.06 10.054-.001 2.081.547 4.11 1.588 5.877l-1.049 3.824 3.925-1.029zm13.136-7.054c-.3-.15-1.771-.874-2.046-.974-.275-.1-.475-.15-.675.15s-.575.725-.706.875c-.131.15-.262.169-.562.019-1.22-.61-2.227-1.129-3.098-2.633-.23-.397.23-.369.658-1.221.075-.15.038-.281-.019-.394-.056-.113-.475-1.144-.65-1.563-.17-.41-.356-.353-.49-.36-.12-.004-.26-.004-.39-.004-.13 0-.34.049-.52.247-.18.197-.69.675-.69 1.646 0 .971.71 1.911.81 2.049.1.139 1.396 2.132 3.383 2.992.47.205.84.326 1.12.417.47.15.9.129 1.24.08.38-.056 1.77-.725 2.02-1.388.25-.663.25-1.23.175-1.344-.07-.112-.27-.212-.57-.362z"/></svg>
              WhatsApp
            </motion.a>

            <motion.a 
              variants={{hidden: { opacity: 0, y: 50 }, visible: {opacity: 1,y: 0,transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1]} }}}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/engdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131b2e] hover:border-sky-500 dark:hover:border-sky-500/50 hover:text-sky-600 dark:hover:text-sky-400 transition-all font-mono font-semibold text-sm shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.822 1.231-.702.064-1.233-.464-1.913-.91-1.064-.698-1.666-1.132-2.698-1.811-1.193-.785-.42-1.217.26-1.921.178-.183 3.282-3.01 3.342-3.264.008-.033.014-.154-.059-.219-.073-.064-.18-.042-.258-.025-.11.024-1.861 1.18-5.253 3.464-.497.341-.948.507-1.353.498-.445-.009-1.302-.251-1.94-.458-.782-.253-1.402-.387-1.348-.817.028-.225.338-.456.929-.693 3.633-1.583 6.054-2.628 7.262-3.134 3.456-1.436 4.173-1.686 4.64-1.694.103-.002.333.023.483.145.127.103.162.247.17.356-.003.076-.001.217-.008.337z"/></svg>
              Telegram
            </motion.a>

            <motion.a 
              variants={{hidden: { opacity: 0, y: 50 }, visible: {opacity: 1,y: 0,transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1]} }}}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com/v.i0b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131b2e] hover:border-pink-500 dark:hover:border-pink-500/50 hover:text-pink-600 dark:hover:text-pink-400 transition-all font-mono font-semibold text-sm shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              Instagram
            </motion.a>
          </motion.div>
        </div>

        <footer className="w-full text-center text-xs font-mono opacity-40 border-t border-slate-200 dark:border-slate-800/60 pt-4">
          Handcrafted by Nael Al-Saqqa © {new Date().getFullYear()}
        </footer>
      </section>
    </main>
  );
}