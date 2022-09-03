import styles from './cards.module.scss';
import CardItem from "./components/card-item/card-item";
import {FunctionComponent} from "react";

const Cards: FunctionComponent = ({data}) => {
    const cards = Array.isArray(data) && data?.map((card) => {
        card = card.results[0];
        return <CardItem key={card.name} name={card.name[1].value} address={card.address} price={15} time={card.completion_estimates.delivery_rush} online={card.online}/>
        }
    );
    return (
        <div className={styles.container}>
            {cards}
        </div>
    )
}

export default Cards;