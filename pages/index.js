import Head from 'next/head';
import Header from '../components/header';
import Features from '../components/features';
import Footer from '../components/footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
        <Head>
            <title>Udara</title>
            <meta name="description" content="Udara project" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
            <Header />
            <Features />
            <Footer />
        </main>
    </div>
  )
}
