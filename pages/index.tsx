import type { NextPage } from 'next'
import Head from 'next/head'
import Board from '../containers/Board/Board'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tick Tac Toe</title>
        <meta name="Tick Tac Toe Game" content="created by Arpesh" />
      </Head>

      <main className={styles.main}>
        <h1 className='Heading'>
          Tik Tack Toe
        </h1>
        <Board />
      </main>
    </div>
  )
}

export default Home
