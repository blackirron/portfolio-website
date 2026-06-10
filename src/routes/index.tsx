import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import portraitAsset from "@/assets/samir-portrait.png.asset.json";
import bannerAsset from "@/assets/samir-banner.jpg.asset.json";
import runtimeAsset from "@/assets/project-runtime.png.asset.json";
import bistroAsset from "@/assets/project-bistro.png.asset.json";
import adrollAsset from "@/assets/project-adroll.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samir — Engineering Builder" },
      { name: "description", content: "Samir is an engineering builder shipping runtime containers, AI-powered restaurant management, and modern React applications." },
      { property: "og:title", content: "Samir — Engineering Builder" },
      { property: "og:description", content: "Runtime containers, AI restaurant management, and React apps — built end-to-end." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const projects = [
  {
    title: "Runtime Container",
    category: "infrastructure",
    year: "2025",
    image: runtimeAsset.url,
  },
  {
    title: "AI Restaurant OS",
    category: "product",
    year: "2024",
    image: bistroAsset.url,
  },
  {
    title: "React App Studio",
    category: "frontend",
    year: "2024",
    image: adrollAsset.url,
  },
  {
    title: "Edge Toolkit",
    category: "open source",
    year: "2023",
    image: runtimeAsset.url,
  },
];

const TYPEWRITER_WORDS = ["Builder", "Thinker", "Innovator"];
const TYPING_SPEED = 120;
const DELETING_SPEED = 80;
const PAUSE_MS = 2000;

function useTypewriter() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = TYPEWRITER_WORDS[wordIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), PAUSE_MS);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
    } else {
      const nextText = isDeleting
        ? currentWord.slice(0, text.length - 1)
        : currentWord.slice(0, text.length + 1);
      timer = setTimeout(
        () => setText(nextText),
        isDeleting ? DELETING_SPEED : TYPING_SPEED
      );
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((s) => !s), 530);
    return () => clearInterval(interval);
  }, []);

  return { text, showCursor };
}

function Index() {
  const { text, showCursor } = useTypewriter();
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-10 py-8">
          <a href="#top" className="text-sm font-light tracking-[0.3em] text-white">
            SAMIR
          </a>
          <ul className="hidden md:flex items-center gap-10 text-sm font-light tracking-wide text-white/90">
            <li><a href="#top" className="hover:text-white transition">Home</a></li>
            <li><a href="#work" className="hover:text-white transition">Work</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bannerAsset.url}
            alt="Samir portrait"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-[0.15em] text-white">
            SAMIR
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-light tracking-wide text-white/90">
            <span>Engineering </span>
            <span className="inline-block min-w-[9ch] text-left">{text}<span className={`transition-opacity duration-100 ${showCursor ? "opacity-100" : "opacity-0"}`}>|</span></span>
          </p>
          <p className="mt-4 text-base md:text-lg font-light leading-relaxed text-white/80 max-w-2xl">
            Shipping runtime containers, AI-powered restaurant management, and refined React applications.
          </p>
          <a
            href="#work"
            className="absolute bottom-12 flex flex-col items-center gap-2 text-white/80 hover:text-white transition"
          >
            <span className="text-xs font-light tracking-[0.3em] uppercase">Scroll</span>
            <ChevronDown className="size-5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* About blurb */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">About My Work</h2>
          <p className="text-lg font-light leading-relaxed text-muted-foreground">
            I'm Samir — an engineering builder working across the stack, from low-level
            runtime containers to AI-powered restaurant management systems and modern
            React applications. I focus on shipping resilient, end-to-end systems with
            taste and rigor.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition group"
          >
            <span>Learn More About Me</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="py-24 md:py-32 border-t border-border">
        <div className="text-center mb-16 space-y-4 px-6">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide">Featured Projects</h2>
          <p className="text-lg text-muted-foreground font-light tracking-wide">
            A selection of recent work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          {projects.map((p) => (
            <a
              key={p.title}
              href="#contact"
              className="group block relative overflow-hidden rounded-sm"
            >
              <div className="relative overflow-hidden bg-muted aspect-[3/2]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                    <h3 className="text-white text-xl md:text-2xl font-light tracking-wide">
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-white/80 font-light tracking-wide">
                      <span className="capitalize">{p.category}</span>
                      <span>•</span>
                      <span>{p.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* About full */}
      <section id="about" className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <img
              src={portraitAsset.url}
              alt="Samir"
              className="w-full aspect-square object-cover rounded-sm"
            />
          </div>
          <div className="md:col-span-7 space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide leading-tight">
              Building end-to-end systems with taste.
            </h2>
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              From runtime containers to AI agents and polished React interfaces,
              I collapse the distance between idea and shipped system. My recent
              work sits at the intersection of infrastructure and AI.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Runtime", "AI / LLM", "React", "TanStack", "TypeScript", "Postgres"].map((s) => (
                <span key={s} className="text-sm font-light tracking-wide border border-border px-3 py-1.5">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 text-center space-y-8">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-wide">
            Let's build something.
          </h2>
          <p className="text-lg font-light text-muted-foreground">
            Available for select engineering work and collaborations.
          </p>
          <a
            href="mailto:hello@samir.dev"
            className="inline-flex items-center gap-2 text-base font-light tracking-wide border border-foreground px-7 py-3.5 hover:bg-foreground hover:text-background transition"
          >
            <Mail className="size-4" /> hello@samir.dev
          </a>
          <div className="flex items-center justify-center gap-6 pt-4 text-muted-foreground">
            <a href="#" aria-label="GitHub" className="hover:text-foreground transition"><Github className="size-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition"><Linkedin className="size-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-foreground transition"><Twitter className="size-5" /></a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm font-light tracking-wide text-muted-foreground">
          <p>© {new Date().getFullYear()} Samir</p>
          <p className="tracking-[0.3em] uppercase text-xs">Engineering Builder</p>
        </div>
      </footer>
    </div>
  );
}
