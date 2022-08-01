import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/header'

const Home: NextPage = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
    </div>
  )
}

export default Home