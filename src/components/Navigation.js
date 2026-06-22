import { useEffect, useState } from "react";
import styles from "@/styles/NavBar.module.css";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [active, setActive] = useState("landing");

  useEffect(() => {
    const sections = ["landing", ...navItems.map(({ id }) => id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55%", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.navbar}>
      <a className={styles.brand} href="#landing" aria-label="Max Liu, back to top">
        <span>ML</span>
        <strong>Max Liu</strong>
      </a>

      <nav className={styles.navigation} aria-label="Main navigation">
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? styles.active : undefined}
            aria-current={active === id ? "page" : undefined}
          >
            {label}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
