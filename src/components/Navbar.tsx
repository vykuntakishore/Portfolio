"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "/#about", id: "about" },
  { name: "Experience", href: "/#experience", id: "experience" },
  { name: "Projects", href: "/#projects", id: "projects" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Education", href: "/#education", id: "education" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  /*
   * Navbar scroll/background behavior
   */
  useEffect(() => {
    const handleNavbarScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleNavbarScroll();

    window.addEventListener("scroll", handleNavbarScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, []);

  /*
   * Active section tracking
   *
   * This uses actual page position instead of IntersectionObserver.
   * It is much more reliable for long portfolio sections.
   */
  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const sections = navLinks
        .map((link) => {
          const element = document.getElementById(link.id);

          if (!element) {
            return null;
          }

          return {
            id: link.id,
            element,
          };
        })
        .filter(
          (
            section
          ): section is {
            id: string;
            element: HTMLElement;
          } => section !== null
        );

      if (sections.length === 0) {
        return;
      }

      /*
       * Activation point.
       *
       * A section becomes active when its top reaches roughly
       * 30% down from the top of the browser.
       */
      const activationPoint = window.innerHeight * 0.3;

      let currentSection = sections[0].id;

      for (const section of sections) {
        const rect = section.element.getBoundingClientRect();

        if (rect.top <= activationPoint) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      /*
       * Special handling for the bottom of the page.
       * Makes Contact reliably become active.
       */
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 40;

      if (nearBottom) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    /*
     * Read the URL hash when page first loads.
     *
     * Example:
     * localhost:3000/#experience
     */
    const hash = window.location.hash.replace("#", "");

    if (navLinks.some((link) => link.id === hash)) {
      setActiveSection(hash);
    }

    /*
     * Run once immediately.
     */
    setTimeout(updateActiveSection, 100);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  /*
   * Highlight clicked link immediately.
   */
  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 shadow-[0_10px_35px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
          : "border-b border-white/[0.05] bg-black/35 backdrop-blur-xl"
      }`}
    >
      {/* Top Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4 md:px-12 lg:px-16 xl:px-20">

        {/* =====================================================
            BRAND
        ====================================================== */}

        <a
          href="/"
          className="group flex items-center gap-3"
          aria-label="Home"
        >
          {/* Status Dot */}
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute h-3 w-3 animate-ping rounded-full bg-blue-400/30" />

            <span className="relative h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.85)]" />
          </span>

          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.22em] text-white transition duration-300 group-hover:text-blue-100">
              VYKUNTA KISHORE
            </span>

            <span className="mt-0.5 hidden text-[10px] uppercase tracking-[0.22em] text-zinc-600 sm:block">
              Data Engineer
            </span>
          </div>
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {/* Background */}
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    isActive
                      ? "border border-blue-400/25 bg-blue-400/[0.08] shadow-[0_0_22px_rgba(59,130,246,0.10)]"
                      : "border border-transparent bg-transparent group-hover:border-white/10 group-hover:bg-white/[0.03]"
                  }`}
                />

                {/* Text */}
                <span className="relative z-10">
                  {link.name}
                </span>

                {/* Active Gradient Indicator */}
                <span
                  className={`absolute -bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                    isActive
                      ? "w-7 opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* =====================================================
            RIGHT ACTIONS
        ====================================================== */}

        <div className="hidden items-center gap-3 md:flex">


          {/* Connect */}
          <a
            href="/#contact"
            onClick={() => handleNavClick("contact")}
            className="rounded-full border border-purple-400/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 text-xs font-medium text-white transition duration-300 hover:scale-[1.03] hover:border-purple-400/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.12)]"
          >
            Let&apos;s Connect
          </a>

        </div>

        {/* =====================================================
            MOBILE BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition duration-300 hover:border-blue-400/30 hover:bg-blue-400/[0.05] md:hidden"
        >
          {menuOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>

      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      <div
        className={`overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          menuOpen
            ? "max-h-[650px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6">

          <div className="flex flex-col gap-2">

            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`group flex items-center justify-between rounded-2xl border px-4 py-3.5 transition duration-300 ${
                    isActive
                      ? "border-blue-400/25 bg-blue-400/[0.08] text-white"
                      : "border-transparent text-zinc-400 hover:border-white/10 hover:bg-white/[0.03] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">

                    {/* Active Dot */}
                    <span
                      className={`h-2 w-2 rounded-full transition duration-300 ${
                        isActive
                          ? "bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
                          : "bg-zinc-700"
                      }`}
                    />

                    <span className="text-base font-medium">
                      {link.name}
                    </span>

                  </div>

                  {/* Number */}
                  <span
                    className={`text-xs uppercase tracking-[0.18em] transition ${
                      isActive
                        ? "text-blue-300"
                        : "text-zinc-700 group-hover:text-zinc-500"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </a>
              );
            })}

          </div>

          {/* Mobile Buttons */}
          <div className="mt-5 grid grid-cols-2 gap-3">

            

            <a
              href="/#contact"
              onClick={() => handleNavClick("contact")}
              className="flex items-center justify-center rounded-xl border border-purple-400/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-3 text-sm font-medium text-white transition hover:border-purple-400/40"
            >
              Connect
            </a>

          </div>

        </div>
      </div>

    </nav>
  );
}