import { ExternalLink } from "lucide-react";
import { ProjectMedia } from "@/components/ProjectMedia";
type MediaItemData = {
  type: "image" | "video";
  src: string;
  label: string;
  caption?: {
    before?: string;
    linkLabel: string;
    href: string;
    after?: string;
  };
  variant?: "phone";
  wide?: boolean;
  full?: boolean;
  youtubeSrc?: string;
  sharp?: boolean;
};

type Project = {
  title: string;
  period: string;
  description: string;
  linkLabel: string;
  linkHref: string;
  role: string;
  responsibility?: string[];
  media: MediaItemData[];
};

const projects: Project[] = [
  {
    title: "Coinbase Wallet",
    period: "2023 — 2025",
    description:
      "Designed a feature for Coinbase Wallet that makes sending money worldwide easier, cheaper, and faster — allowing users to send funds through a simple link via their favorite messaging and social apps, with no fees and instant settlement. Available in Base App.",
    linkLabel: "Coinbase Blog",
    linkHref:
      "https://www.coinbase.com/blog/with-coinbase-wallet-sending-money-is-now-as-easy-as-sending-a-text",
    role: "Product Designer",
    responsibility: ["Rapid prototyping", "User Experience"],
    media: [
      {
        type: "video",
        src: "/coinbase-send-money-as-text.mp4",
        label: "Coinbase send money as text demo",
        full: true,
      },
    ],
  },
  {
    title: "Diggle Interactive",
    period: "2025 — Present Time",
    description:
      "Founded Diggle Interactive, an independent gaming studio building casual browser and mobile games with reward systems for Web3-native audiences. Launched from scratch in 2025 and grew to 35K+ players through onchain distribution, community campaigns, and partnerships with Coinbase and Zerion Wallet ecosystems.",
    linkLabel: "Diggle Fun",
    linkHref:
      "https://diggle.fun",
    role: "Founder",
    responsibility: ["User Experience", "Game Design"],
    media: [
      {
        type: "video",
        src: "/diggle-games-demo.mp4",
        label: "Diggle Interactive game demo",
        full: true,
        caption: {
          before: "Instant games at ",
          linkLabel: "Diggle Play",
          href: "https://play.diggle.fun/",
        },
      },
      {
        type: "video",
        src: "/hiptobesquare.mp4",
        label: "Hip To Be Square gameplay demo",
        full: true,
        caption: {
          before: "Browser shooter (desktop only) ",
          linkLabel: "Hip To Be Square",
          href: "https://hiptobesquare.diggle.fun/",
          after: " built w/ ThreeJS.",
        },
      },
    ],
  },

  {
    title: "Linkdrop",
    period: "2020 — 2025",
    description:
      "Product Design Lead at Linkdrop, a New York based startup that empowers web3 financial organizations such as Coinbase, Ledger, Zerion to onboard new crypto users to their apps.",
    linkLabel: "Linkdrop.io",
    linkHref: "https://www.linkdrop.io",
    role: "Product Designer",
    responsibility: ["Platform experience", "Design system", "Design operations"],
    media: [
      {
        type: "video",
        src: "/linkdrop-widget.mp4",
        label: "Linkdrop widget interface",
        wide: true,

      },
      {
        type: "image",
        src: "/linkdrop-dashboard-campaigns.png",
        label: "Linkdrop dashboard campaigns",
        wide: true,
        sharp: true,
      },
      {
        type: "image",
        src: "/linkdrop-dashboard-campaigns-details.png",
        label: "Linkdrop dashboard campaign details",
        wide: true,
        sharp: true,

      },
    ],
  },
  {
    title: "Ledger x Satisfy",
    period: "2021",
    description:
      "Satisfy's next forward-looking initiative takes the brand into the nebulous realm of NFTs, organically introducing the collectible conceit to its audience through an extension of Satisfy x Runners World collaboration.",
    linkLabel: "Highsnobiety",
    linkHref:
      "https://www.highsnobiety.com/p/satisfy-runners-world-nft/",
    role: "Experience Designer",
    media: [
      {
        type: "image",
        src: "https://cdn.prod.website-files.com/65961abb715913f363c9cb99/675bf7b05b6d42dadfc96c6d_ledger-satify.png",
        label: "Ledger x Satisfy campaign preview",
        full: true,
        youtubeSrc: "https://www.youtube.com/embed/ixDtj-KxAtY?autoplay=1&start=148",
      },
    ],
  },
  {
    title: "Saavi Finance",
    period: "2021",
    description:
      "Development of a digital interface using Apple ARKit, leveraging physical credit card interactions in real life, created during the Junction 2020 hackathon.",
    linkLabel: "Github",
    linkHref: "https://github.com/azimin/MoneyMustBeFunnyAkaJunction2020Backup",
    role: "Experience Designer",
    media: [
      {
        type: "video",
        src: "https://cdn.jsdelivr.net/gh/kryptonlove/content/ar-demo_01.3-after-effects-optimized.mp4",
        label: "Saavi Finance AR demo",
        full: true,
      },
    ],
  },
];

const socials = [
  { label: "Twitter", href: "https://twitter.com/kryptonlove" },
  { label: "Linkedin", href: "https://www.linkedin.com/in/kryptonlove" },
  { label: "Figma", href: "https://www.figma.com/@kryptonlove" },
  { label: "Github", href: "https://github.com/kryptonlove" },
];


function ProjectMeta({ project }: { project: Project }) {
  return (
    <dl className="project-meta">
      <div>
        <dt>Link</dt>
        <dd>
          <a className="external-link" href={project.linkHref} target="_blank" rel="noreferrer">
            {project.linkLabel}
            <ExternalLink aria-hidden="true" />
          </a>
        </dd>
      </div>
      <div>
        <dt>Role</dt>
        <dd>{project.role}</dd>
      </div>
      {project.responsibility ? (
        <div>
          <dt>Responsibility</dt>
          <dd>{project.responsibility.join(", ")}</dd>
        </div>
      ) : null}
    </dl>
  );
}

export default function Home() {
  return (
    <main>

      <section className="hero" id="about">
        <div className="hero-content">
          <p className="hero-subheader">ANDREY KRYLOV</p>
          <h1>Designing systems, human-computer interactions, and product experiences.</h1>
          <p className="hero-description">
            Product designer with 10+ years of experience building consumer, fintech, gaming, Web3, and AI-powered products — from early concepts and prototypes to production-ready user experiences.
          </p>
          <p className="hero-description hero-ai-setup">
            Current AI setup: GPT-5.5 + Images 2.0 + Figma & Mobbin MCP via Codex App, ElevenLabs for SFX
          </p>
        </div>
      </section>

      <section className="section-heading" id="works" aria-label="Works">
        <p>Selected Works</p>
      </section>

      <div className="projects">
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <header className="project-header">
              <div className="project-title-block">
                <p>{project.period}</p>
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <ProjectMeta project={project} />
            </header>

            <div className="media-grid">
              {project.media.map((item) => (
                <ProjectMedia item={item} key={item.src} />
              ))}
            </div>
          </article>
        ))}
      </div>

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
