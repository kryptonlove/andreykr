"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

type ProjectMediaItem = {
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

function MediaCaption({ caption }: { caption: NonNullable<ProjectMediaItem["caption"]> }) {
  return (
    <figcaption className="media-caption">
      {caption.before}
      <a href={caption.href} target="_blank" rel="noreferrer">
        {caption.linkLabel}
      </a>
      {caption.after}
    </figcaption>
  );
}

export function ProjectMedia({ item }: { item: ProjectMediaItem }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const className = [
    "media-item",
    item.variant === "phone" ? "media-item-phone" : "",
    item.wide ? "media-item-wide" : "",
    item.full ? "media-item-full" : "",
    item.sharp ? "media-item-sharp" : "",
    item.caption ? "media-item-captioned" : "",
    item.youtubeSrc && isPlaying ? "media-item-playing" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (item.youtubeSrc && isPlaying) {
    return (
      <figure className={className}>
        <iframe
          src={item.youtubeSrc}
          title={item.label}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
        {item.caption ? <MediaCaption caption={item.caption} /> : null}
      </figure>
    );
  }

  return (
    <figure className={className}>
      {item.youtubeSrc ? (
        <button
          className="media-video-trigger"
          type="button"
          aria-label={"Play " + item.label}
          onClick={() => setIsPlaying(true)}
        >
          <img src={item.src} alt={item.label} loading="lazy" />
          <span aria-hidden="true" />
        </button>
      ) : item.type === "video" ? (
        <video autoPlay muted loop playsInline aria-label={item.label}>
          <source src={item.src} type="video/mp4" />
        </video>
      ) : (
        <img src={item.src} alt={item.label} loading="lazy" />
      )}
      {item.caption ? <MediaCaption caption={item.caption} /> : null}
    </figure>
  );
}
