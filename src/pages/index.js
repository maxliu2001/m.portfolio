import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { motion } from "framer-motion"
import styles from '@/styles/Home.module.css'
import NavBar from './components/topnavbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const enterAnimation = {
    hidden: { x: 500 },
    visible: {
      x: 25,
      transition: {
        type: 'spring',
        duration: 1
    }
  }}
  return (
    <>
      <Head>
        <title>MPortfolio</title>
        <meta name="description" content="Max Liu Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <NavBar></NavBar>
        <motion.div
        className="div-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        id="main"
        >
          <motion.section className={styles.header} 
          variants={enterAnimation}
          > 
            <h1>Welcome to my portfolio</h1>
          </motion.section>
        </motion.div>

        <motion.div
        className="div-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        id="about"
        >
          <motion.section className={styles.header}
          variants={enterAnimation}
          > 
            <h1 >About</h1>
            <p className={styles.headertxt}>
              My name is Yinghao(Max) Liu and I am a junior majoring in computer science and data science
              at University of Michigan. 
            </p>
          </motion.section>
        </motion.div>

        <motion.div
        className="div-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        id="projects"
        >
          <motion.section className={styles.header} 
          variants={enterAnimation}
          > Projects </motion.section>
        </motion.div>

        <motion.div
        className="div-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        id="contact"
        >
          <motion.section className={styles.header} 
          variants={enterAnimation}
          > Contact </motion.section>
        </motion.div>    
      </main>
    </>
  )
}
