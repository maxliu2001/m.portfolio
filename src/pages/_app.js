import '@/styles/globals.css'
import * as React from 'react'
import { ThemeProvider, createTheme, alpha } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ColorModeContext } from '@/theme/ColorModeContext'

export default function App({ Component, pageProps }) {
  const [mode, setMode] = React.useState('light')

  React.useEffect(() => {
    // Restore saved mode or use system preference on first mount
    const saved = typeof window !== 'undefined' ? localStorage.getItem('mui-mode') : null
    if (saved === 'light' || saved === 'dark') {
      setMode(saved)
    } else if (typeof window !== 'undefined' && window.matchMedia) {
      setMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    }
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
    palette: {
      mode,
      primary: { main: '#54e878' },
      background: mode === 'dark'
        ? { default: '#0b0d0c', paper: '#121513' }
        : { default: '#f5f7f4', paper: '#ffffff' },
    },
    shape: { borderRadius: 16 },
    typography: {
      fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    },
  }), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={(theme) => ({
          ':root': {
            '--surface': theme.palette.background.paper,
            '--surface-soft': theme.palette.mode === 'dark'
              ? alpha(theme.palette.common.white, 0.035)
              : alpha(theme.palette.common.black, 0.025),
            '--surface-raised': theme.palette.mode === 'dark'
              ? alpha(theme.palette.common.white, 0.065)
              : theme.palette.common.white,
            '--text-primary': theme.palette.text.primary,
            '--text-muted': theme.palette.text.secondary,
            '--line': theme.palette.mode === 'dark'
              ? alpha(theme.palette.common.white, 0.13)
              : alpha(theme.palette.common.black, 0.13),
            '--nav-bg': theme.palette.mode === 'dark'
              ? alpha('#0b0d0c', 0.78)
              : alpha('#f5f7f4', 0.8),
            '--shadow': theme.palette.mode === 'dark'
              ? '0 24px 70px rgba(0,0,0,.32)'
              : '0 24px 70px rgba(27,50,34,.10)',
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
