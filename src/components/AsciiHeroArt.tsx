"use client";

import { useEffect, useRef, useState } from "react";

// Static baseline frame for SSR and static fallback
const STATIC_FALLBACK = [
  "       +---------------+",
  "      /|              /|",
  "     / |             / |",
  "    *--+------------*  |",
  "    |  |   [sqly]   |  |",
  "    |  |  4KB page  |  |",
  "    |  |            |  |",
  "    |  +------------+--+",
  "    | /   raycaster | /",
  "    |/     cube3D   |/",
  "    *---------------+",
  "    [sys::event_loop:ok]",
].join("\n");

export default function AsciiHeroArt() {
  const [frame, setFrame] = useState(STATIC_FALLBACK);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    // Respect reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsPlaying(false);
      return;
    }

    // Pause when offscreen using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // 3D Wireframe Cube to 2D Character Grid Projection
    let angleA = 0.4;
    let angleB = 0.5;
    let angleC = 0.1;
    let animId: number;
    let lastTime = performance.now();

    // 8 vertices of a cube centered at origin
    const vertices = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1],
    ];

    // 12 edges connecting vertex pairs
    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // back face
      [4, 5], [5, 6], [6, 7], [7, 4], // front face
      [0, 4], [1, 5], [2, 6], [3, 7], // connecting edges
    ];

    const width = 36;
    const height = 16;

    const render = (now: number) => {
      if (!isPlaying || !isVisibleRef.current) {
        animId = requestAnimationFrame(render);
        return;
      }

      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // Slow restrained rotation
      angleA += 0.35 * delta;
      angleB += 0.45 * delta;
      angleC += 0.15 * delta;

      const sinA = Math.sin(angleA);
      const cosA = Math.cos(angleA);
      const sinB = Math.sin(angleB);
      const cosB = Math.cos(angleB);
      const sinC = Math.sin(angleC);
      const cosC = Math.cos(angleC);

      // Rotate and project vertices
      const projected = vertices.map(([x, y, z]) => {
        // Rotation around X, Y, Z
        const y1 = y * cosA - z * sinA;
        const z1 = y * sinA + z * cosA;

        const x2 = x * cosB + z1 * sinB;
        const z2 = -x * sinB + z1 * cosB;

        const x3 = x2 * cosC - y1 * sinC;
        const y3 = x2 * sinC + y1 * cosC;

        // Perspective division
        const distance = 3.2;
        const ooz = 1 / (z2 + distance);
        const xp = Math.floor(width / 2 + x3 * ooz * 34);
        const yp = Math.floor(height / 2 + y3 * ooz * 18);

        return { x: xp, y: yp, z: z2 };
      });

      // Prepare 2D character buffer
      const grid: string[][] = Array.from({ length: height }, () =>
        Array.from({ length: width }, () => " ")
      );

      // Bresenham line drawer on character grid
      const drawLine = (x0: number, y0: number, x1: number, y1: number, char: string) => {
        const dx = Math.abs(x1 - x0);
        const dy = Math.abs(y1 - y0);
        const sx = x0 < x1 ? 1 : -1;
        const sy = y0 < y1 ? 1 : -1;
        let err = dx - dy;

        let curX = x0;
        let curY = y0;

        while (true) {
          if (curX >= 0 && curX < width && curY >= 0 && curY < height) {
            if (grid[curY][curX] === " ") {
              grid[curY][curX] = char;
            }
          }
          if (curX === x1 && curY === y1) break;
          const e2 = 2 * err;
          if (e2 > -dy) {
            err -= dy;
            curX += sx;
          }
          if (e2 < dx) {
            err += dx;
            curY += sy;
          }
        }
      };

      // Draw wireframe edges
      edges.forEach(([i, j], edgeIdx) => {
        const p0 = projected[i];
        const p1 = projected[j];
        // Select edge glyph based on slope/depth
        const glyphs = ["·", "•", "-", "/", "|", "\\", "+"];
        const glyph = edgeIdx % 2 === 0 ? "+" : "·";
        drawLine(p0.x, p0.y, p1.x, p1.y, glyph);
      });

      // Mark vertices with focal nodes
      projected.forEach((p) => {
        if (p.x >= 0 && p.x < width && p.y >= 0 && p.y < height) {
          grid[p.y][p.x] = "o";
        }
      });

      // Internal storage page motif labels at center
      const label = "sqly::page";
      const startX = Math.floor((width - label.length) / 2);
      const startY = Math.floor(height / 2);
      if (startY >= 0 && startY < height) {
        for (let k = 0; k < label.length; k++) {
          if (startX + k >= 0 && startX + k < width) {
            grid[startY][startX + k] = label[k];
          }
        }
      }

      setFrame(grid.map((row) => row.join("")).join("\n"));
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, [isPlaying]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-start bg-bg-surface border border-border p-4 rounded-sm font-mono text-xs text-fg-muted select-none w-full max-w-[360px] overflow-hidden"
    >
      <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-border/60 text-[11px] text-fg-dim">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>system::wireframe_projection</span>
        </span>
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause 3D ASCII animation" : "Resume 3D ASCII animation"}
          className="text-fg-muted hover:text-accent hover:border-accent border border-border/80 px-1.5 py-0.5 rounded text-[10px] transition-colors"
        >
          {isPlaying ? "[ pause ]" : "[ play ]"}
        </button>
      </div>

      {/* Screen-reader accessible announcement */}
      <span className="sr-only">
        Interactive 3D wireframe cube rotating in ASCII character art, symbolizing systems programming, raycasting, and database page mechanics.
      </span>

      {/* True character-grid ASCII preformatted block */}
      <pre
        aria-hidden="true"
        className="text-[11px] leading-[13px] text-accent font-mono overflow-hidden mx-auto h-[210px] flex items-center justify-center tracking-tighter"
      >
        {frame}
      </pre>

      <div className="w-full pt-2 mt-2 border-t border-border/40 flex items-center justify-between text-[10px] text-fg-dim">
        <span>dim: 36x16 chars</span>
        <span>motif: raycast_b-tree</span>
      </div>
    </div>
  );
}
