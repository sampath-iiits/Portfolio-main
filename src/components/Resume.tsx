import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText, Linkedin, Github, Eye } from "lucide-react";

const SPRING = { type: "spring", stiffness: 260, damping: 22, mass: 0.8 };

// ✅ Google Drive Resume Links
const RESUME_VIEW =
  "https://drive.google.com/file/d/11mvyD7MnAjOrROpEh06IfAVODNNzOhEE/view?usp=sharing";
const RESUME_DOWNLOAD =
  "https://drive.google.com/uc?export=download&id=11mvyD7MnAjOrROpEh06IfAVODNNzOhEE";

const GITHUB_URL = "https://github.com/sampath-iiits";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/talada-sampath-kumar-685187260/";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: LINKEDIN_URL,
      gradient: "from-blue-600 to-blue-700",
      description: "Connect on LinkedIn",
    },
    {
      name: "GitHub",
      icon: Github,
      url: GITHUB_URL,
      gradient: "from-slate-800 to-slate-950",
      description: "View projects & code",
    },
  ];

  return (
    <section
      id="resume"
      className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.06),transparent_55%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.12),transparent_60%)]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 70 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mx-auto mb-6"
          />
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Resume & Links
          </h2>
          <p className="text-gray-600 dark:text-slate-300 text-lg">
            Download my resume or connect with me.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Card */}
          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
            animate={
              isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}
            }
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl p-8 lg:p-12 border shadow-2xl overflow-hidden
              bg-white/80 dark:bg-white/5 backdrop-blur-xl
              border-black/5 dark:border-white/10 mb-12"
          >
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-[52rem] rounded-full bg-gradient-to-r from-blue-500/15 via-cyan-500/10 to-teal-500/15 blur-3xl" />

            <div className="relative flex flex-col lg:flex-row items-center gap-8">
              {/* Thumbnail */}
              <motion.a
                href={RESUME_VIEW}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                transition={SPRING}
                className="group w-48 h-64 rounded-2xl border border-black/10 dark:border-white/10
                  bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950
                  shadow-lg overflow-hidden relative flex items-center justify-center"
                aria-label="Preview resume"
                title="Preview resume"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/15 to-teal-500/10" />
                <FileText className="w-16 h-16 text-slate-400 group-hover:text-slate-600 dark:text-slate-400 dark:group-hover:text-slate-200 transition-colors relative z-10" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="rounded-xl bg-black/70 text-white text-xs font-bold px-3 py-2 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" /> Preview
                  </div>
                </div>
              </motion.a>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-3">
                  Sampath Kumar — Resume
                </h3>
                <p className="text-gray-600 dark:text-slate-300 mb-7 leading-relaxed">
                  PDF version of my resume with skills, experience, and projects.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {/* Download */}
                  <motion.a
                    href={RESUME_DOWNLOAD}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={SPRING}
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-extrabold text-white
                      bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg hover:shadow-2xl"
                  >
                    <motion.span
                      animate={{ y: [0, 2, 0] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="inline-flex"
                    >
                      <Download className="w-5 h-5" />
                    </motion.span>
                    Download PDF
                  </motion.a>

                  {/* Preview */}
                  <motion.a
                    href={RESUME_VIEW}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={SPRING}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-extrabold
                      bg-white/80 dark:bg-white/5 border border-black/10 dark:border-white/10
                      text-gray-900 dark:text-white shadow-lg hover:shadow-2xl backdrop-blur"
                  >
                    <Eye className="w-5 h-5" />
                    Preview
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <div className="grid md:grid-cols-2 gap-6">
            {links.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                className="group relative rounded-2xl p-6 border shadow-lg hover:shadow-2xl transition
                  bg-white/80 dark:bg-white/5 backdrop-blur-xl
                  border-black/5 dark:border-white/10 overflow-hidden"
              >
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${link.gradient}`}
                />

                <div className="relative flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.03 }}
                    transition={SPRING}
                    className={`w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-md bg-gradient-to-br ${link.gradient}`}
                  >
                    <link.icon className="w-7 h-7" />
                  </motion.div>

                  <div className="flex-1">
                    <h4 className="text-xl font-black text-gray-900 dark:text-white mb-1">
                      {link.name}
                    </h4>
                    <p className="text-gray-600 dark:text-slate-300 text-sm font-medium">
                      {link.description}
                    </p>
                  </div>

                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-gray-400 dark:text-slate-400 group-hover:text-gray-700 dark:group-hover:text-slate-200"
                  >
                    →
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
