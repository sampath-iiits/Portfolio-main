import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Download, ArrowRight, Mail, Github, Linkedin } from "lucide-react";

/**
 * ✅ Photo:
 * Put your image at: /public/profile.jpg
 * (You already have it in public ✅)
 *
 * ✅ Resume (Drive):
 * This uses a direct download link so it works everywhere.
 */

const SPRING = { type: "spring", stiffness: 260, damping: 22, mass: 0.8 };

const Hero = () => {
  const photoRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);

  // Minimal GSAP: photo float + background drift
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (photoRef.current) {
        gsap.to(photoRef.current, {
          y: -10,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (bgRef.current) {
        gsap.to(bgRef.current, {
          backgroundPosition: "100% 50%",
          duration: 18,
          repeat: -1,
          yoyo: true,
          ease: "none",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const photo = {
    hidden: { opacity: 0, scale: 0.94, x: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ✅ Your real URLs
  const LINKS = {
    // direct download link (works better than /view)
    resume: "https://drive.google.com/uc?export=download&id=11mvyD7MnAjOrROpEh06IfAVODNNzOhEE",
    linkedin: "https://www.linkedin.com/in/talada-sampath-kumar-685187260/",
    github: "https://github.com/sampath-iiits",
    email: "mailto:sampathtalada@gmail.com",
    photo: "/public/profile.jpg", // ✅ public/profile.jpg
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-950">
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{ backgroundSize: "220% 220%", backgroundPosition: "0% 50%" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />
      </div>

      {/* Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 h-64 w-[62rem] rounded-full bg-gradient-to-r from-blue-500/12 via-cyan-500/10 to-teal-500/12 blur-3xl dark:from-blue-400/12 dark:via-cyan-400/10 dark:to-teal-400/12" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(20,184,166,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_75%_75%,rgba(20,184,166,0.16),transparent_55%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="space-y-9"
          >
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-4 py-2 text-sm font-extrabold text-slate-800 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-100">
                Open to Data / Business Analyst Roles
              </span>
              <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                Popular Motor Ventures • Aug 2025 – Present
              </span>
            </motion.div>

            <motion.div variants={item} className="space-y-5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 86 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="h-1.5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500"
              />
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 dark:text-slate-50 leading-[1.03]">
                Turning{" "}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  Data
                </span>{" "}
                into Business Decisions
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                <span className="font-extrabold text-slate-800 dark:text-slate-100">
                  Sampath Kumar Talada
                </span>{" "}
                — Data/Business Analyst • SQL • Power BI • Excel • Python
              </p>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-2">
              {[
                "KPI Dashboards",
                "Data Cleaning",
                "Reporting",
                "Excel (Power Query)",
                "Power BI (DAX)",
                "SQL Analysis",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/5 bg-white/60 px-3 py-1.5 text-sm font-bold text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={SPRING}
                onClick={() => scrollToSection("projects")}
                className="group relative overflow-hidden rounded-full px-8 py-4 font-extrabold text-white shadow-[0_18px_60px_-25px_rgba(59,130,246,0.55)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500" />
                <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400" />
                <span className="relative inline-flex items-center gap-2">
                  View Projects
                  <motion.span whileHover={{ x: 2 }} transition={SPRING} className="inline-flex">
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
              </motion.button>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={SPRING}
                href={LINKS.resume}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/70 px-8 py-4 font-extrabold text-slate-900 shadow-sm backdrop-blur hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-50 dark:hover:bg-white/10"
              >
                Download Resume
                <motion.span
                  className="inline-flex"
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Download className="w-5 h-5" />
                </motion.span>
              </motion.a>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-3 pt-1">
              {[
                { name: "LinkedIn", icon: Linkedin, href: LINKS.linkedin },
                { name: "GitHub", icon: Github, href: LINKS.github },
                { name: "Email", icon: Mail, href: LINKS.email },
              ].map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={SPRING}
                  className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/60 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  <s.icon className="h-4 w-4 opacity-80" />
                  {s.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT (Photo) */}
          <motion.div
            variants={photo}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <div ref={photoRef} className="relative group">
              <div className="absolute inset-0 -z-10 rounded-[999px] bg-gradient-to-r from-blue-500/30 via-cyan-500/20 to-teal-500/30 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                className="absolute -inset-4 rounded-full border border-blue-500/15 dark:border-cyan-400/15"
                animate={{ scale: [1, 1.06, 1], opacity: [0.45, 0.2, 0.45] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative w-72 h-72 lg:w-[26rem] lg:h-[26rem] rounded-full p-[10px] bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-[0_40px_120px_-65px_rgba(0,0,0,0.55)]">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <motion.div
                    className="pointer-events-none absolute -left-1/2 top-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10"
                    animate={{ x: ["-18%", "18%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transform: "skewX(-18deg)" }}
                  />

                  {/* ✅ YOUR PHOTO */}
                  {!imgError ? (
                    <img
                      src={LINKS.photo}
                      alt="Sampath Kumar Talada"
                      className="w-full h-full object-cover"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-200 via-teal-100 to-blue-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center">
                      <div className="text-center text-slate-700 dark:text-slate-200">
                        <div className="text-6xl mb-4">👤</div>
                        <p className="text-sm font-extrabold">Photo not found</p>
                        <p className="text-xs opacity-80 mt-1">Check /public/profile.jpg</p>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 dark:to-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ ...SPRING, delay: 0.5 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl border border-black/5 bg-white/75 px-4 py-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-xs font-extrabold text-slate-900 dark:text-slate-50">
                  Excel + Power BI Dashboards
                </p>
                <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                  KPI Tracking • Reporting • Insights
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-11 rounded-full border border-slate-400/60 dark:border-slate-500/60 flex justify-center pt-2 backdrop-blur"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-slate-500/70 dark:bg-slate-300/70 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
