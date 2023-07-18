import Head from 'next/head'
import { Merriweather, Raleway, Bitter} from 'next/font/google'
import { motion, useScroll} from "framer-motion"
import styles from '@/styles/Home.module.css'
import NavBar from './components/topnavbar'
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Image from 'next/image'
import { Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactGroup from './components/contactgroup'
import { useState, useEffect, useRef } from 'react'
import AboutGroup from './components/aboutgroup'
import { CenterFocusWeakTwoTone } from '@mui/icons-material'

export const merri = Merriweather({ subsets: ['latin'], display: 'swap', weight: ['300'] })
export const raleway = Raleway({ subsets: ['latin'], display: 'swap' })
export const bitter = Bitter({ subsets: ['latin'], display: 'swap' })


const projects = [
  {
    title: "FreshReminder", 
    content: "Build a full-stack application that helps \
    users to keep track of groceries and recommends recipes, develop an object/text recognition\
    ML model hosted on Google Cloud, write Docker containerized microservice invoking ChatGPT \
    API on Amazon EKS, implement Firebase auth and OAuth 2.0 authentication, and manage user-generated\
    data on MongoDB.",
    url:"https://github.com/FreshReminder-App/FreshReminder"
  },
  {
    title: "ZotMeal",
    content:"ZotMeal obtains a daily menu from the web and then displays it in a friendly user-interface.\
    Both Brandywine and Anteatery’s menu is included with the most up-to-date information! Dining hall \
    service hours can also be found in the app. Moreover, users are able to do a quick Google search on \
    the food simply by clicking the menu. More features yet to come...",
    url:"https://github.com/maxliu2001/ZotMeal/tree/master"
  },
  {
    title: 'SnapShare',
    content: "SnapShare uses machine learning to make donating your surplus food super easy. There are only \
    2 steps: Snap and Share. Snap a pic of your surplus food, and the machine learning model will automatically \
    classify it and match a local food bank that needs it.",
    url:"https://github.com/maxliu2001/SnapShare"
  },
  {
    title: "Pomodoro Cat",
    content: "Working remotely can be challenging, especially amidst a worldwide pandemic. After analyzing the \
    current applications that target productivity, we decide to integrate a fun game that allows users to keep \
    their own cats while keeping track of their time using Pomodoro technique.",
    url:"https://github.com/stanford-rejects/PomodoroCat"
  },
  {
    title: 'CodeAI',
    content: "This project integrates a natural language processor into a website using React.js, next.js and \
    Firebase in order to build a learning platform for lower income elementary school students in Santa Ana, CA \
    to learn AI literacy and possibly embark academic persuit in computer science.",
    url: "https://github.com/codeAI-Project/codeAI-Lab"
  }
]

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

const headerHover = {
  scale: 1.2,
  transition: {
    type: "spring",
    damping: 10,
    stiffness: 80,
    duration: 0.5,
  },
}

const TypingText = ({ text }) => {
  const [content, setContent] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let typingTimeout;
    if (typing && content.length < text.length) {
      typingTimeout = setTimeout(() => {
        setContent(text.slice(0, content.length + 1));
      }, 200);  // adjust typing speed here
    } else {
      setTyping(false);
    }
    return () => clearTimeout(typingTimeout);
  }, [content, typing]);

  return <p>{content}</p>;
}


export default function Home() {
  const welcomemsg = "Hello! Welcome to my portfolio"
  return (
    <>
      <Head>
        <title>MPortfolio</title>
        <meta name="description" content="Max Liu Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main} id="landing">
      <NavBar></NavBar>
      <section className={styles.header}>
        <Image
          src="logo.gif" 
          alt="logo"
          width={400}
          height={400}
          quality={100}/> 

        <motion.div
        className="div-container"
        initial="hidden"
        whileInView="visible"
        whileHover={headerHover}
        viewport={{ once: false, amount: 0.8 }}
        >
          <motion.h1
          className={raleway.className}
          variants={enterAnimation}
          > 
            {welcomemsg}
          </motion.h1>
          <motion.div
            className={raleway.className}
            variants={enterAnimation}>
            <TypingText text="This is Max Liu's Portfolio" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Page */}
      <section className={styles.aboutsection} id="about">
      <motion.div
      className="div-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.8 }}
      >
        <motion.section
        variants={enterAnimation}
        > 
          <Grid container spacing={{ xs: 2, md: 3 }} 
            className={styles.aboutheader}
            >
            <Grid xs={12} md={4} lg={6}>
              <Avatar
                alt="Max Liu"
                src="Yinghao_Liu.JPG"
                sx={{ width: 200, height: 200 }}
                className={styles.aboutavatar}
              />
            </Grid>
            <Grid xs={12} md={8} lg={6}>
              <h1> About</h1>
            </Grid>
          </Grid>
        </motion.section>
      </motion.div>
      
      <Grid container spacing={3} className={styles.aboutcardgroup}>
        <Grid xs={12} md={1} lg ={2}>
        </Grid>
        <Grid xs={12} md={10} lg ={8}>
          <AboutGroup/>
        </Grid>
        <Grid xs={12} md={1} lg ={2}>
        </Grid>
      </Grid>
      
      </section>

      {/* Project Section */}
      <section className={styles.projectsection} id="projects">
        <Stack direction="column" spacing={5}>
          <motion.div
          className="div-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.8 }}
          >
            <motion.section
            variants={enterAnimation}
            > 
              <h1 className={styles.projectheader}>Projects</h1>
            </motion.section>
          </motion.div>
          <Divider light />
          <div className={styles.grid}>
            {projects.map((project, index) => (
              <>
                <div className={styles.card} key={project.title}>
                  <span className={bitter.className}>
                    <h2> {project.title} </h2>
                    <Divider light />
                    <p> {project.content}</p>
                    <Button variant="contained" href={project.url} endIcon={<GitHubIcon />}> View </Button>
                  </span>
                </div>
              </>
            ))}
          </div>
        </Stack>
      </section>
      
      {/* Contact Section */}
      <section className={styles.contactsection} id="contact">
        <Grid container spacing={4} alignItems='center'>
          <Grid xs={12} md={5} lg={6}>
            <motion.div
            className="div-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.8 }}
            >
              <motion.section
              variants={enterAnimation}
              > 
                <h1 className={styles.contactheader}>Contact</h1>
              </motion.section>
            </motion.div>  
          </Grid>
          <Grid xs={12} md={6}>
            <ContactGroup/>
          </Grid>
        </Grid>
      </section> 
      <Divider light/>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p className={raleway.className}> Handcoded by Max Liu 2023 </p>
        <p className={raleway.className}> @m.portfolio </p>
      </footer>
    </main>
    </>
  )
}
