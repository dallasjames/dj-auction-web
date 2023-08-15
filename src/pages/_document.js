import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const analyticsId = 'G-ZZS4BXLLNW'

export default function Document() {
  const BASE_URL = 'https://djsactionhouse.com'
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="en-us" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Favicon */}
        <link rel="shortcut icon" href={BASE_URL + "/favicon.ico"} type="image/x-icon" />
        <link rel="icon" href={BASE_URL + "/favicon-16x16.png"} sizes="16x16" />
        <link rel="icon" href={BASE_URL + "/favicon-32x32.png"} sizes="32x32" />
        <link rel="icon" href={BASE_URL + "/favicon-48x48.png"} sizes="48x48" />
        <link rel="icon" href={BASE_URL + "/favicon-96x96.png"} sizes="96x96" />
        <link rel="icon" href={BASE_URL + "/favicon-144x144.png"} sizes="144x144" />
        <link rel="apple-touch-icon" href={BASE_URL + "/apple-touch-icon.png"} sizes="180x180" />
        <link rel="manifest" href={BASE_URL + "/manifest.json"} />
        <link rel="mask-icon" href={BASE_URL + "/safari-pinned-tab.svg"} color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
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
