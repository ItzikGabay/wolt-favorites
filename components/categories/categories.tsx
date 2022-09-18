import styles from './categories.module.scss';
import { FunctionComponent } from 'react';

interface ICategoriesProps {
  categories: string[];
  setCategory: (category: string) => void;
}

const Categories: FunctionComponent<ICategoriesProps> = ({
  categories,
  setCategory,
}) => {
  // TODO: Add a category component
  const renderCategories = categories.map((category, index) => (
    <div
      className={styles.category}
      key={index}
      onClick={() => setCategory(category)}>
      {category}
    </div>
  ));

  return (
    <div className={styles.container}>
      <form>{renderCategories}</form>
    </div>
  );
};

export default Categories;
