import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Users, ChevronRight } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      type: "work",
      icon: Briefcase,
      title: "Management Trainee – Data Analytics",
      organization: "POPULAR MOTOR VENTURES",
      period: "Aug 2025 – Present",
      description:
        "Collected, cleaned, and analyzed operational and business data across sourcing, operations, and fleet management teams. Built KPI dashboards and structured Excel reports to support data-driven decisions.",
      highlights: [
        "Collected, cleaned, and analyzed data across multiple business teams",
        "Created structured Excel reports and dashboards to track KPIs and performance trends",
        "Tracked operational efficiency and performance metrics for business visibility",
        "Collaborated with business teams to gather requirements and deliver insights",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "B.Tech in Computer Science and Engineering",
      organization: "Indian Institute of Information Technology, Sri City",
      period: "2021 – 2025",
      description: "CGPA: 6.96 • Coursework includes DBMS, Probability & Statistics, OS, DSA, Basic ML Algorithms.",
      highlights: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Probability and Statistics",
        "Operating System",
        "Basic ML Algorithms",
      ],
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      type: "achievement",
      icon: Award,
      title: "Certifications & Training",
      organization: "Simplilearn • Microsoft • Deloitte • Power BI Workshop",
      period: "2024 – 2025",
      description:
        "Completed certifications and training programs focused on data analytics tools, Excel, and dashboarding.",
      highlights: [
        "Data Analytics Course Certification – Simplilearn",
        "Microsoft Office Specialist Certification in Excel",
        "Deloitte Data Analytics Virtual Program",
        "Power BI Workshop (data modeling + dashboard creation)",
      ],
      gradient: "from-amber-500 to-orange-500",
    },
    {
      type: "leadership",
      icon: Users,
      title: "Leadership & Responsibility",
      organization: "IIIT Sri City",
      period: "2021 – 2025",
      description:
        "Led and supported student activities through event coordination and community service programs.",
      highlights: [
        "Club Lead, Dance Club: Coordinated 15+ events, engaging 200+ audience members",
        "Volunteer, NSS: Participated in and managed social outreach programs",
      ],
      gradient: "from-fuchsia-500 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.12),transparent_70%)]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mx-auto mb-6"
          />
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-gray-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Based on my resume — experience, education, certifications, and leadership.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto relative"
        >
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-teal-500 to-pink-500 hidden lg:block" />

          {timeline.map((item) => (
            <motion.div key={item.title} variants={itemVariants} className="relative mb-12 last:mb-0">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Icon */}
                <div className="lg:w-20 flex justify-start lg:justify-center">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 8 }}
                    transition={{ duration: 0.25 }}
                    className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg z-10`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 bg-white/85 backdrop-blur
                             dark:bg-white/5 dark:border-white/10"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700 dark:text-slate-200">
                        {item.organization}
                      </p>
                    </div>

                    <span className="px-4 py-2 rounded-full text-sm font-bold border border-gray-200 bg-gray-50 text-gray-700
                                     dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-3">
                    {item.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -12 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.25 + idx * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <ChevronRight className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700 dark:text-slate-200">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : { width: 0 }}
                    transition={{ delay: 0.35, duration: 0.8 }}
                    className={`h-1 bg-gradient-to-r ${item.gradient} rounded-full mt-6`}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
