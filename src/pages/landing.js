// pages/Landing.jsx (or components/Landing.jsx)
import React, { useEffect, useState } from "react";
import Typewriter from "./components/typewriter";
import CursorComet from "./components/cursorcomet";
import styles from "@/styles/Home.module.css";

function isMobileUA() {
  if (typeof navigator === "undefined") return false;
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export default function Landing() {
  const [enableCursor, setEnableCursor] = useState(false);

  useEffect(() => {
    setEnableCursor(!isMobileUA());
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {/* Drawn in a portal; never captures pointer events; isolated from layout */}
      <CursorComet enabled={enableCursor} />

      <section className={styles.header}>
        <Typewriter
          words={[
            "Hey! I'm Max",
            "A builder with passion",
            "Welcome to my website",
          ]}
        />
      </section>
    </div>
  );
}
