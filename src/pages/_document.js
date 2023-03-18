import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const analyticsId = 'G-ZZS4BXLLNW'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script strategy="afterInteractive" src={"https://www.googletagmanager.com/gtag/js?id="+analyticsId}/>
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${analyticsId}', {
          page_path: window.location.pathname,
          });
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
