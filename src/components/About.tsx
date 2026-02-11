import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { Code, TrendingUp, Database, BarChart3, LineChart } from "lucide-react";

const SPRING = { type: "spring", stiffness: 260, damping: 22, mass: 0.8 };

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ✅ resume-aligned skills
  const skills = useMemo(
    () => [
      { name: "SQL", icon: Database },
      { name: "Excel", icon: BarChart3 },
      { name: "Power BI", icon: LineChart },
      { name: "Tableau", icon: TrendingUp },
      { name: "Python", icon: Code },
    ],
    []
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 bg-white dark:bg-slate-950"
    >
      {/* subtle top accent */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500" />

      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.06),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.12),transparent_60%)]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 72 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 rounded-full mx-auto mb-6"
          />
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-gray-900 dark:text-slate-50 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-slate-300 text-lg">
            Turning messy data into clean insights and decisions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* LEFT: content */}
          <motion.div
            initial={{ opacity: 0, x: -36, filter: "blur(6px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                I’m <span className="font-extrabold text-gray-900 dark:text-slate-50">Sampath Kumar Talada</span>, a
                Data/Business Analyst focused on building dashboards, tracking KPIs, and delivering insights that
                support business decisions.
              </p>

              <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                Currently, I work as a{" "}
                <span className="font-extrabold text-gray-900 dark:text-slate-50">
                  Management Trainee – Data Analytics
                </span>{" "}
                at <span className="font-extrabold text-gray-900 dark:text-slate-50">Popular Motor Ventures</span>,
                where I analyze performance trends, automate reporting, and help stakeholders understand what the
                numbers are saying.
              </p>

              <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                My toolkit includes{" "}
                <span className="font-extrabold text-gray-900 dark:text-slate-50">SQL, Excel, Power BI, Tableau</span>{" "}
                and <span className="font-extrabold text-gray-900 dark:text-slate-50">Python</span> — with a strong
                focus on clean data, clear visuals, and measurable outcomes.
              </p>
            </div>

            {/* divider */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-4 pt-2"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-gray-300/80 to-transparent dark:from-slate-700/80" />
              <span className="text-sm font-extrabold text-gray-500 dark:text-slate-400">
                Core Skills
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-gray-300/80 to-transparent dark:from-slate-700/80" />
            </motion.div>

            {/* mini highlight card (premium but minimal) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-gray-800 dark:text-slate-200 font-semibold">
                I like building{" "}
                <span className="font-extrabold text-gray-900 dark:text-white">
                  KPI dashboards
                </span>{" "}
                that are simple to read, quick to act on, and easy to maintain.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: skill cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={SPRING}
                className="group relative rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-xl hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                {/* subtle hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/5 to-teal-500/5 dark:from-blue-400/10 dark:to-teal-400/10" />

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 6 }}
                    transition={SPRING}
                    className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 shadow-lg"
                  >
                    <skill.icon className="h-6 w-6 text-white" />
                  </motion.div>

                  <h3 className="text-lg font-extrabold text-gray-900 dark:text-slate-50">
                    {skill.name}
                  </h3>

                  {/* tiny progress line (simple) */}
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={isInView ? { width: "100%" } : { width: "0%" }}
                    transition={{ duration: 0.9, delay: 0.25 + index * 0.08 }}
                    className="mt-4 h-1 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500"
                  />
                </div>
              </motion.div>
            ))}

            {/* final wide card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={SPRING}
              className="group relative col-span-2 rounded-2xl overflow-hidden border border-black/5 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 p-6 shadow-lg"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400" />
              <div className="relative text-white">
                <h3 className="text-lg font-extrabold mb-2">Data Storytelling</h3>
                <p className="text-sm text-white/90 font-semibold">
                  Clear visuals + crisp takeaways for stakeholders — not just charts.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
