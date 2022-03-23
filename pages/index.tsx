import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer/Footer'
import Body from '../components/Body/Body'

const Home: NextPage = ({}) => {
  return (
    <div>
      <Head>
        <title>Udemy project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Body />
    </div>
  )
}

export default Home

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://fakestoreapi.com/products`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }
