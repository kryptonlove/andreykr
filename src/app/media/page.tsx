import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media — Andrey Krylov",
  description: "Publications, awards, references, talks and design resources by Andrey Krylov.",
};

const sections = [
  {
    title: "Publications",
    items: [
      {
        label: "The future of fintech [RU]",
        action: "Read",
        href: "https://vc.ru/life/178184-budushchee-finteha-ili-kak-my-pobedili-na-krupneyshem-hakatone-evropy-junction-ne-vyhodya-iz-doma",
      },
      {
        label: "How NFT marketing shapes the future of metaverses",
        action: "Read",
        href: "https://medium.com/@kryptonlove/how-nft-marketing-shapes-the-future-of-metaverses-838bf9b4b2cd",
      },
      {
        label: "What is PFP NFT?",
        action: "Read",
        href: "https://medium.com/@kryptonlove/what-is-pfp-nft-f29a5278463a",
      },
      {
        label: "How to reward users with NFTs",
        action: "Read",
        href: "https://medium.com/@kryptonlove/how-to-reward-users-with-nfts-314f46f74f1e",
      },
      {
        label: "Coinbase Wallet Integration",
        action: "Read",
        href: "https://blog.linkdrop.io/enabling-token-transfers-via-links-in-coinbase-wallet-integration-9c42531c0882",
      },
    ],
  },
  {
    title: "References",
    items: [
      {
        label: "Junction 2020 ConnectedMain Prize winning team",
        action: "Watch",
        href: "https://www.youtube.com/watch?v=Zc7ce9MxTNg",
      },
      {
        label: "Effie TECH 2021. GroupM Choise, speaker [RU]",
        action: "Watch",
        href: "https://www.youtube.com/watch?v=cmHwmsOO74I",
      },
      {
        label: "CryptoLive: Design in Crypto [RU]",
        action: "Watch",
        href: "https://www.youtube.com/watch?v=92Ribi_SbaE",
      },
      {
        label: "SuperDAO: What is PFP NFT?",
        action: "Watch",
        href: "https://www.youtube.com/watch?v=f77KOb-dE6A",
      },
    ],
  },
  {
    title: "Awards",
    items: [
      {
        label: "AI Buildathon by B3 x Atari: First Place — Slow Down Game",
        action: "View",
        href: "https://x.com/b3dotfun/status/1909717697337999559",
      },
      {
        label: "Junction Hackathon Main Prize: Saavi — Healthy Finance",
        action: "View",
        href: "https://blog.hackjunction.com/the-winners-of-junction-2020-connected-2ed7333f429e",
      },
      {
        label: "Smoothie Product Awards 2nd Place: Linkdrop Dashboard",
        action: "View",
        href: "https://smoothie.so/product/nft/nft-distribution-tools/linkdrop-v2/roydxke0",
      },
    ],
  },
  {
    title: "Free Design Resources",
    items: [
      {
        label: "Metamask Browser for iOS",
        action: "Download",
        href: "https://www.figma.com/community/file/1120087846035553133",
      },
      {
        label: "Financial Icon Set",
        action: "Download",
        href: "https://thenounproject.com/browse/collection-icon/financial-icon-set-135594/?p=1",
      },
      {
        label: "Public Transport Icon Set",
        action: "Download",
        href: "https://thenounproject.com/browse/collection-icon/public-transportation-navigation-51186/?p=1",
      },
      {
        label: "Online Photobook Editor",
        action: "Download",
        href: "https://thenounproject.com/browse/collection-icon/online-photobook-editor-11110/?p=1",
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

export default function MediaPage() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <ul>
          <li><Link href="/">About</Link></li>
          <li><Link href="/media">Media</Link></li>
        </ul>
      </nav>

      <section className="hero">
        <h1>Media</h1>
        <h2>Collection of publications, awards and mentions in media</h2>
        <p>
          Participating in public talks as HCI designer with large experience in
          Product and Interaction Design, Financial Technologies and Web3
        </p>
      </section>

      <section className="publications" aria-label="Media links">
        {sections.map((section) => (
          <article className="publications-list" key={section.title}>
            <header>
              <h2>{section.title}</h2>
            </header>
            <div className="links-list">
              {section.items.map((item) => (
                <div className="link-row" key={item.href}>
                  <p>{item.label}</p>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.action}
                  </a>
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
