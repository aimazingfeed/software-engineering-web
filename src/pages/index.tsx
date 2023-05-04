/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Quiz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <img src="/line.svg" className={styles.lines} alt="" />
        <img src="/logo.png" className={styles.logo} alt="" />
        <p className={`${inter.className} ${styles.title}`}>
          {'ПРОВЕРЬ СВОЕ ЗНАНИЕ\nИСКУССТВА'}
        </p>
        <Link href="/game" className={`${styles.mainButton} ${inter.className}`}>НАЧАТЬ ИГРУ</Link>
      </main>
    </>
  )
}
