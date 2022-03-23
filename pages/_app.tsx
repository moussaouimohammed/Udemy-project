import '../styles/globals.css'
import '../pages/main.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
