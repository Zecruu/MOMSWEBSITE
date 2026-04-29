import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#00f2fe" />

          {/* Favicon */}
          <link rel="icon" type="image/png" href="/images/pr-decompression-centers-logo.png" />
          <link rel="shortcut icon" type="image/png" href="/images/pr-decompression-centers-logo.png" />
          <link rel="apple-touch-icon" href="/images/pr-decompression-centers-logo.png" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* Preconnect to important third-party domains */}
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />

          {/* Additional Meta Tags */}
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="PR Decompression Centers" />
          <meta name="application-name" content="PR Decompression Centers" />

          {/* Geo targeting for Puerto Rico */}
          <meta name="geo.region" content="US-PR" />
          <meta name="geo.placename" content="Toa Baja, Puerto Rico" />
          <meta name="geo.position" content="18.4425;-66.1946" />
          <meta name="ICBM" content="18.4425, -66.1946" />

          {/* Security Headers */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
          <meta name="referrer" content="strict-origin-when-cross-origin" />

          {/* Nexulon SEO */}
          <script async src="https://seo.nexulonllc.com/embed.js?t=eb7a7468585f8e5a68d08af72a20adf8"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
