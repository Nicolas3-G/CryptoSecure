import styles from '@/styles/Home.module.css'
import Header from '../components/shared/Header/Header'
import IntroSection from '../components/IntroSection/IntroSection'
import ThreeCard from '../components/shared/ThreeCard/ThreeCard'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>CryptoSecure Financial</title>
        <link rel="icon" href="main-logo.png"/>
      </Head>
      <Header page="home" />
      <IntroSection />
      <ThreeCard />

    </>
  )
}
