import type { GetServerSideProps, NextPage } from 'next';
import styles from '../styles/pages/home.module.scss';
import Navbar from '../components/navbar/navbar';
import Cards from '../components/cards/cards';
import Title from '../components/title/title';
import { fetchRestaurants } from '../lib/data';
import {useState, useEffect} from "react";

interface IHomeProps {
  data: object;
  error: boolean | string;
}

const Home: NextPage<IHomeProps> = ({ data, error }) => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(data);

useEffect(() => {
  if(!!searchValue) {
    setFilteredData(data.filter((item) => item.name[0].value.toLowerCase().includes(searchValue) || item.name[1].value.includes(searchValue)))
  }
}, [searchValue])

  if (error) {
    return <div>Error occurred.</div>;
  }

  return (
    <div className={styles.container}>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Title label="What's Itzik Loves.." />
      <Cards data={searchValue ? filteredData : data} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async context => {
  const data = await fetchRestaurants();

  return {
    props: {
      data,
      error: !Array.isArray(data) || !data?.length,
    },
  };
};
