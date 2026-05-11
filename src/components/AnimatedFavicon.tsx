"use client";

import { useEffect } from "react";

const SIZE = 64;
const FRAME_INTERVAL = 1000 / 15;

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
  context.fillRect(0, 0, SIZE, SIZE);
}

function getOrCreateFavicon() {
  document
    .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
    .forEach((node) => node.remove());

  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.type = "image/png";
  favicon.sizes = "64x64";
  document.head.appendChild(favicon);

  return favicon;
}

export function AnimatedFavicon() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    canvas.width = SIZE;
    canvas.height = SIZE;

    const favicon = getOrCreateFavicon();

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

      context.clearRect(0, 0, SIZE, SIZE);
      context.save();
      context.beginPath();
      context.arc(SIZE / 2, SIZE / 2, SIZE / 2 - 3, 0, Math.PI * 2);
      context.clip();

      const base = context.createLinearGradient(
        0,
        -8 + horizon,
        SIZE,
        SIZE + 8 + tilt,
      );
      base.addColorStop(0, "#0d1737");
      base.addColorStop(0.24, "#064f91");
      base.addColorStop(0.46, "#13a8bd");
      base.addColorStop(0.62, "#dcdab8");
      base.addColorStop(0.78, "#ff7a13");
      base.addColorStop(1, "#761b14");
      context.fillStyle = base;
      context.fillRect(0, 0, SIZE, SIZE);

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
      context.arc(SIZE / 2, SIZE / 2, SIZE / 2 - 3.5, 0, Math.PI * 2);
      context.strokeStyle = "rgba(255, 255, 255, 0.18)";
      context.lineWidth = 1;
      context.stroke();
      context.restore();

      favicon.href = canvas.toDataURL("image/png");
    };

    animationFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return null;
}
