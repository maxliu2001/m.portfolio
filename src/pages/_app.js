import '@/styles/globals.css'
import * as React from 'react'
import { ThemeProvider, createTheme, alpha } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ColorModeContext } from '@/theme/ColorModeContext'

export default function App({ Component, pageProps }) {
  const [mode, setMode] = React.useState('light')
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    // Restore saved mode or use system preference on first mount
    const saved = typeof window !== 'undefined' ? localStorage.getItem('mui-mode') : null
    if (saved === 'light' || saved === 'dark') {
      setMode(saved)
    } else if (typeof window !== 'undefined' && window.matchMedia) {
      setMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    }
    setMounted(true)
  }, [])

  const colorMode = React.useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode(prev => {
          const next = prev === 'light' ? 'dark' : 'light'
          try { localStorage.setItem('mui-mode', next) } catch {}
          return next
        })
      }
    }),
    [mode]
  )

  const theme = React.useMemo(() => createTheme({
    palette: { mode },
    shape: { borderRadius: 12 },
  }), [mode])

  // Avoid hydration mismatch by rendering after mount
  if (!mounted) return null

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={(theme) => ({
          ':root': {
            // Modal CSS variables driven by theme greys
            '--modal-bg': theme.palette.mode === 'dark'
              ? alpha(theme.palette.grey[900], 0.92)
              : theme.palette.grey[50],
            '--modal-border': theme.palette.mode === 'dark'
              ? theme.palette.grey[700]
              : theme.palette.grey[300],
          },
          body: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
        })} />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
