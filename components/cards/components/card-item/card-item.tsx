import styles from './card-item.module.scss';
import { FunctionComponent } from 'react';
import GetOnline from '../../../get-online/get-online';

interface ICardProps {
  price: number;
  time: string;
  name: string;
  slug: string;
  online: string;
  address: string;
  showPrice?: boolean;
  showTime?: boolean;
  image: string;
}

const CardItem: FunctionComponent<ICardProps> = ({
  name,
  address,
  slug,
  online,
  price,
  time,
  showPrice = true,
  showTime = true,
  image,
}) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div
          className={`${styles.rest_image} ${!online && styles.closed}`}
          style={{
            backgroundImage: `url("${image}")`,
          }}>
          <div className={styles.get_online}>
            {!online && <GetOnline id={name} />}
          </div>
        </div>
      </header>
      <main className={styles.content}>
        <div className={styles.title}>{name}</div>
        <div className={styles.subtitle}>{address}</div>
      </main>
      <footer className={styles.footer}>
        {showPrice && <div>₪{15}</div>}
        <span>&#183;</span>
        {showTime && <div>{'30-40'} min</div>}
      </footer>
    </div>
  );
};

export default CardItem;
