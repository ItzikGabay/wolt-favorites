import type { NextPage } from 'next';
import styles from '../styles/pages/home.module.scss';
import Navbar from '../components/navbar/navbar';
import Cards from '../components/cards/cards';
import Title from "../components/title/title";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Navbar/>
        <Title label="What's Itzik Loves.."/>
        <Cards />
    </div>
  )
}

export default Home;