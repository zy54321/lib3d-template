import dynamic from 'next/dynamic'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

const ThreeScene = dynamic(() => import('../components/ThreeScene'), {
  ssr: false,
})
const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThreeScene />
    </div>
  )
}

export default Home
