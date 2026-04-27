import { useEffect, useState } from "react";
import { PROJECTS } from "./data/projects.js";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function App() {
  const [dark, setDark] = useState(true);
  const [contactNote, setContactNote] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const handleContact = (e) => {
    e.preventDefault();
    setContactNote("Thanks — this demo does not send email. Wire this form to your API or form provider when you ship.");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#" className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Devfolio One
          </a>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="transition hover:text-cyan-600 dark:hover:text-cyan-400">
                {n.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setDark((d) => !d)}
            className="border-2 border-slate-900 bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-800 transition hover:bg-cyan-400 dark:border-white dark:bg-slate-950 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-950"
            aria-label="Toggle color theme"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <main>
        <section className="border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-50 py-16 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">Portfolio template · fictional brand</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Minimal portfolio for developers who want clarity, not clutter.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-slate-600 dark:text-slate-400">
              Devfolio One is a sellable-looking template demo: dark-first layout, optional light mode, and sections buyers expect on Fiverr.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex border-2 border-cyan-400 bg-cyan-400 px-7 py-3 text-xs font-black uppercase tracking-[0.2em] text-slate-950 shadow-[6px_6px_0_0_#0f172a] transition hover:-translate-y-0.5 dark:shadow-[6px_6px_0_0_#ffffff]"
              >
                View work
              </a>
              <a
                href="#contact"
                className="inline-flex border-2 border-slate-900 bg-white px-7 py-3 text-xs font-black uppercase tracking-[0.2em] text-slate-900 transition hover:bg-slate-100 dark:border-white dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
              >
                Hire me
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">About</h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400">
                I&apos;m a placeholder persona for this template — swap in your bio, location, and availability. The tone is
                intentionally neutral so you can brand it for dev or design clients.
              </p>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Smooth-scroll anchors are wired through the top nav; theme preference toggles a `dark` class on the document root.
              </p>
            </div>
            <div className="border-2 border-slate-900 bg-white p-6 dark:border-white dark:bg-slate-900">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-gradient-to-br from-cyan-400 to-slate-700 shadow-[4px_4px_0_0_#0f172a] dark:shadow-[4px_4px_0_0_#ffffff]" />
                <div>
                  <p className="font-display text-lg font-bold text-slate-900 dark:text-white">Jordan Avery</p>
                  <p className="text-sm text-cyan-700 dark:text-cyan-400">Full-stack · UI polish</p>
                </div>
              </div>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase text-slate-400">Location</dt>
                  <dd className="font-medium text-slate-800 dark:text-slate-200">Remote (demo)</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase text-slate-400">Focus</dt>
                  <dd className="font-medium text-slate-800 dark:text-slate-200">Web apps</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-20 border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900/40 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Skills</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {["React", "Vite", "Tailwind CSS", "Accessibility", "Design systems", "Prototyping", "Node.js", "REST APIs"].map(
                (s) => (
                  <span
                    key={s}
                    className="border border-slate-900 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-slate-800 transition hover:bg-cyan-400 hover:text-slate-950 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-slate-950"
                  >
                    {s}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Projects</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Cards pull from a local mock array — replace with your case studies.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {PROJECTS.map((p, i) => (
                <article
                  key={p.id}
                  className={`group flex flex-col border-2 border-slate-900 bg-white p-5 transition hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#22d3ee] dark:border-slate-700 dark:bg-slate-900 dark:hover:shadow-[8px_8px_0_0_#06b6d4] ${
                    i === 1 ? "md:translate-y-8" : ""
                  }`}
                >
                  <div className="mb-4 h-28 bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-700" />
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-400">{p.role}</p>
                  <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">{p.desc}</p>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-slate-500">{p.stack}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 border-y border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-950/50 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Experience</h2>
            <ol className="relative mt-10 space-y-8 border-l border-slate-200 pl-8 dark:border-slate-800">
              {[
                { year: "2024 — Present", title: "Senior frontend (fictional)", org: "Nimbus Labs", text: "Led UI refresh for a B2B dashboard used by 2k+ teams (demo stat)." },
                { year: "2021 — 2024", title: "Product engineer", org: "Harbor Studio", text: "Shipped marketing sites and component libraries for agency clients." },
                { year: "2019 — 2021", title: "Junior developer", org: "Pixel & Co.", text: "WordPress → React migrations and performance passes." },
              ].map((x) => (
                <li key={x.title} className="relative">
                  <span className="absolute -left-[39px] mt-1.5 h-3 w-3 rounded-full border-2 border-cyan-500 bg-white dark:bg-slate-950" />
                  <p className="text-xs font-bold uppercase tracking-wide text-cyan-700 dark:text-cyan-400">{x.year}</p>
                  <p className="mt-1 font-display text-lg font-bold text-slate-900 dark:text-white">{x.title}</p>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{x.org}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{x.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="services" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Services</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { title: "Landing pages", price: "From $450 (demo)", detail: "Hero, sections, responsive handoff in React." },
                { title: "Design to code", price: "From $900 (demo)", detail: "Figma → pixel-faithful components with Tailwind." },
                { title: "Audit & polish", price: "From $300 (demo)", detail: "Accessibility sweep and performance quick wins." },
              ].map((s) => (
                <div key={s.title} className="border-2 border-slate-900 bg-white p-6 dark:border-slate-600 dark:bg-slate-900">
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-cyan-700 dark:text-cyan-400">{s.price}</p>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900/30 sm:py-20">
          <div className="mx-auto max-w-lg px-4 sm:px-6">
            <h2 className="text-center font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Contact</h2>
            <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">Form UI only — submit shows an inline message.</p>
            {contactNote ? (
              <p className="mt-6 rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-3 text-center text-sm font-medium text-cyan-900 dark:border-cyan-900/50 dark:bg-cyan-950/40 dark:text-cyan-100">
                {contactNote}
              </p>
            ) : (
              <form onSubmit={handleContact} className="mt-8 space-y-4 border-2 border-slate-900 bg-white p-5 dark:border-white dark:bg-slate-950">
                <input required placeholder="Name" className="w-full border-2 border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-white" />
                <input required type="email" placeholder="Email" className="w-full border-2 border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-white" />
                <textarea required rows={4} placeholder="Project details" className="w-full border-2 border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-white" />
                <button
                  type="submit"
                  className="w-full border-2 border-slate-900 bg-slate-900 py-3 text-xs font-black uppercase tracking-widest text-white transition hover:bg-cyan-400 hover:text-slate-950 dark:border-cyan-400 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-white"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:text-left sm:px-6">
          <p className="font-display font-bold text-slate-800 dark:text-white">Devfolio One</p>
          <p>© {new Date().getFullYear()} Frontend demo — not a real agency.</p>
        </div>
      </footer>
    </div>
  );
}
