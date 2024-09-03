import styles from '@/styles/Contact.module.css'
import { motion } from 'framer-motion'
import { Roboto } from 'next/font/google'

export const roboto = Roboto({ subsets: ['latin'], display: 'swap', weight: ['100', '300'], })

const container = {
    hidden: { opacity: 0 },
    show: {
    opacity: 1,
    transition: {
    staggerChildren: 0.5
    }
}
}

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

export default function ContactGroup() {
    return (
        <>
            <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className={styles.contactcontainer}
            >
                <motion.div className={styles.contactbtn} variants={item}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <a href="https://yinghaomaxliu06@gmail.com" target="_blank"><p className={roboto.className}> Email me </p> </a>
                </motion.div>
                <motion.div className={styles.linkedinbtn} variants={item}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <a href="https://www.linkedin.com/in/max-liu-a7948a1ab/" target="_blank"> <p className={roboto.className}>View my Linkedin</p> </a>
                </motion.div>
                <motion.div className={styles.gitbtn} variants={item}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <a href="https://github.com/maxliu2001" target='_blank'> <p className={roboto.className}>View my Github</p> </a>
                </motion.div>
                <motion.div className={styles.resumebtn} variants={item}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <a href="https://drive.google.com/file/d/1RXw-PcIzpLZvnPNr5B3Jis8eqLULZkuT/view?usp=sharing" target='_blank'> <p className={roboto.className}> View my Resume </p> </a>
                </motion.div>
            </motion.div>
        </>
    );
}