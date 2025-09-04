import * as React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/Home.module.css";
import { Merriweather} from 'next/font/google'

export const merri = Merriweather({ subsets: ['latin'], display: 'swap', weight: ['300'] })

/* =========================
   Card data (edit here)
   ========================= */
const CARDS = [
  {
    key: "intro",
    title: "Intro",
    lines: [
      "Thanks for visiting my portfolio!",
      "I'm Max (Yinghao) Liu — an UMich Alum in CS & Data Science.",
      "Programmer, graphics designer, photographer.",
      "I believe tech brings people closer through innovation.",
    ],
  },
  {
    key: "education",
    title: "Education",
    lines: [
      "UMich — B.S. Computer Science & Data Science (2022–25)",
      "• Tau Beta Pi • Blockchain at Michigan • MChinese Business Club • MRover",
      "",
      "UCI — B.S. Honors Computer Science & Engineering (–2022)",
      "• Tau Beta Pi • New University • Honors Student Council",
    ],
  },
  {
    key: "funfacts",
    title: "Fun Facts",
    lines: [
      "Into Christopher Nolan movies",
      "Soccer and mountain biking",
      "Love reading about history",
      "Robotics enthusiast",
    ],
  },
];

/* =========================
   Animations
   ========================= */
const titleVariants = {
  initial: { opacity: 0, x: -24 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, x: -24, transition: { duration: 0.25 } },
};

const cardVariants = {
  initial: { opacity: 0, y: 14, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.25 } },
};

/* =========================
   Component
   ========================= */
export default function SwappableCards() {
  const [idx, setIdx] = React.useState(0);
  const current = CARDS[idx];

  const next = () => setIdx((i) => (i + 1) % CARDS.length);
  const prev = () => setIdx((i) => (i - 1 + CARDS.length) % CARDS.length);

  // keyboard navigation
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "280px 1fr" },
        gap: { xs: 2, md: 4 },
        alignItems: "center",
      }}
    >
      {/* Title rail on the left */}
      <Box sx={{ minHeight: 80, px: { xs: 1, md: 2 } }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            variants={titleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Typography
              variant="h4"
              className={merri.className}
              sx={{ fontWeight: 700, lineHeight: 1.2 }}
            >
              {current.title}
            </Typography>
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Card deck on the right */}
      <Box sx={{ position: "relative" }}>
        <AnimatePresence mode="wait">
          <Box
            key={current.key}
            component={motion.div}
            elevation={3}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.aboutcard}
            fontSize={{xs: "0.85em", md: "1em", lg: "1.5em"}}
            sx={{ overflow: "hidden"}}
          >
            <CardContent className={`${styles.aboutcardtxt} ${merri.className}`}>
              <Box component="ul" sx={{ m: 0, pl: "1.25rem" }}>
                {current.lines.map((line, i) =>
                  line ? (
                    <p key={i}>
                      <Typography component="span" className={merri.className}>
                        {line}
                      </Typography>
                    </p>
                  ) : (
                    <Box key={i} sx={{ height: 8 }} />
                  )
                )}
              </Box>
            </CardContent>
          </Box>
        </AnimatePresence>

        {/* Controls */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 1,
            pointerEvents: "none",
          }}
        >
          <IconButton onClick={prev} size="small" sx={{ pointerEvents: "auto" }} aria-label="previous card">
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={next} size="small" sx={{ pointerEvents: "auto" }} aria-label="next card">
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
