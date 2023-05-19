import styles from '@/styles/NavBar.module.css'

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    )
}