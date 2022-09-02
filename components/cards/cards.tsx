import styles from './cards.module.scss';
import CardItem from "./components/card-item/card-item";

const Cards = () => {
    return <div className={styles.container}>
        <CardItem price={15} time="30-40"/>
        <CardItem price={15} time="30-40"/>
        <CardItem price={15} time="30-40"/>
        <CardItem price={15} time="30-40"/>
    </div>
}

export default Cards;