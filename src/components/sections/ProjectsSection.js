import * as React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import styles from "@/styles/Home.module.css";

const projects = [
  {
    title: "SUMOGen",
    year: "2025–Present",
    summary: "An AI-assisted traffic scenario generator and evaluation workflow for autonomous-driving simulation.",
    role: "Research engineering",
    impact: "100+ TeraSim maps",
    details: "Designed a customizable SUMO traffic generator using MCP tool calling and structured context to support closed-loop scenario generation and analysis across more than 100 TeraSim maps. Also integrated traffic adversity generation into 3D autonomous-driving pipelines, using 3D Gaussian Splatting to support synthetic LiDAR evaluation of perception systems.",
    url: "https://github.com/maxliu2001/SUMOGen",
    tags: ["SUMO", "Agentic AI", "Simulation"],
    featured: true,
    accent: "robotics",
  },
  {
    title: "Raft Key-Value Store",
    year: "2026",
    summary: "A fault-tolerant distributed key-value service built on the Raft consensus algorithm.",
    role: "Distributed systems",
    impact: "Replicated consensus",
    details: "Implemented a Raft-backed key-value store in Go with RPC networking, replicated logs, leader election, consensus, and deduplicated client operations. Built integration tests around replication and key-value behavior during an intensive distributed-systems course.",
    url: "https://github.com/dabeaz-course/raft_2026_01/tree/maxliu",
    tags: ["Go", "Raft", "Distributed systems"],
    featured: true,
    accent: "network",
  },
  {
    title: "Strategic Data Sampling for LLMs",
    year: "2024",
    summary: "A data-selection study that retained full-dataset-level evaluation performance with a fraction of the training set.",
    role: "ML research",
    impact: "25% of training data",
    details: "Fine-tuned Llama 3.1 8B on Open-Platypus with LoRA and identified high-impact training subsets through leave-one-out analysis. Using 25% of the data matched full-dataset accuracy across MMLU, HellaSwag, and TruthfulQA; experiments ran on A100 GPUs and were tracked with Weights & Biases.",
    url: null,
    tags: ["Llama 3.1", "LoRA", "Data selection"],
    featured: true,
    accent: "health",
  },
  {
    title: "Agentic Game Recommendations",
    year: "2025",
    summary: "A conversational game-discovery agent that adapts recommendations to each player's history and preferences.",
    role: "AI product engineering",
    impact: "10K+ indexed games",
    details: "Built a LangGraph agent for multi-turn dialogue, contextual reasoning, and API tool calls. Added retrieval over more than 10,000 vectorized IGDB entries in Astra DB using OpenAI embeddings, then personalized results with Steam login data and preference tracking.",
    url: null,
    tags: ["LangGraph", "RAG", "Astra DB"],
  },
  {
    title: "InteractiveReader",
    year: "2024",
    summary: "A mobile reading companion with spoiler-aware summaries, character context, and relationship visualizations.",
    role: "Full-stack AI engineering",
    impact: "Deployed mobile API",
    details: "Built a React Native reading experience backed by an Express API deployed on Google Cloud. Integrated Gemini for plot, chapter, and character summaries, Graphviz for relationship graphs, and Cloud SQL for persisted results.",
    url: "https://github.com/jessieeeovo/InteractiveReader",
    tags: ["React Native", "Gemini", "Google Cloud"],
  },
  {
    title: "Fetch Robot",
    year: "2024",
    summary: "A robotics simulation stack for kinematics, collision detection, and motion planning.",
    role: "Robotics engineering",
    impact: "End-to-end planning",
    details: "Loaded custom Fetch robot URDF files through ROS Bridge, implemented forward and inverse kinematics, and built collision detection plus RRT-Connect and RRT-Star motion planners for robot navigation.",
    url: null,
    tags: ["Robotics", "ROS", "Kinematics"],
  },
  {
    title: "MiNap",
    year: "2023",
    summary: "A smartwatch sleep diary and secure data pipeline for clinical research participants.",
    role: "Full-stack infrastructure",
    impact: "Clinical research platform",
    details: "Contributed to a multi-device sleep diary spanning Fitbit, Apple Watch, and Garmin. Research data moves through secure cloud staging into an Oracle database behind a firewall.",
    url: "https://github.com/DepressionCenter/MiNap",
    tags: ["Mobile", "Health", "Cloud"],
  },
  {
    title: "pSSID",
    year: "2023",
    summary: "A provisioning engine that brings perfSONAR network analytics to enterprise probes.",
    role: "Systems engineering",
    impact: "Enterprise network probes",
    details: "Built provisioning automation for Raspberry Pi probes and a daemonized process that continuously turns application configuration into perfSONAR network tests.",
    url: "https://github.com/UMNET-perfSONAR/pSSID2",
    tags: ["Networking", "Open source", "Systems"],
  },
  {
    title: "Fakebook JDBC",
    year: "2023",
    summary: "Database coursework exploring relational analytics over a social-network schema with Java and Oracle.",
    role: "Database systems",
    impact: "Relational query design",
    details: "Worked with JDBC and Oracle SQL to analyze a normalized social-network dataset, covering aggregation, joins, friendship relationships, photo tags, events, and location data.",
    url: "https://github.com/maxliu2001/p2-fakebook-jdbc",
    tags: ["Java", "JDBC", "Oracle SQL"],
  },
  {
    title: "ROS SAM Client",
    year: "2023",
    summary: "Real-time image segmentation through a distributed ROS service.",
    role: "ML systems",
    impact: "Interactive segmentation",
    details: "Designed a ROS service and GUI for customizable segmentation with OpenCV, PyTorch, and NumPy, then separated local robotics clients from the model server using Terraform-provisioned infrastructure.",
    url: "https://github.com/maxliu2001/SAM-ROS-Client-Server",
    tags: ["Computer vision", "ROS", "ML"],
  },
  {
    title: "Insta Clone",
    year: "2023",
    summary: "A containerized social application deployed across managed AWS services.",
    role: "Cloud engineering",
    impact: "Automated delivery",
    details: "Built a Dockerized Instagram clone using RDS, S3, CloudFront, ECS, and Fargate, with CloudFormation infrastructure and a GitHub Actions delivery pipeline.",
    url: null,
    tags: ["AWS", "DevOps", "Cloud"],
  },
  {
    title: "ZotMeal",
    year: "2021",
    summary: "A mobile dining app backed by fresh campus menu data.",
    role: "Backend engineering",
    impact: "5,000+ users",
    details: "Built the web-scraping backend that keeps dining hall menus and service hours current for a mobile app used by more than 5,000 people.",
    url: "https://github.com/maxliu2001/ZotMeal/tree/master",
    tags: ["Mobile", "Scraping"],
  },
  {
    title: "SnapShare",
    year: "2021",
    summary: "An ML-assisted workflow for matching surplus food with local food banks.",
    role: "Product engineering",
    impact: "Hackathon winner",
    details: "Created a two-step donation experience that classifies surplus food from a photo and helps match it to a nearby food bank. Winner of UVA Hackathon's Social Empowerment track.",
    url: "https://github.com/maxliu2001/SnapShare",
    tags: ["ML", "Social good"],
  },
  {
    title: "Pomodoro Cat",
    year: "2021",
    summary: "A playful productivity timer that rewards focused work with a virtual cat.",
    role: "Product engineering",
    impact: "2nd overall",
    details: "Combined the Pomodoro technique with a lightweight virtual-pet game. The project placed second overall at the VTech Hackathon.",
    url: "https://github.com/stanford-rejects/PomodoroCat",
    tags: ["Productivity", "Game"],
  },
  {
    title: "CodeAI",
    year: "2021–2022",
    summary: "An AI-literacy learning platform for elementary school students.",
    role: "Research engineering",
    impact: "Education research",
    details: "Integrated natural-language processing into a Next.js and Firebase learning platform while working as a research assistant at UCI's Digital Learning Lab.",
    url: "https://github.com/codeAI-Project/codeAI-Lab",
    tags: ["Education", "Web", "NLP"],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectsSection() {
  const [active, setActive] = React.useState(null);
  const triggerRef = React.useRef(null);
  const featured = projects.filter((project) => project.featured);
  const archive = projects.filter((project) => !project.featured);

  const openProject = React.useCallback((project, event) => {
    triggerRef.current = event.currentTarget;
    setActive(project);
  }, []);

  const closeProject = React.useCallback(() => setActive(null), []);

  return (
    <div className={styles.sectionInner}>
      <motion.div
        className={styles.sectionIntro}
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className={styles.sectionLabel}>02 / Selected work</p>
        <h2>Projects built to move beyond the prototype.</h2>
        <p>Three projects that best represent how I approach systems, infrastructure, and product engineering.</p>
      </motion.div>

      <div className={styles.featuredGrid}>
        {featured.map((project, index) => (
          <motion.article
            key={project.title}
            className={styles.featuredCard}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className={`${styles.projectVisual} ${styles[project.accent]}`} aria-hidden="true">
              <span>0{index + 1}</span>
              <div className={styles.visualGrid} />
              <strong>{project.impact}</strong>
            </div>

            <div className={styles.projectBody}>
              <div className={styles.projectMeta}>
                <span>{project.role}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className={styles.tagList} aria-label={`${project.title} technologies`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <div className={styles.projectActions}>
                <button type="button" onClick={(event) => openProject(project, event)}>Read case study</button>
                {project.url && <a href={project.url} target="_blank" rel="noreferrer">GitHub &#8599;</a>}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className={styles.archiveSection}>
        <div className={styles.archiveHeading}>
          <h3>More projects</h3>
          <p>Earlier experiments, research, and hackathon work.</p>
        </div>
        <div className={styles.archiveList}>
          {archive.map((project) => (
            <button key={project.title} type="button" onClick={(event) => openProject(project, event)}>
              <span className={styles.archiveYear}>{project.year}</span>
              <strong>{project.title}</strong>
              <span className={styles.archiveTags}>{project.tags.join(" · ")}</span>
              <span aria-hidden="true">&#8594;</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <ProjectDialog
            project={active}
            onClose={closeProject}
            returnFocusRef={triggerRef}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectDialog({ project, onClose, returnFocusRef }) {
  const [mounted, setMounted] = React.useState(false);
  const dialogRef = React.useRef(null);
  const closeRef = React.useRef(null);

  React.useEffect(() => {
    setMounted(true);
    const returnTarget = returnFocusRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.getAttribute("aria-hidden") !== "true");

      if (focusable.length === 0) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const focusIsOutside = !dialogRef.current.contains(document.activeElement);

      if (event.shiftKey && (document.activeElement === first || focusIsOutside)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || focusIsOutside)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.requestAnimationFrame(() => {
        if (returnTarget?.isConnected) returnTarget.focus();
      });
    };
  }, [onClose, returnFocusRef]);

  React.useEffect(() => {
    if (mounted) closeRef.current?.focus();
  }, [mounted]);

  if (!mounted) return null;

  return createPortal(
    <motion.div
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <motion.div
        ref={dialogRef}
        className={styles.modalContainer}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        tabIndex={-1}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
      >
        <button ref={closeRef} className={styles.modalClose} type="button" onClick={onClose} aria-label="Close project details">
          &#215;
        </button>
        <p className={styles.sectionLabel}>{project.role} / {project.year}</p>
        <h2 id="project-dialog-title">{project.title}</h2>
        <p className={styles.modalLead}>{project.summary}</p>
        <div className={styles.modalFact}>
          <span>Outcome</span>
          <strong>{project.impact}</strong>
        </div>
        <p>{project.details}</p>
        <ul className={styles.tagList}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        {project.url && <a className={styles.primaryAction} href={project.url} target="_blank" rel="noreferrer">View repository &#8599;</a>}
      </motion.div>
    </motion.div>,
    document.body
  );
}
