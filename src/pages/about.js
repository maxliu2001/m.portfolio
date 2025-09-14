// components/AboutPage.jsx
import * as React from "react";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import styles from "@/styles/Home.module.css";
import AboutGroup from "./components/aboutgroup";
import { Merriweather} from 'next/font/google'

export const merri = Merriweather({ subsets: ['latin'], display: 'swap', weight: ['300'] })

// Single animation used by both the header block and the bottom group
const enterAnimation = {
  hidden: {
  opacity: 0,
  y: 200,
  },
  visible: {
      y: 20,
      opacity: 1,
  transition: {
      type: 'spring',
      duration: 1.5,
  }
}}

export default function AboutPage({
  title = "About",
  avatarSrc = "myself.jpg",
  introText = `I’m Max (Yinghao) Liu, I finished my undergrad at UMich with a CS and 
  Data Science degree. I'm currently working as a sys & infra SWE @ LinkedIn. I love
  building playful UIs and rock-solid systems. I’m especially into distributed systems,
  AI/ML infra, and robotics. Outside of code: movies, biking, and chasing ambitious
  ideas with good people.`,
}) {
  return (
    <section className={styles.aboutsection} id="about">
      {/* One viewport trigger for both blocks to share the same enter animation */}
      <motion.div
        className="div-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.8 }}
      >
        {/* Title + Avatar + Intro (uses enterAnimation) */}
        <motion.div variants={enterAnimation}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            className={styles.aboutheader}
            padding={5}
          >
            <Grid xs={12}>
              <Typography
                component="h1"
                sx={{ textAlign: "center", mb: { xs: 1, md: 2 } }}
              >
                {title}
              </Typography>
            </Grid>

            {/* Avatar + Intro row */}
            <Grid xs={12}>
              <Grid
                container
                spacing={3}
                alignItems="center"
                justifyContent="center"
              >
                {/* Avatar */}
                <Grid xs={12} md="auto" padding={2} >
                  <Avatar
                    alt="Max Liu"
                    src={avatarSrc}
                    sx={{
                      width: { xs: "20vh", md: "25vh", lg: "30vh" },
                      height: { xs: "20vh", md: "25vh", lg: "30vh" },
                      mx: { xs: "auto", md: 0 },
                    }}
                    className={styles.aboutavatar}
                  />
                </Grid>

                {/* Intro text (stacks on xs, right on md+) */}
                <Grid xs={12} md padding={2} alignContent={"center"} justifyContent={"center"}>
                  <Typography
                    variant="body1"
                    className={merri.className}
                    sx={{
                      fontSize: { xs: "1rem", md: "1.1rem", lg: "1.2rem" },
                      lineHeight: 1.7,
                      maxWidth: "100%",
                      textAlign: { xs: "center", md: "left" },
                      mx: { xs: "auto", md: 0 },
                    }}
                  >
                    {introText}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
        </motion.div>

        {/* Bottom card deck/group */}
        <Grid container spacing={3} className={styles.aboutcardgroup}>
        <Grid xs={12} md={1} lg={2} />
        <Grid xs={12} md={10} lg={8}>
            <AboutGroup />
        </Grid>
        <Grid xs={12} md={1} lg={2} />
        </Grid>
    </section>
  );
}
