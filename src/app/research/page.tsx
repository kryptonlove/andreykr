import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";

const researchTitle = "Visual Research — Andrey Krylov";
const researchDescription =
  "Visual research and experiments in generative graphics, creative coding, interaction design and games.";
const coverImage = "/cover.png";

export const metadata: Metadata = {
  title: researchTitle,
  description: researchDescription,
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: researchTitle,
    description: researchDescription,
    url: "/research",
    images: [
      {
        url: coverImage,
        width: 1200,
        height: 630,
        alt: "Andrey Krylov visual research preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: researchTitle,
    description: researchDescription,
    images: [coverImage],
  },
};

const sections = [
  {
    title: "Generative graphics",
    items: [
      {
        label: "Jetlaim Audiovisual Experience",
        year: "2023",
        action: "Watch",
        href: "https://www.youtube.com/watch?v=0lWgdc8CcoA",
      },
      { label: "Everydays", year: "2022", action: "Soon" },
      { label: "p5js", year: "2022", action: "Soon" },
      { label: "Generative cinematography", year: "2022", action: "Soon" },
    ],
  },
  {
    title: "Games",
    items: [
      { 
        label: "Hip To Be Square — Browser Arcade Shooter made with ThreeJS",
        year: "2026",
        action: "Play",
        href: "https://hiptobesquare.diggle.fun/",
    },
      { 
        label: "Diggle Play — Arcade Casual Game Platform",
        year: "2026",
        action: "Play",
        href: "https://play.diggle.fun/",
      },
      { 
        label: "Slow Down — Relaxing Casual Game",
        year: "2025",
        action: "Play",
        href: "https://slowdown.diggle.fun/game/index.html",
      },
      { 
        label: "Sorbius — floating puzzle game",
        year: "2025",
        action: "Play",
        href: "https://sorbius.diggle.fun/",
      },
    ],
  },
];

const socials = [
  { label: "Twitter", href: "https://twitter.com/kryptonlove" },
  { label: "Linkedin", href: "https://www.linkedin.com/in/andrey-krylov-73790042/" },
  { label: "Figma", href: "https://www.figma.com/@kryptonlove" },
  { label: "Github", href: "https://github.com/kryptonlove" },
];

export default function ResearchPage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subheader">RESEARCH</p>
          <h1>Visual research, creative coding, and experimental interaction and game design.</h1>
          <p className="hero-description">
            A collection of exploratory projects across generative graphics, GLSL shaders, AI-assisted visuals, and interactive prototypes — focused on form, motion, systems, and human-computer interaction.
          </p>
        </div>
      </section>

      <section className="publications" aria-label="Research links">
        {sections.map((section) => (
          <article className="publications-list" key={section.title}>
            <header>
              <h2>{section.title}</h2>
            </header>
            <div className="links-list">
              {section.items.map((item) => (
                <div className="link-row" key={item.label}>
                  <p>{item.label}</p>
                  <span className="link-row-year">{item.year}</span>
                  {item.href ? (
                    <a className="external-link" href={item.href} target="_blank" rel="noreferrer">
                      {item.action}
                      <ExternalLink aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="link-row-action">{item.action}</span>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <footer className="footer" id="contact">
        <h2>Reach at</h2>
        <ul>
          {socials.map((social) => (
            <li key={social.href}>
              <a href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}
