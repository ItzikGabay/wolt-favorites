import type { GetServerSideProps, NextPage } from 'next';
import styles from '../styles/pages/home.module.scss';
import Navbar from '../components/navbar/navbar';
import Cards from '../components/cards/cards';
import Title from '../components/title/title';
import axios from 'axios';
import sampleData from '../sample-data.json';

interface IHomeProps {
  data: object;
  error: boolean | string;
}

const Home: NextPage<IHomeProps> = ({ data, error }) => {
  if (error) {
    return <div>Error occurred.</div>;
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <Title label="What's Itzik Loves.." />
      <Cards data={data} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async context => {
  let error = false;
  // const response = await axios.get('http://localhost:3000/api/restaurants');
  // const data = response.data.data;
  const data: any = sampleData;

  if (!Array.isArray(data) || !data?.length) {
    error = true;
  }

  return {
    props: {
      data,
      error,
    },
  };
};
