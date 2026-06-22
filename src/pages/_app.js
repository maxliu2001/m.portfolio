import '@/styles/globals.css'
import * as React from 'react'
import { ColorModeContext } from '@/theme/ColorModeContext'

export default function App({ Component, pageProps }) {
  const [mode, setMode] = React.useState('light')
  const [themeReady, setThemeReady] = React.useState(false)

  React.useEffect(() => {
    const initialMode = document.documentElement.dataset.theme
    if (initialMode === 'light' || initialMode === 'dark') setMode(initialMode)
    setThemeReady(true)
  }, [])

  React.useEffect(() => {
    if (!themeReady) return
    document.documentElement.dataset.theme = mode
    document.documentElement.style.colorScheme = mode
  }, [mode, themeReady])

  const colorMode = React.useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((current) => {
          const next = current === 'light' ? 'dark' : 'light'
          try { localStorage.setItem('theme', next) } catch {}
          return next
        })
      },
    }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <Component {...pageProps} />
    </ColorModeContext.Provider>
  )
}
