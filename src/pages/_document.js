import { Html, Head, Main, NextScript } from 'next/document'

const themeScript = `
  (function () {
    try {
      var saved = localStorage.getItem('theme') || localStorage.getItem('mui-mode');
      var theme = saved === 'light' || saved === 'dark'
        ? saved
        : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (_) {}
  })();
`

export default function Document() {
  return (
    <Html lang="en" data-theme="light">
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
