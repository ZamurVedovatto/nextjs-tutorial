import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs | Home</title>
        <meta name="keywords" content="nextjs"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Fugiat eiusmod Lorem et et est aliquip ut excepteur. Nostrud est cillum et dolor officia. Qui sint est irure nostrud velit Lorem minim officia do magna est.</p>
        <p className={styles.text}>Fugiat eiusmod Lorem et et est aliquip ut excepteur. Nostrud est cillum et dolor officia. Qui sint est irure nostrud velit Lorem minim officia do magna est.</p>
        <Link href="/users">
          <a className={styles.btn}>See Listing</a>
        </Link>
      </div>
    </>
  )
}
