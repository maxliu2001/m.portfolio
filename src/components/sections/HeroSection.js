import React, { useEffect, useState } from "react";
import CursorComet from "@/components/CursorComet";
import styles from "@/styles/Home.module.css";

export default function HeroSection() {
  const [enableCursor, setEnableCursor] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateCursor = () => {
      setEnableCursor(finePointer.matches && !reducedMotion.matches);
    };

    updateCursor();
    finePointer.addEventListener("change", updateCursor);
    reducedMotion.addEventListener("change", updateCursor);

    return () => {
      finePointer.removeEventListener("change", updateCursor);
      reducedMotion.removeEventListener("change", updateCursor);
    };
  }, []);

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <CursorComet enabled={enableCursor} />
      <div className={styles.heroGlow} aria-hidden="true" />

      <div className={styles.heroContent}>
        <div className={styles.availability}>
          <span aria-hidden="true" />
          Systems, infrastructure, and product engineering
        </div>

        <p className={styles.eyebrow}>Hello, I&apos;m Max Liu.</p>
        <h1 id="hero-title" className={styles.heroTitle}>
          I build reliable systems with a playful edge.
        </h1>
        <p className={styles.heroCopy}>
          I&apos;m a systems and infrastructure software engineer at LinkedIn,
          focused on distributed systems, AI/ML infrastructure, and robotics.
        </p>

        <div className={styles.heroActions}>
          <a className={styles.primaryAction} href="#projects">
            View selected work <span aria-hidden="true">&#8594;</span>
          </a>
          <a className={styles.secondaryAction} href="#contact">
            Contact me
          </a>
        </div>

        <div className={styles.heroLinks} aria-label="Professional links">
          <a href="https://github.com/maxliu2001" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/max-liu-a7948a1ab/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <a className={styles.scrollCue} href="#about">
        <span>Scroll to explore</span>
        <span aria-hidden="true">&#8595;</span>
      </a>
    </section>
  );
}
