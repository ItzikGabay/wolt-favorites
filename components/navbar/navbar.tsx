import styles from './navbar.module.scss';
import { FunctionComponent } from 'react';

interface INavbarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const Navbar: FunctionComponent<INavbarProps> = ({
  searchValue,
  setSearchValue,
}) => {
  return (
    <div className={styles.container}>
      <div>Itzik Favorites</div>
      <input
        type="text"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        placeholder="Search in Itzik Favorites"
        className={styles.search}
      />
    </div>
  );
};

export default Navbar;
