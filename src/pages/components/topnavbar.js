import styles from '@/styles/NavBar.module.css'

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <p>About</p>
            <p>Projects</p>
            <p>Contact</p>
        </div>
    )
}