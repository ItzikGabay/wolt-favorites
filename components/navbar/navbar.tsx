import styles from './navbar.module.scss';

const Navbar = ({searchValue, setSearchValue}) => {
  return (
    <div className={styles.container}>
      <div>Itzik Favorites</div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search in Itzik Favorites"
        className={styles.search}
      />
    </div>
  );
};

export default Navbar;
