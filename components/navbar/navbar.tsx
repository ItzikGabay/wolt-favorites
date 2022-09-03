import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>Itzik Favorites</div>
      <input
        type="text"
        placeholder="Search in Itzik Favorites"
        className={styles.search}
      />
    </div>
  );
};

export default Navbar;
