import Head from 'next/head'
import { Merriweather, Raleway, Bitter} from 'next/font/google'
import { motion } from "framer-motion"
import styles from '@/styles/Home.module.css'
import NavBar from './components/topnavbar'
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import ContactGroup from './components/contactgroup'
import Landing from './landing'
import AboutPage from './about'
import ProjectsPage from './project'
import { Typography } from '@mui/material'

export const merri = Merriweather({ subsets: ['latin'], display: 'swap', weight: ['300'] })
export const raleway = Raleway({ subsets: ['latin'], display: 'swap' })
export const bitter = Bitter({ subsets: ['latin'], display: 'swap' })


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

export default function Home() {
  return (
    <>
      <Head>
        <title>MPortfolio</title>
        <meta name="description" content="Max Liu Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main} id="landing">
      <NavBar></NavBar>
      
      {/* Landing Page */}
      <Landing/>

      {/* About Page */}
      <section className={styles.aboutsection} id="about">
        <AboutPage/>
      </section>

      {/* Project Section */}
      <section className={styles.projectsection} id="projects">
        <ProjectsPage/>
      </section>
       
      {/* Contact Section */}
      <section className={styles.contactsection} id="contact">
        <Grid container spacing={4} alignItems='center'>
          <Grid xs={12} md={6} lg={6}>
            <motion.div
            className="div-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.8 }}
            >
              <motion.section
              variants={enterAnimation}
              className={styles.contactheader}
              > 
                <Typography
                  component="h1"
                  sx={{ textAlign: "center", mb: { xs: 1, md: 2 } }}>
                  Contact
                </Typography>
              </motion.section>
            </motion.div>  
          </Grid>
          <Grid xs={12} md={6}>
            <ContactGroup/>
          </Grid>
        </Grid>
      </section> 
      <Divider/>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <p className={raleway.className}> by Max Liu 2023 </p>
        <p className={raleway.className}> @m.portfolio </p>
      </footer>
    </main>
    </>
  )
}
