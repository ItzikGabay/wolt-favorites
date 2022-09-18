import styles from './cards.module.scss';
import CardItem from './components/card-item/card-item';
import { FunctionComponent } from 'react';
import { RestaurantProps } from '../../interfaces/Restaurant';
import translations from '../../lib/translations';

interface ICardsProps {
  data: RestaurantProps[];
}

const Cards: FunctionComponent<ICardsProps> = ({ data }) => {
  const cards = data
    .map((card: RestaurantProps) => {
      if (card !== null && !!card.name) {
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
    })
    .filter(item => item);

  const renderCards = !!cards.length ? (
    cards
  ) : (
    <p>{translations.no_restaurant_found}</p>
  );

  return <div className={styles.container}>{renderCards}</div>;
};

export default Cards;
