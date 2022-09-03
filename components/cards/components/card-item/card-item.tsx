import styles from './card-item.module.scss';
import { FunctionComponent } from 'react';

interface ICardProps {
  price: number;
  time: string;
  name: string;
  online: string;
  address: string;
  showPrice?: boolean;
  showTime?: boolean;
}

const CardItem: FunctionComponent<ICardProps> = ({
  name,
  address,
  online,
  price,
  time,
  showPrice = true,
  showTime = true,
}) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.rest_image}
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
        }}></div>
      <div className={styles.content}>
        <div className={styles.title}>{name}</div>
        <div className={styles.subtitle}>{address}</div>
        <div className={styles.subtitle}>{online ? 'ONLINE' : 'OFFLINE'}</div>
      </div>
      <div className={styles.footer}>
        {showPrice && <div>₪{15}</div>}
        <span>&#183;</span>
        {showTime && <div>{'30-40'} min</div>}
      </div>
    </div>
  );
};

export default CardItem;
