import styles from '../src/styles/Home.module.scss'
import Head from 'next/head';

const Home = () => {
  return (
    <div className={styles.container}>
        <Head><title>Стартовая страница</title></Head>
        <h1>Home page</h1>
    </div>
  )
}

export default Home