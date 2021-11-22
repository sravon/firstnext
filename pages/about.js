import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
        <Head>
             <title>Shrabon | aBOUT</title>
        </Head>
        <div className="container mx-auto">
            <h2 className="text-center p-20 text-2xl text-red-900 font-bold">about page</h2>
        </div>
    </>
  )
}
