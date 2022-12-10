import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/header'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Footer } from '../components/footer'
import BasicSpeedDial from '../components/SpeedDial'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="google-site-verification" content="DuBVzA_HUhu_tJFZ8IW1HVdhApi3iwjZK035sGMxMrE" />
      <title>DJ's Custom Window Tint</title>
      <meta name="description" content="Created by Colin Maloney" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <ParallaxProvider>
      <BasicSpeedDial/>
      <Component {...pageProps} />
    </ParallaxProvider>
    <Footer/>
  </>
}

export default MyApp
