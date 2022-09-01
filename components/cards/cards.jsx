import styles from './cards.module.scss';
import CardItem from "./components/card-item/card-item";

const Cards = () => {
    return <div className={styles.container}>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
    </div>
}

export default Cards;