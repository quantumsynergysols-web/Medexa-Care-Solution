"use client";

import { useEffect } from "react";

/** Sample claim feed shown in the hero dashboard — illustrative data, not live claims. */
const FEED = [
  { t: "CLM-90412 · Blue Cross Blue Shield", s: "Paid", c: "paid" },
  { t: "CLM-90413 · Medicare", s: "Approved", c: "ok" },
  { t: "CLM-90414 · Aetna", s: "Submitted", c: "sub" },
  { t: "CLM-90415 · UnitedHealthcare", s: "Paid", c: "paid" },
  { t: "CLM-90416 · Cigna", s: "In Review", c: "rev" },
  { t: "CLM-90417 · Humana", s: "Approved", c: "ok" },
];

function formatValue(value: number, el: HTMLElement): string {
  const decimals = parseInt(el.dataset.decimals ?? "0", 10);
  let s = value.toFixed(decimals);
  if (el.dataset.format === "comma") {
    const parts = s.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    s = parts.join(".");
  }
  return s;
}

/** Home page animations: KPI counters, donut, claim pipeline, claim feed and the hero network canvas. */
export default function HomeFx() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];
    let alive = true;

    /* ---- counters + donut ---- */
    document.querySelectorAll<HTMLElement>(".count").forEach((el) => {
      const target = parseFloat(el.dataset.target ?? "0");
      if (reduced) {
        el.textContent = formatValue(target, el);
        return;
      }
      const duration = 1700;
      let start: number | null = null;
      const tick = (ts: number) => {
        if (!alive) return;
        if (start === null) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = formatValue(p < 1 ? target * eased : target, el);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    const donut = document.getElementById("donutVal");
    if (donut) {
      if (reduced) donut.style.transition = "none";
      donut.style.strokeDashoffset = String(314.16 * (1 - 0.982));
    }

    /* ---- claim pipeline ---- */
    const steps = Array.from(document.querySelectorAll<HTMLElement>("#pipeTrack .pipe-step"));
    const fill = document.getElementById("pipeFill");
    let pipeIdx = reduced ? steps.length - 1 : 0;
    const renderPipe = () => {
      steps.forEach((s, i) => {
        s.classList.toggle("done", i < pipeIdx);
        s.classList.toggle("active", i === pipeIdx);
      });
      if (fill) fill.style.width = (steps.length > 1 ? (pipeIdx / (steps.length - 1)) * 80 : 0) + "%";
    };
    renderPipe();
    if (!reduced && steps.length) {
      const timer = window.setInterval(() => {
        pipeIdx = (pipeIdx + 1) % steps.length;
        renderPipe();
      }, 1500);
      cleanups.push(() => clearInterval(timer));
    }

    /* ---- claim feed ---- */
    const feedList = document.getElementById("feedList");
    let feedStart = 0;
    const renderFeed = () => {
      if (!feedList) return;
      feedList.replaceChildren(
        ...[0, 1, 2].map((i) => {
          const item = FEED[(feedStart + i) % FEED.length];
          const li = document.createElement("li");
          const dot = document.createElement("span");
          dot.className = "f-dot";
          dot.setAttribute("aria-hidden", "true");
          const txt = document.createElement("span");
          txt.className = "f-txt";
          txt.textContent = item.t;
          const pill = document.createElement("span");
          pill.className = "pill " + item.c;
          pill.textContent = item.s;
          li.append(dot, txt, pill);
          return li;
        }),
      );
    };
    renderFeed();
    if (!reduced && feedList) {
      const timer = window.setInterval(() => {
        feedList.classList.add("fading");
        window.setTimeout(() => {
          if (!alive) return;
          feedStart = (feedStart + 1) % FEED.length;
          renderFeed();
          feedList.classList.remove("fading");
        }, 360);
      }, 3400);
      cleanups.push(() => clearInterval(timer));
    }

    /* ---- hero network canvas ---- */
    const canvas = document.getElementById("netCanvas") as HTMLCanvasElement | null;
    const ctx = canvas?.getContext("2d");
    const hero = canvas?.parentElement;
    if (canvas && ctx && hero) {
      type Node = { x: number; y: number; vx: number; vy: number; r: number };
      let nodes: Node[] = [];
      let W = 0;
      let H = 0;
      let raf = 0;
      let running = false;
      const LINK = 132;

      const draw = () => {
        ctx.clearRect(0, 0, W, H);
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i];
            const b = nodes[j];
            const d2 = (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
            if (d2 < LINK * LINK) {
              const alpha = (1 - Math.sqrt(d2) / LINK) * 0.34;
              ctx.strokeStyle = `rgba(45,212,191,${alpha.toFixed(3)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
        ctx.fillStyle = "rgba(125,211,252,.85)";
        nodes.forEach((n) => {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fill();
        });
      };
      const resize = () => {
        const rect = hero.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = rect.width;
        H = rect.height;
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const count = Math.max(24, Math.min(64, Math.floor((W * H) / 26000)));
        nodes = Array.from({ length: count }, () => ({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.32,
          vy: (Math.random() - 0.5) * 0.32,
          r: Math.random() * 1.7 + 0.8,
        }));
        draw();
      };
      const step = () => {
        nodes.forEach((n) => {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -10) n.x = W + 10;
          if (n.x > W + 10) n.x = -10;
          if (n.y < -10) n.y = H + 10;
          if (n.y > H + 10) n.y = -10;
        });
        draw();
        if (running) raf = requestAnimationFrame(step);
      };
      const start = () => {
        if (!running && !reduced && !document.hidden) {
          running = true;
          raf = requestAnimationFrame(step);
        }
      };
      const stop = () => {
        running = false;
        cancelAnimationFrame(raf);
      };

      let resizeTimer = 0;
      const onResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(resize, 180);
      };
      window.addEventListener("resize", onResize);
      resize();

      let inView = false;
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            inView = e.isIntersecting;
            if (inView) start();
            else stop();
          }),
        { threshold: 0.05 },
      );
      observer.observe(hero);
      const onVisibility = () => (document.hidden ? stop() : inView && start());
      document.addEventListener("visibilitychange", onVisibility);

      cleanups.push(() => {
        stop();
        clearTimeout(resizeTimer);
        observer.disconnect();
        window.removeEventListener("resize", onResize);
        document.removeEventListener("visibilitychange", onVisibility);
      });
    }

    return () => {
      alive = false;
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
