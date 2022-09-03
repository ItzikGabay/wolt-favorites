import type { NextPage } from 'next';
import styles from '../styles/pages/home.module.scss';
import Navbar from '../components/navbar/navbar';
import Cards from '../components/cards/cards';
import Title from "../components/title/title";
import useFetch from "../hooks/useFetch";

const Home: NextPage = () => {
    const { data, loading, error } = useFetch('/api/restaurants');
    // const { data, loading, error } = useFetch('/api/fsdfsd');

    if(loading) {
        return <div>"Loading.."</div>
    }

    if(error) {
        return <div>error</div>
    }

    // [0].results
    const cards = data && data.data;

  return (
    <div className={styles.container}>
        <Navbar/>
        <Title label="What's Itzik Loves.."/>
        <Cards data={cards} />
        {/*{JSON.stringify(data)}*/}
    </div>
  )
}

export default Home;