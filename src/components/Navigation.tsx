import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // theme state (default set after mount for SSR safety)
  const [theme, setTheme] = useState<Theme>("light");

  const { scrollY } = useScroll();

  // Framer Motion transforms for background/blur (kept as-is)
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]);
  const darkBackgroundColor = useTransform(scrollY, [0, 100], ["rgba(17, 24, 39, 0)", "rgba(17, 24, 39, 0.92)"]);
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);

  const navItems = useMemo(
    () => [
      { name: "Home", href: "#" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
      { name: "Contact", href: "#contact" },
    ],
    []
  );

  // Apply theme to <html> and persist
  const applyTheme = (t: Theme) => {
    const root = document.documentElement;
    if (t === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  // Init theme + scroll listener
  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme | null) ?? null;
    if (saved === "light" || saved === "dark") {
      applyTheme(saved);
    } else {
      const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
      applyTheme(prefersDark ? "dark" : "light");
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close menu on escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleTheme = () => applyTheme(theme === "dark" ? "light" : "dark");

  const scrollToSection = (href: string) => {
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    else {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        style={{
          backgroundColor: theme === "dark" ? darkBackgroundColor : backgroundColor,
          backdropFilter: backdropBlur as unknown as string,
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          isScrolled ? "shadow-lg shadow-black/5 dark:shadow-black/30" : ""
        }`}
      >
        {/* subtle border line = premium feel */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />

        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 cursor-pointer select-none"
              onClick={() => scrollToSection("#")}
            >
              <motion.div
                whileHover={{ rotate: 3, scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold text-lg">SK</span>
              </motion.div>

              <div className="leading-tight">
                <span className="block font-extrabold text-[17px] text-gray-900 dark:text-gray-100">
                  Sampath Kumar Talada
                </span>
                <span className="hidden sm:block text-xs font-medium text-gray-600 dark:text-gray-300">
                  Data/Business Analyst • SQL • Power BI • Excel
                </span>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1 rounded-2xl border border-black/5 bg-white/60 px-2 py-2 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-teal-300 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-white/10 transition-all duration-300"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <motion.button
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={toggleTheme}
                className="p-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                aria-label="Toggle theme"
                title="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("#contact")}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-extrabold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Hire Me
              </motion.button>
            </div>

            {/* Mobile Buttons */}
            <div className="md:hidden flex items-center gap-2">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={toggleTheme}
                className="p-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                aria-label="Toggle theme"
                title="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="p-2 rounded-xl text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
                title="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : -16,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-20 left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg"
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item, idx) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -16 }}
                animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                transition={{ delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left px-4 py-3 text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-teal-300 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-white/10 transition-all duration-300"
              >
                {item.name}
              </motion.button>
            ))}

            <motion.button
              initial={{ opacity: 0, x: -16 }}
              animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{ delay: navItems.length * 0.04, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => scrollToSection("#contact")}
              className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-extrabold shadow-lg"
            >
              Contact Me
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Click-away overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.18 }}
        onClick={() => setMobileMenuOpen(false)}
        className="fixed inset-0 z-30 md:hidden bg-black/10 dark:bg-black/40"
      />
    </>
  );
};

export default Navigation;
