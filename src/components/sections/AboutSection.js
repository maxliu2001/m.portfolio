import { motion } from "framer-motion";
import styles from "@/styles/Home.module.css";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const interests = ["Distributed systems", "AI/ML infrastructure", "Robotics", "Playful interfaces"];

export default function AboutSection() {
  return (
    <div className={styles.sectionInner}>
      <motion.div
        className={styles.sectionIntro}
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={styles.sectionLabel}>01 / About</p>
        <h2>Engineer, builder, and curious generalist.</h2>
      </motion.div>

      <div className={styles.aboutLayout}>
        <motion.div
          className={styles.portraitFrame}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Relative public path keeps the image valid under the GitHub Pages subpath. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="myself.jpg"
            alt="Max Liu"
            width={520}
            height={620}
            className={styles.portrait}
          />
          <div className={styles.portraitCaption}>
            <span>Based in the Bay Area</span>
            <span>UMich CS + Data Science</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.aboutCopy}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className={styles.aboutLead}>
            I care about the full path from a good idea to a dependable system.
          </p>
          <p>
            I&apos;m Max (Yinghao) Liu, a University of Michigan graduate in Computer
            Science and Data Science. I currently work as a systems and infrastructure
            software engineer at LinkedIn, where I focus on making complex systems
            reliable, understandable, and useful.
          </p>
          <p>
            Outside of work, I gravitate toward robotics, visual design, photography,
            mountain biking, and ambitious projects with thoughtful people.
          </p>

          <div className={styles.interestBlock}>
            <p>Currently interested in</p>
            <ul>
              {interests.map((interest) => <li key={interest}>{interest}</li>)}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
