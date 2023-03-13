import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { motion } from "framer-motion"
import styles from '@/styles/Home.module.css'
import NavBar from './components/topnavbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const enterAnimation = {
    hidden: { y: 1000 },
    visible: {
      y: 200,
      transition: {
        type: 'spring',
        duration: 1
    }
  }}
  return (
    <>
      <Head>
        <title>MPortfolio</title>
        <meta name="description" content="New Online Portfolio for Max Liu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <motion.div
        className="card-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        >
          <motion.section className={styles.header} 
          variants={enterAnimation}
          > 
          <NavBar></NavBar>
          <h1>Welcome to my portfolio</h1>
          </motion.section>
        </motion.div>

        <motion.div
        className="card-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        >
          <motion.section className={styles.header} 
          variants={enterAnimation}
          > About </motion.section>
        </motion.div>

        <motion.div
        className="card-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        >
          <motion.section className={styles.header} 
          variants={enterAnimation}
          > Projects </motion.section>
        </motion.div>

        <motion.div
        className="card-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        >
          <motion.section className={styles.header} 
          variants={enterAnimation}
          > Contact </motion.section>
        </motion.div>    
      </main>
    </>
  )
}
