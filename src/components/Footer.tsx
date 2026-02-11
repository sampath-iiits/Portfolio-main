import { motion } from "framer-motion";
import { Heart, Github, Linkedin, ArrowUpRight } from "lucide-react";

const SPRING = { type: "spring", stiffness: 260, damping: 22, mass: 0.8 };

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/sampath-iiits",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/talada-sampath-kumar-685187260/",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-slate-950 border-t border-black/5 dark:border-white/10">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-[56rem] rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 blur-3xl dark:from-blue-400/12 dark:via-cyan-400/10 dark:to-teal-400/12" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Sampath Kumar
            </h3>
            <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
              Data Analyst • Dashboards • Insights
            </p>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex items-center gap-3"
          >
            {socials.map((s) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={SPRING}
                className="group inline-flex items-center gap-2 rounded-xl border border-black/5 bg-white/70 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm backdrop-blur hover:shadow-md
                           dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                <s.icon className="h-4 w-4 opacity-80 group-hover:opacity-100" />
                {s.name}
                <ArrowUpRight className="h-4 w-4 opacity-40 group-hover:opacity-70" />
              </motion.a>
            ))}
          </motion.div>

          {/* Made with */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-2"
          >
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.18, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
            </motion.span>
            <span>React</span>
          </motion.div>
        </div>

        {/* divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-10 h-px origin-left bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-white/15"
        />

        {/* copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400"
        >
          © {currentYear} Sampath Kumar. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
