import * as React from 'react'
import { ColorModeContext } from '@/theme/ColorModeContext'
import styles from '@/styles/NavBar.module.css'

export default function ThemeToggle() {
  const { mode, toggleColorMode } = React.useContext(ColorModeContext)
  const isDark = mode === 'dark'
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode'

  return (
    <button
      type="button"
      className={styles.themeToggle}
      aria-label={label}
      title={label}
      onClick={toggleColorMode}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.4 15.1A8.2 8.2 0 0 1 8.9 3.6 8.7 8.7 0 1 0 20.4 15.1Z" />
        </svg>
      )}
    </button>
  )
}
