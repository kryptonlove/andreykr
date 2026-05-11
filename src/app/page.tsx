import Link from "next/link";
import { ProjectMedia } from "@/components/ProjectMedia";
type MediaItemData = {
  type: "image" | "video";
  src: string;
  label: string;
  variant?: "phone";
  wide?: boolean;
  full?: boolean;
  youtubeSrc?: string;
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
      "Designed a feature for Coinbase Wallet that makes sending money worldwide easier, cheaper, and faster — allowing users to send funds through a simple link via their favorite messaging and social apps, with no fees and instant settlement. Available in Base App.",
    linkLabel: "Coinbase Blog",
    linkHref:
      "https://www.coinbase.com/blog/with-coinbase-wallet-sending-money-is-now-as-easy-as-sending-a-text",
    role: "Product Designer",
    responsibility: ["Rapid prototyping", "User Design Experience"],
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
    title: "Linkdrop",
    period: "2020 — 2024",
    description:
      "Product Design Lead at Linkdrop, a New York based startup that empowers web3 financial organizations such as Coinbase, Ledger, Zerion to onboard new crypto users to their apps.",
    linkLabel: "Linkdrop.io",
    linkHref: "https://www.linkdrop.io",
    role: "Product Designer",
    responsibility: ["Platform experience", "Design system", "Design operations"],
    media: [
      {
        type: "video",
        src: "https://cdn.jsdelivr.net/gh/kryptonlove/content/sender_iphone_mask2-optimized.mp4",
        label: "Linkdrop mobile sender flow",
        variant: "phone",
        wide: true,

      },
      {
        type: "image",
        src: "https://cdn.prod.website-files.com/65961abb715913f363c9cb99/6597a3034db848d776b507bf_widget.png",
        label: "Linkdrop widget interface",
        wide: true,

      },
      {
        type: "image",
        src: "https://cdn.prod.website-files.com/65961abb715913f363c9cb99/6596856c4442d2b3999472db_Frame%201547765941.png",
        label: "Linkdrop platform screens",
        wide: true,
      },
      {
        type: "image",
        src: "https://cdn.prod.website-files.com/65961abb715913f363c9cb99/6597af8f909e422694644f3c_dark_dashboard.png",
        label: "Linkdrop dashboard",
        wide: true,

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
        youtubeSrc: "https://www.youtube.com/embed/ixDtj-KxAtY?autoplay=1",
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
          <a href={project.linkHref} target="_blank" rel="noreferrer">
            {project.linkLabel}
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
      <nav className="site-nav" aria-label="Primary navigation">
        <ul>
          <li><Link href="/">About</Link></li>
          <li><Link href="/media">Media</Link></li>
        </ul>
      </nav>

      <section className="hero" id="about">
        <h1>Andrey Krylov</h1>
        <h2>
          Designing systems, human-computer interactions, and product experiences.
        </h2>
        <p>
          Product designer with 10+ years of experience building consumer,
          fintech, gaming and web3 products — from early concepts
          and prototypes to production-ready user experiences.
        </p>
      </section>

      <section className="section-heading" id="works" aria-labelledby="works-title">
        <p>Works</p>
        <h2 id="works-title">Highlights</h2>
      </section>

      <div className="projects">
        {projects.map((project) => (
          <article className="project" key={project.title}>
            <header className="project-header">
              <div>
                <h3>{project.title}</h3>
                <p>{project.period}</p>
              </div>
              <p>{project.description}</p>
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
