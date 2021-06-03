import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>homepage</h1>
      <Link href="/ninjas">
        <a>See Listing</a>
      </Link>
      <Footer />
    </div>
  )
}
