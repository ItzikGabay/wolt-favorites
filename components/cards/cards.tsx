import styles from './cards.module.scss';
import CardItem from './components/card-item/card-item';
import { FunctionComponent } from 'react';

interface ICardsProps {
  data: any;
}

interface ICardProps {
  results: any[] | null;
  name: any;
  address: string;
  completion_estimates: { delivery_rush: string };
  online: string;
  key: object | string | undefined;
}

const Cards: FunctionComponent<ICardsProps> = ({ data }) => {
  const cards = data.map((card: ICardProps) => {
    if (card.results != null) {
      card = card.results[0];
      return (
        <CardItem
          key={card.name}
          name={card.name[1].value}
          address={card.address}
          price={15}
          time={card.completion_estimates.delivery_rush}
          online={card.online}
        />
      );
    }
  });
  return <div className={styles.container}>{cards}</div>;
};

export default Cards;
