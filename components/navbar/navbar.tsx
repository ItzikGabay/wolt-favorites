import styles from './navbar.module.scss';
import { FunctionComponent } from 'react';
import translations from '../../lib/translations';

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
      <div>{translations.title}</div>
      <input
        type="text"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        placeholder={translations.search_placeholder}
        className={styles.search}
      />
    </div>
  );
};

export default Navbar;
