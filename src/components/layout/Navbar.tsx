"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  const isActiveLink = (href: string) => {
    if (pathname === "/" && href.startsWith("/#") && activeSection === href.replace("/#", "")) return true;
    return false;
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight transition-opacity hover:opacity-70 color-primary"
        >
          damixb
          <span className="color-muted">.dev</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isContact = link.href === "/#contact";

            if (isContact) {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="glass-button glass-button-primary h-9 px-5 text-sm font-medium"
                >
                  {link.label}
                  <span className="text-xs">→</span>
                </Link>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`group relative text-sm font-medium transition-colors duration-300 ${
                  isActiveLink(link.href)
                    ? "color-primary"
                    : "color-secondary hover:!color-primary"
                }`}
                style={{
                  color: isActiveLink(link.href)
                    ? "var(--text-primary)"
                    : "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  if (!isActiveLink(link.href))
                    e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  if (!isActiveLink(link.href))
                    e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1.5px] w-full origin-left transition-transform duration-300 ${
                    isActiveLink(link.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{ background: "var(--text-primary)" }}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`block h-[1.5px] w-5 rounded-full transition-all duration-300 ${
              mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
            style={{ background: "var(--text-primary)" }}
          />
          <span
            className={`block h-[1.5px] w-5 rounded-full transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
            style={{ background: "var(--text-primary)" }}
          />
          <span
            className={`block h-[1.5px] w-5 rounded-full transition-all duration-300 ${
              mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
            style={{ background: "var(--text-primary)" }}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-16 z-40 px-6 py-8 md:hidden"
            style={{
              background: "var(--mobile-overlay-bg)",
              backdropFilter: "blur(40px) saturate(180%)",
              WebkitBackdropFilter: "blur(40px) saturate(180%)",
            }}
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-2xl font-semibold transition-colors duration-300"
                  style={{
                    color: isActiveLink(link.href)
                      ? "var(--text-primary)"
                      : "var(--text-secondary)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
