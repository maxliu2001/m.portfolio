// components/CursorComet.jsx
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

function CursorComet({ enabled = true }) {
  const [mounted, setMounted] = useState(false);
  const portalElRef = useRef(null);

  // motion values for cursor
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 400, damping: 30 });
  const sy = useSpring(y, { stiffness: 400, damping: 30 });

  // internal trail buffer (ref -> no parent re-renders)
  const trailRef = useRef([]); // [{x,y,t}]
  const [tick, setTick] = useState(0); // minimal state to trigger child-only renders

  const TAIL = 20;           // length of tail
  const MIN_DIST = 2;        // only add point if moved at least this many px
  const SAMPLE_MS = 16;      // ~60fps

  useEffect(() => {
    if (!enabled) return;
    // initialize at center
    x.set(window.innerWidth / 2);
    y.set(window.innerHeight / 2);

    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, x, y]);

  useEffect(() => {
    if (!enabled) return;

    let raf = 0;
    let lastT = performance.now();

    const loop = (now) => {
      if (now - lastT >= SAMPLE_MS) {
        lastT = now;
        const px = sx.get();
        const py = sy.get();

        const arr = trailRef.current;
        const last = arr[arr.length - 1];

        if (!last || Math.hypot(px - last.x, py - last.y) >= MIN_DIST) {
          arr.push({ x: px, y: py, t: now });
          if (arr.length > TAIL) arr.shift();
          setTick((n) => (n + 1) % 1000);
        }
      }

      // Remove old points to fade the tail away when not moving
      const arr = trailRef.current;
      const FADE_MS = 100; // tail fade duration in ms
      const nowTime = performance.now();
      if (arr.length > 0 && nowTime - arr[0].t > FADE_MS) {
        arr.shift();
        setTick((n) => (n + 1) % 1000);
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [enabled, sx, sy]);

  // mount portal container once on client
  useEffect(() => {
    setMounted(true);
    const el = document.createElement("div");
    el.style.position = "fixed";
    el.style.inset = "0";
    el.style.pointerEvents = "none";
    el.style.zIndex = "30";
    portalElRef.current = el;
    document.body.appendChild(el);
    return () => {
      if (portalElRef.current) document.body.removeChild(portalElRef.current);
    };
  }, []);

  if (!enabled || !mounted || !portalElRef.current) return null;

  const trail = trailRef.current;

  return ReactDOM.createPortal(
    <>
      {/* Head (glowing dot) */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: sx,
          y: sy,
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: "radial-gradient(circle, #39ff14 0%, #22cc11 70%)",
          boxShadow: "0 0 30px #39ff14, 0 0 60px #39ff14",
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
        }}
      />

      {/* Blaze lines (bright, long, tapered) */}
      {trail.slice(0, -1).map((p, i) => {
        const n = trail[i + 1];
        if (!n) return null;
        const dx = n.x - p.x;
        const dy = n.y - p.y;
        const dist = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);

        // slow fade & taper
        const t = i / (Math.max(trail.length - 1, 1)); // 0 -> near head, 1 -> tail end
        const opacity = 0.95 - t * 0.7;                // stays bright longer
        const thickness = 5 - t * 2.5;                 // taper slowly
        const blur = 0.5 + t * 2.5;                    // more blur deeper in tail

        // vivid neon-ish ramp for dark bg
        const r = Math.round(90 + t * 70);
        const g = 255;
        const b = Math.round(50 + t * 80);

        return (
          <div
            key={`${p.t}-${i}`}
            style={{
              position: "fixed",
              top: p.y,
              left: p.x,
              width: dist,
              height: thickness,
              transformOrigin: "left center",
              transform: `rotate(${angle}rad)`,
              background: `rgba(${r},${g},${b},${opacity})`,
              boxShadow: `0 0 14px rgba(${r},${g},${b},${opacity})`,
              filter: `blur(${blur}px)`,
              pointerEvents: "none",
            }}
          />
        );
      })}
    </>,
    portalElRef.current
  );
}

export default React.memo(CursorComet);
