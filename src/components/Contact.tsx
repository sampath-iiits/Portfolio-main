import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { Mail, Send, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";

const SPRING = { type: "spring", stiffness: 260, damping: 22, mass: 0.8 };

function getEnv(key: string) {
  // Works for Vite (import.meta.env) AND Next.js (process.env)
  // @ts-ignore
  return (typeof import.meta !== "undefined" && import.meta.env?.[key]) || process.env[key];
}

const SERVICE_ID =
  getEnv("VITE_EMAILJS_SERVICE_ID") || getEnv("NEXT_PUBLIC_EMAILJS_SERVICE_ID");
const TEMPLATE_ID =
  getEnv("VITE_EMAILJS_TEMPLATE_ID") || getEnv("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID");
const PUBLIC_KEY =
  getEnv("VITE_EMAILJS_PUBLIC_KEY") || getEnv("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY");

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // ✅ Your real links
  const LINKS = useMemo(
    () => ({
      email: "sampathtalada@gmail.com",
      linkedin: "https://www.linkedin.com/in/talada-sampath-kumar-685187260/",
      github: "https://github.com/sampath-iiits",
    }),
    []
  );

  const socialLinks = useMemo(
    () => [
      { icon: Linkedin, label: "LinkedIn", href: LINKS.linkedin },
      { icon: Github, label: "GitHub", href: LINKS.github },
      { icon: Mail, label: "Email", href: `mailto:${LINKS.email}` },
    ],
    [LINKS]
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    // Ensure env is present
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("Missing EmailJS env vars:", { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY });
      setStatus("error");
      return;
    }

    try {
      setIsSending(true);

      // IMPORTANT:
      // Your EmailJS template must contain matching variables:
      // {{from_name}}, {{reply_to}}, {{message}}
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS send error:", err);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-gray-50 to-white dark:from-slate-950 dark:to-slate-950"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.14),transparent_70%)]" />

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
            Let’s Connect
          </h2>
          <p className="text-gray-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Interested in dashboards, KPI reporting, or data analysis support? Send a message — I’ll respond quickly.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -36, filter: "blur(6px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-slate-50">
                Get in touch
              </h3>
              <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                I’m open to Data / Business Analyst opportunities and analytics collaborations — especially dashboarding,
                reporting, and business insights work.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-extrabold text-gray-900 dark:text-slate-50 mb-4">
                Social
              </h4>

              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.25 + idx * 0.08, duration: 0.35 }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="h-12 w-12 rounded-2xl border border-black/5 bg-white/70 shadow-sm backdrop-blur-xl grid place-items-center text-gray-700 hover:text-blue-600 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-teal-300"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="rounded-2xl border border-black/5 bg-gradient-to-br from-blue-50 to-teal-50 p-6 text-gray-700 shadow-sm dark:border-white/10 dark:from-white/5 dark:to-white/5 dark:text-slate-200"
            >
              <p className="font-semibold italic">
                “Available for full-time roles and analytics projects — dashboards, KPIs, reporting.”
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 36, filter: "blur(6px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-black/5 bg-white/70 p-8 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-extrabold text-gray-700 dark:text-slate-200 mb-2">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    onFocus={() => setFocusedInput("name")}
                    onBlur={() => setFocusedInput(null)}
                    animate={{ scale: focusedInput === "name" ? 1.01 : 1 }}
                    transition={{ duration: 0.18 }}
                    className="w-full rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500/60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-teal-400/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-extrabold text-gray-700 dark:text-slate-200 mb-2">
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    onFocus={() => setFocusedInput("email")}
                    onBlur={() => setFocusedInput(null)}
                    animate={{ scale: focusedInput === "email" ? 1.01 : 1 }}
                    transition={{ duration: 0.18 }}
                    className="w-full rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500/60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-teal-400/50"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-extrabold text-gray-700 dark:text-slate-200 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    onFocus={() => setFocusedInput("message")}
                    onBlur={() => setFocusedInput(null)}
                    animate={{ scale: focusedInput === "message" ? 1.01 : 1 }}
                    transition={{ duration: 0.18 }}
                    rows={6}
                    className="w-full resize-none rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-gray-900 shadow-sm outline-none transition focus:ring-2 focus:ring-blue-500/60 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:ring-teal-400/50"
                    placeholder="Tell me about the role / project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  transition={SPRING}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 py-4 font-extrabold text-white shadow-[0_20px_60px_-30px_rgba(59,130,246,0.55)] disabled:opacity-70"
                >
                  <span>{isSending ? "Sending..." : "Send Message"}</span>
                  <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </motion.button>

                {status === "success" && (
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 text-center">
                    Message sent successfully ✅
                  </p>
                )}

                {status === "error" && (
                  <p className="text-sm font-semibold text-rose-600 dark:text-rose-400 text-center">
                    Please fill all fields (or check EmailJS env + template variables).
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
