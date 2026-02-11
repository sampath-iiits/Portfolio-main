import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { Database, BarChart3, Layers, FileSpreadsheet, Code2, LineChart } from "lucide-react";

const SPRING = { type: "spring", stiffness: 260, damping: 22, mass: 0.8 };

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ✅ Resume-aligned categories (kept your structure, cleaned only what’s needed)
  const skillCategories = useMemo(
    () => [
      {
        category: "Analytics & BI",
        icon: BarChart3,
        color: "from-blue-600 to-cyan-500",
        skills: [
          { name: "Power BI (DAX)", level: 90 },
          { name: "Tableau", level: 82 },
          { name: "KPI Reporting", level: 88 },
        ],
      },
      {
        category: "Data Analysis",
        icon: Database,
        color: "from-teal-600 to-emerald-500",
        skills: [
          { name: "SQL", level: 95 },
          { name: "Excel (Power Query)", level: 92 },
          { name: "Data Cleaning", level: 90 },
        ],
      },
      {
        category: "Tools & Workflow",
        icon: Layers,
        color: "from-indigo-600 to-purple-500",
        skills: [
          { name: "Python", level: 80 },
          { name: "Git", level: 78 },
          { name: "Documentation", level: 85 },
        ],
      },
    ],
    []
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.14 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 34, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-950"
    >
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.06),transparent_55%)] dark:bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_55%)]" />

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
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Practical tools I use for dashboards, KPI tracking, reporting, and insights.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={SPRING}
              className="group relative rounded-3xl border border-black/5 bg-white/70 p-8 shadow-lg backdrop-blur-xl hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              {/* subtle hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/5 to-teal-500/5 dark:from-blue-400/10 dark:to-teal-400/10" />

              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.04 }}
                  transition={SPRING}
                  className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${category.color} mb-6 grid place-items-center shadow-lg`}
                >
                  <category.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-extrabold text-gray-900 dark:text-slate-50 mb-6">
                  {category.category}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-gray-700 dark:text-slate-200">
                          {skill.name}
                        </span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ delay: 0.35 + idx * 0.15 + skillIdx * 0.08 }}
                          className="text-sm font-extrabold text-gray-500 dark:text-slate-400"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      <div className="relative h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: 0.35 + idx * 0.15 + skillIdx * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${category.color}`}
                        >
                          {/* subtle shimmer */}
                          <motion.div
                            animate={{ opacity: [0.35, 0.8, 0.35] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-white/25"
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* small index badge (kept, made dark-safe) */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
                transition={{ delay: 0.55 + idx * 0.1, duration: 0.35 }}
                className={`absolute -top-3 -right-3 h-12 w-12 rounded-full bg-gradient-to-br ${category.color} grid place-items-center text-white font-extrabold text-lg shadow-lg`}
              >
                {idx + 1}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stats: keep it realistic (no inflated numbers) */}
        <motion.div
          initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-3xl border border-black/5 bg-white/70 px-10 py-7 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-3">
              <FileSpreadsheet className="h-6 w-6 text-blue-600 dark:text-cyan-300" />
              <div className="text-left">
                <div className="text-2xl font-black text-gray-900 dark:text-slate-50">Dashboards</div>
                <div className="text-sm font-semibold text-gray-600 dark:text-slate-300">Power BI / Tableau</div>
              </div>
            </div>

            <div className="hidden md:block h-12 w-px bg-gray-200 dark:bg-white/10" />

            <div className="flex items-center gap-3">
              <Code2 className="h-6 w-6 text-teal-600 dark:text-emerald-300" />
              <div className="text-left">
                <div className="text-2xl font-black text-gray-900 dark:text-slate-50">SQL</div>
                <div className="text-sm font-semibold text-gray-600 dark:text-slate-300">Queries • Joins • KPIs</div>
              </div>
            </div>

            <div className="hidden md:block h-12 w-px bg-gray-200 dark:bg-white/10" />

            <div className="flex items-center gap-3">
              <LineChart className="h-6 w-6 text-indigo-600 dark:text-purple-300" />
              <div className="text-left">
                <div className="text-2xl font-black text-gray-900 dark:text-slate-50">Insights</div>
                <div className="text-sm font-semibold text-gray-600 dark:text-slate-300">Trends • Forecasts</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
