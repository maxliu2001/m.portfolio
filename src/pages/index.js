import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/Navigation";
import ContactLinks from "@/components/ContactLinks";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Max Liu — Systems & Infrastructure Engineer</title>
        <meta name="description" content="Max Liu is a systems and infrastructure engineer building reliable distributed systems, AI/ML infrastructure, and robotics projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b0d0c" />
      </Head>

      <main className={styles.main} id="landing">
        <Navigation />
        <HeroSection />

        <section className={styles.aboutSection} id="about" aria-label="About Max Liu">
          <AboutSection />
        </section>

        <section className={styles.projectSection} id="projects" aria-label="Selected projects">
          <ProjectsSection />
        </section>

        <section className={styles.contactSection} id="contact" aria-labelledby="contact-title">
          <div className={styles.sectionInner}>
            <div className={styles.contactLayout}>
              <div className={styles.sectionIntro}>
                <p className={styles.sectionLabel}>03 / Contact</p>
                <h2 id="contact-title">Let&apos;s build something useful.</h2>
                <p>
                  I&apos;m always interested in thoughtful conversations about systems,
                  infrastructure, robotics, and ambitious technical ideas.
                </p>
              </div>
              <ContactLinks />
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <span>&copy; {new Date().getFullYear()} Max Liu</span>
          <a href="#landing">Back to top &#8593;</a>
        </footer>
      </main>
    </>
  );
}
