import type { GetServerSideProps, NextPage } from 'next';
import styles from '../styles/pages/home.module.scss';
import Navbar from '../components/navbar/navbar';
import Cards from '../components/cards/cards';
import Title from '../components/title/title';
import { fetchRestaurants } from '../lib/data';
import { useState, useEffect } from 'react';
import { RestaurantProps } from '../interfaces/Restaurant';
import { CategoryProps } from '../interfaces/Category';
import Categories from '../components/categories/categories';

interface IHomeProps {
  data: RestaurantProps[];
  error: boolean | string;
  categories: string[];
}

const Home: NextPage<IHomeProps> = ({ data, error, categories }) => {
  const [searchValue, setSearchValue] = useState('');
  const [category, setCategory] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const filterByCategoryValue = (data: RestaurantProps[]) => {
    return data.filter(item => {
      const itemCategories = item.categories.map(
        (item: CategoryProps) => item.name,
      );
      return itemCategories.includes(category);
    });
  };

  const filterBySearchValue = (data: RestaurantProps[]) => {
    return data.filter(
      item =>
        (item.name && item.name[0].value.toLowerCase().includes(searchValue)) ||
        (item.name && item.name[1].value.includes(searchValue)),
    );
  };

  useEffect(() => {
    // Reset value if category is empty
    if (searchValue === '' && !!data.length && category) {
      let filteredItems = filterBySearchValue(data);
      filteredItems = filterByCategoryValue(data);
      return setFilteredData(filteredItems);
    }
    // Filter by category
    if (!!searchValue && !!data.length) {
      let filteredItems = filterBySearchValue(data);
      if (!!category) {
        filteredItems = filterByCategoryValue(filteredItems);
      }
      setFilteredData(filteredItems);
    }
  }, [searchValue]);

  useEffect(() => {
    if (!!category && !!data.length) {
      let filteredItems = filterByCategoryValue(data);
      if (!!searchValue) {
        filteredItems = filterBySearchValue(filteredItems);
      }
      setFilteredData(filteredItems);
    }
  }, [category]);

  if (error) {
    return <div>Error occurred.</div>;
  }

  return (
    <div className={styles.container}>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Categories
        categories={categories}
        setCategory={setCategory}
        category={category}
      />
      <Title label="The Best Restaurants of itzik:" />
      <Cards data={searchValue || category ? filteredData : data} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async context => {
  const data = await fetchRestaurants();

  return {
    props: {
      data: data.restaurants || [],
      categories: data.categories || [],
      error: !Array.isArray(data.restaurants) || !data.restaurants.length,
    },
  };
};
