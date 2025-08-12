import Document, { Html, Head, Main, NextScript } from 'next/document';

const themeInitScript = `
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    var root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;
  } catch (e) {}
`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
