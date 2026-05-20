"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Grid3X3, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "andreykr-theme";
const LOGO_SIZE = 64;
const FRAME_INTERVAL = 1000 / 15;

type Theme = "light" | "dark";

const navItems = [
  { label: "Works", href: "/", value: "about" },
  { label: "Media", href: "/media", value: "media" },
  { label: "Research", href: "/research", value: "research" },
] as const;

function getActiveSection(pathname: string) {
  if (pathname.startsWith("/media")) {
    return "media";
  }

  if (pathname.startsWith("/research")) {
    return "research";
  }

  return "about";
}

function addRadialGlow(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  colors: [string, string],
) {
  const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
  gradient.addColorStop(0, colors[0]);
  gradient.addColorStop(1, colors[1]);
  context.fillStyle = gradient;
  context.fillRect(0, 0, LOGO_SIZE, LOGO_SIZE);
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
}

function subscribeTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("andreykr-theme-change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("andreykr-theme-change", callback);
  };
}

function setStoredTheme(theme: Theme) {
  window.localStorage.setItem(STORAGE_KEY, theme);
  document.documentElement.classList.toggle("dark-theme", theme === "dark");
  window.dispatchEvent(new Event("andreykr-theme-change"));
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark-theme", theme === "dark");
}

function HeaderMark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    canvas.width = LOGO_SIZE;
    canvas.height = LOGO_SIZE;

    let frame = 0;
    let animationFrame = 0;
    let lastFrameTime = 0;

    const render = (time: number) => {
      animationFrame = requestAnimationFrame(render);

      if (time - lastFrameTime < FRAME_INTERVAL) {
        return;
      }

      lastFrameTime = time;
      frame += 1;

      const t = frame * 0.075;
      const horizon = Math.sin(t * 0.75) * 10;
      const tilt = Math.cos(t * 0.42) * 12;
      const cyanX = 32 + Math.cos(t * 0.82) * 15;
      const cyanY = 31 + Math.sin(t * 0.68) * 10;
      const orangeX = 34 + Math.sin(t * 0.7) * 15;
      const orangeY = 50 + Math.cos(t * 0.55) * 7;
      const pulse = Math.sin(t) * 5;

      context.clearRect(0, 0, LOGO_SIZE, LOGO_SIZE);
      context.save();
      context.beginPath();
      context.arc(LOGO_SIZE / 2, LOGO_SIZE / 2, LOGO_SIZE / 2 - 3, 0, Math.PI * 2);
      context.clip();

      const base = context.createLinearGradient(0, -8 + horizon, LOGO_SIZE, LOGO_SIZE + 8 + tilt);
      base.addColorStop(0, "#0d1737");
      base.addColorStop(0.24, "#064f91");
      base.addColorStop(0.46, "#13a8bd");
      base.addColorStop(0.62, "#dcdab8");
      base.addColorStop(0.78, "#ff7a13");
      base.addColorStop(1, "#761b14");
      context.fillStyle = base;
      context.fillRect(0, 0, LOGO_SIZE, LOGO_SIZE);

      addRadialGlow(context, cyanX, cyanY, 36 + pulse, [
        "rgba(118, 244, 235, 0.82)",
        "rgba(118, 244, 235, 0)",
      ]);
      addRadialGlow(context, orangeX, orangeY, 34 - pulse * 0.35, [
        "rgba(255, 104, 12, 0.9)",
        "rgba(255, 104, 12, 0)",
      ]);
      addRadialGlow(context, 18 + Math.cos(t * 0.5) * 8, 12, 30, [
        "rgba(5, 13, 43, 0.84)",
        "rgba(5, 13, 43, 0)",
      ]);
      addRadialGlow(context, 32 + Math.sin(t * 0.38) * 12, 41 + horizon * 0.22, 26, [
        "rgba(255, 235, 184, 0.55)",
        "rgba(255, 235, 184, 0)",
      ]);

      context.globalCompositeOperation = "screen";
      addRadialGlow(context, 30 - Math.cos(t * 0.9) * 10, 28 - Math.sin(t * 0.7) * 8, 22, [
        "rgba(255, 255, 255, 0.18)",
        "rgba(255, 255, 255, 0)",
      ]);
      context.globalCompositeOperation = "source-over";

      context.beginPath();
      context.arc(LOGO_SIZE / 2, LOGO_SIZE / 2, LOGO_SIZE / 2 - 3.5, 0, Math.PI * 2);
      context.strokeStyle = "rgba(255, 255, 255, 0.18)";
      context.lineWidth = 1;
      context.stroke();
      context.restore();
    };

    animationFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" />;
}

export function SiteHeader() {
  const pathname = usePathname();
  const activeSection = getActiveSection(pathname);
  const theme = useSyncExternalStore<Theme>(subscribeTheme, getStoredTheme, () => "light");
  const [isGridVisible, setIsGridVisible] = useState(false);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="site-header-mark" href="/" aria-label="Andrey Krylov home">
          <HeaderMark />
        </Link>

        <nav className="site-header-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              aria-current={item.value === activeSection ? "page" : undefined}
              className="site-header-nav-item"
              href={item.href}
              key={item.value}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header-actions">
          <Button
            aria-label={isGridVisible ? "Hide layout grid" : "Show layout grid"}
            aria-pressed={isGridVisible}
            className="site-header-icon-button"
            size="icon"
            type="button"
            variant="ghost"
            onClick={() => setIsGridVisible((current) => !current)}
          >
            <Grid3X3 aria-hidden="true" />
          </Button>

          <Button
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            aria-pressed={theme === "dark"}
            className="site-header-icon-button"
            size="icon"
            type="button"
            variant="ghost"
            onClick={() => setStoredTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </Button>
        </div>

        {isGridVisible ? (
          <div className="layout-grid-overlay" aria-hidden="true">
            <div>
              {Array.from({ length: 12 }, (_, index) => (
                <span key={index} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
