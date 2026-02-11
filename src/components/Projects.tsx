import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
  Activity,
  Github,
} from "lucide-react";

const GITHUB_USERNAME = "sampath-iiits";
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;

type Metric = {
  label: string;
  value: string;
  icon: React.ElementType;
};

type FeaturedProject = {
  title: string;
  description: string;
  problem: string;
  metrics: Metric[];
  tools: string[];
  gradient: string;
  link: string;
};

const Projects = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  /* ================= FEATURED ================= */
  const featuredProjects: FeaturedProject[] = [
    {
      title: "Ferns & Petals – Ecommerce Sales Analysis",
      description:
        "Excel & Power BI dashboard analyzing revenue trends, product performance, and seasonal demand.",
      problem:
        "Business needed visibility into revenue drivers and seasonal patterns to optimize inventory.",
      metrics: [
        { label: "Revenue Analyzed", value: "₹35+ Lakh", icon: DollarSign },
        { label: "KPIs", value: "12+", icon: Activity },
        { label: "Period", value: "12 Months", icon: Calendar },
      ],
      tools: ["Excel", "Power BI", "Data Visualization"],
      gradient: "from-rose-500 to-pink-500",
      link: `${GITHUB_PROFILE_URL}/FNP---Ecommerce-Sales-Analysis`,
    },
    {
      title: "Customer Shopping Behavior Analysis",
      description: "Customer segmentation and behavior analysis using Python notebooks.",
      problem: "Understand purchase behavior and identify actionable customer segments.",
      metrics: [
        { label: "Customers", value: "10K+", icon: Users },
        { label: "Segments", value: "8", icon: Activity },
        { label: "Insights", value: "Actionable", icon: TrendingUp },
      ],
      tools: ["Python", "Jupyter Notebook"],
      gradient: "from-blue-500 to-cyan-500",
      link: `${GITHUB_PROFILE_URL}/CSB---Analysis`,
    },
    {
      title: "Healthcare Analytics Dashboard",
      description: "Dashboard visualizing healthcare KPIs and operational metrics.",
      problem: "Convert raw healthcare data into insights for better decision-making.",
      metrics: [
        { label: "Records", value: "2K+", icon: Users },
        { label: "Visuals", value: "15+", icon: TrendingUp },
        { label: "KPIs", value: "Key", icon: Activity },
      ],
      tools: ["Power BI", "SQL"],
      gradient: "from-teal-500 to-emerald-500",
      link: `${GITHUB_PROFILE_URL}/Healthcare-Project-Management`,
    },
  ];

  /* ================= ALL REPOS ================= */
  const githubRepos = [
    "CSB---Analysis",
    "FNP---Ecommerce-Sales-Analysis",
    "Signals-HQ",
    "Social-Media-Influencer-Engagement-Analysis",
    "Smart-Reconciliation-Visualizer",
    "StoreAdmin-Catalog-Inventory-Portal",
    "Healthcare-Project-Management",
    "Movie-Recommendation-App",
    "Personal-Portfolio",
    "HomeopathyWebsite",
    "Call_Centre_Dashboard",
    "Chocolate_Business_Report",
    "E-Motorad",
    "Food-Website",
    "Flappy-Bird-Game",
    "GymWebsite",
    "life_line",
    "Portfolio",
    "CBTCIP",
    "ToDo-List",
    "Weather-ForeCast-App",
    "Live-Code-Editor",
    "E-Commerce-Website",
    "Spell-Checker-and-Suggestion-App",
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="
        py-24 relative
        bg-white
        dark:bg-[#050b18]
      "
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">
            Projects
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Featured analytics work + all GitHub repositories
          </p>

          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex mt-6 items-center gap-2 px-6 py-3 rounded-full font-extrabold
              bg-slate-900 text-white hover:bg-slate-800
              dark:bg-[#111827] dark:hover:bg-[#1e293b]
            "
          >
            <Github className="w-5 h-5" />
            View GitHub Profile
          </a>
        </motion.div>

        {/* FEATURED PROJECTS */}
        <div className="space-y-10 max-w-5xl mx-auto mb-20">
          {featuredProjects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 22 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="
                rounded-3xl border shadow-xl
                bg-white
                border-black/5
                dark:bg-[#0b1220]
                dark:border-[#1e293b]
              "
            >
              <div className="p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row gap-6 justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-slate-600 dark:text-slate-300">
                      {p.description}
                    </p>

                    <div className="
                      mt-4 p-4 rounded-2xl
                      bg-slate-50 border border-black/5
                      dark:bg-[#111827] dark:border-[#1e293b]
                    ">
                      <p className="text-sm font-extrabold text-slate-600 dark:text-slate-400">
                        Problem
                      </p>
                      <p className="text-slate-700 dark:text-slate-200">
                        {p.problem}
                      </p>
                    </div>
                  </div>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`
                      inline-flex items-center gap-2 px-6 py-3 h-fit rounded-xl
                      font-extrabold text-white
                      bg-gradient-to-r ${p.gradient}
                    `}
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Metrics */}
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  {p.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="
                        rounded-2xl p-4 text-center
                        bg-slate-50 border border-black/5
                        dark:bg-[#111827] dark:border-[#1e293b]
                      "
                    >
                      <m.icon className="w-6 h-6 mx-auto mb-2 text-slate-500 dark:text-slate-300" />
                      <div className="font-black text-xl text-slate-900 dark:text-white">
                        {m.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="
                        px-4 py-2 rounded-full text-sm font-extrabold
                        bg-slate-100 border border-black/5
                        dark:bg-[#111827] dark:border-[#1e293b] dark:text-slate-200
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ALL REPOS */}
        <div>
          <h3 className="text-3xl font-black text-center mb-8 text-slate-900 dark:text-white">
            All GitHub Projects
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {githubRepos.map((repo, idx) => (
              <motion.a
                key={repo}
                href={`${GITHUB_PROFILE_URL}/${repo}`}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.03 }}
                className="
                  rounded-2xl p-6 border
                  bg-white border-black/5
                  dark:bg-[#0b1220] dark:border-[#1e293b]
                  hover:dark:bg-[#111827]
                "
              >
                <div className="flex justify-between">
                  <h4 className="font-black text-slate-900 dark:text-white">
                    {repo}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  View repository on GitHub
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
