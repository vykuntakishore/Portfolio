import {
  ArrowUp,
  Mail,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden px-6 pb-8 pt-6 md:px-12 lg:px-20">

      {/* Soft top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

      <div className="mx-auto max-w-7xl">

        <div className="rounded-[1.75rem] border border-white/[0.07] bg-[#070a0f]/65 px-6 py-7 backdrop-blur-md md:px-8">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            {/* ===============================
                BRAND
            =============================== */}

            <div>

              <div className="flex items-center gap-3">

                <span className="relative flex h-2.5 w-2.5 items-center justify-center">

                  <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-blue-400/25" />

                  <span className="relative h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.7)]" />

                </span>

                <p className="text-sm font-semibold tracking-[0.18em] text-white">
                  VYKUNTA KISHORE
                </p>

              </div>

              <p className="mt-2 text-sm text-zinc-500">
                Data Engineer · Data Analyst · Snowflake · Databricks · AWS
              </p>

            </div>

            {/* ===============================
                ACTIONS
            =============================== */}

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

              {/* Social Icons */}
              <div className="flex items-center gap-3">

                <a
                  href="https://www.linkedin.com/in/vykunta-kishore-67ba79402"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-zinc-500 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:text-blue-300"
                >
                  <FaLinkedinIn size={18} />
                </a>

                <a
                  href="mailto:vykuntakishore@gmail.com"
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-zinc-500 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  <Mail size={18} />
                </a>

                <a
                  href="https://github.com/harikishoreabbina"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-zinc-500 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:text-purple-300"
                >
                  <FaGithub size={19} />
                </a>

              </div>

              {/* Divider */}
              <span className="hidden h-6 w-px bg-white/10 sm:block" />

              {/* Copyright */}
              <p className="text-sm text-zinc-600">
                © 2026 Vykunta Kishore
              </p>

              {/* Back To Top */}
              <a
                href="#home"
                aria-label="Back to top"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-zinc-500 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/[0.04] hover:text-blue-300"
              >
                <ArrowUp size={18} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom line */}
        <p className="mt-5 text-center text-[11px] uppercase tracking-[0.18em] text-zinc-700">
          Built with Next.js · TypeScript · Tailwind CSS
        </p>

      </div>

    </footer>
  );
}