import styles from './cards.module.scss';
import CardItem from './components/card-item/card-item';
import { FunctionComponent } from 'react';
import {RestaurantProps} from "../../interfaces/Restaurant";

interface ICardsProps {
  data: any;
}


const Cards: FunctionComponent<ICardsProps> = ({ data }) => {
  const cards = data.map((card: RestaurantProps) => {
    if (card !== null) {
      return (
        <CardItem
          key={card.name[1].value}
          slug={card.slug}
          name={card.name[1].value}
          address={card.address}
          image={card.listimage}
          price={15}
          time={card.completion_estimates}
          online={card.online}
        />
      );
    }
  });
  return <div className={styles.container}>{cards}</div>;
};

export default Cards;
