import styles from "@/styles/Contact.module.css";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/max-liu-a7948a1ab/", note: "Professional updates" },
  { label: "GitHub", href: "https://github.com/maxliu2001", note: "Code and experiments" },
];

export default function ContactLinks() {
  return (
    <div className={styles.contactcontainer}>
      <a className={styles.emailButton} href="mailto:yinghaomaxliu06@gmail.com">
        <span>Email me</span>
        <strong>yinghaomaxliu06@gmail.com</strong>
        <span aria-hidden="true">&#8594;</span>
      </a>

      <div className={styles.linkList}>
        {links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            <span>
              <strong>{link.label}</strong>
              <small>{link.note}</small>
            </span>
            <span aria-hidden="true">&#8599;</span>
          </a>
        ))}
      </div>
    </div>
  );
}
