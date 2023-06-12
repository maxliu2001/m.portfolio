import styles from '@/styles/NavBar.module.css'
import { Open_Sans } from 'next/font/google'

export const opensans = Open_Sans({ subsets: ['latin'], display: 'swap' })

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbtn}> <a href="#landing"> <p className={opensans.className}>Home</p> </a> </div>
            <div className={styles.navbtn}> <a href="#about"> <p className={opensans.className}>About</p> </a> </div> 
            <div className={styles.navbtn}> <a href="#projects"> <p className={opensans.className}>Projects</p> </a> </div>
            <div className={styles.navbtn}> <a href="#contact"> <p className={opensans.className}>Contact</p> </a> </div>
        </div>
    )
}