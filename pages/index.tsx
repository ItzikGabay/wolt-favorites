import type { NextPage } from 'next';
import styles from '../styles/pages/home.module.scss';
import Navbar from '../components/navbar/navbar';
import Cards from '../components/cards/cards';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
        <Cards />
    </div>
  )
}

export default Home;