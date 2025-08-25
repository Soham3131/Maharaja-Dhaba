import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Specialities", href: "#specialities" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-6 pt-3">
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-lg">
          <div className="flex h-16 items-center justify-between px-4 text-white">
            {/* Brand */}
            <a
              href="#home"
              className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent tracking-wide"
            >
              Maharaja Dhaba
            </a>

            {/* Desktop menu */}
            <nav className="hidden md:flex items-center gap-8 text-[17px] font-medium">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="relative transition-colors hover:text-yellow-400 group"
                >
                  {l.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-400 transition-all group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-500/90 px-4 py-2 font-semibold text-black hover:bg-yellow-500"
              >
                <Phone size={16} /> Book a Table
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden rounded-lg p-2 hover:bg-white/10"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile (tap to close) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="md:hidden absolute left-0 right-0 z-50 mx-auto max-w-7xl px-6"
          >
            <div className="mt-2 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl p-6 text-white shadow-2xl">
              <div className="space-y-4 text-lg">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="block rounded-lg px-3 py-2 hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-yellow-500 px-4 py-3 font-semibold text-black hover:bg-yellow-400"
                  onClick={() => setOpen(false)}
                >
                  <Phone size={18} /> Book a Table
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
