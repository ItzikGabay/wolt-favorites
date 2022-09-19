import styles from './categories.module.scss';
import { FunctionComponent } from 'react';

interface ICategoriesProps {
  categories: string[];
  setCategory: (category: string) => void;
  category: string;
}

const Categories: FunctionComponent<ICategoriesProps> = ({
  categories,
  setCategory,
  category,
}) => {
  // TODO: Add a category component
  const renderCategories = categories.map((itemCategory, index) => (
    <div
      className={`${styles.category} ${
        itemCategory === category && styles.active
      }`}
      key={index}
      onClick={() =>
        !!category ? setCategory('') : setCategory(itemCategory)
      }>
      {itemCategory}
    </div>
  ));

  return (
    <div className={styles.container}>
      <form>{renderCategories}</form>
    </div>
  );
};

export default Categories;
