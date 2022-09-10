import styles from './card-item.module.scss';
import { FunctionComponent, useEffect } from 'react';
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

  // Whenever user clicking on button "Order With Itzik",
  // We're sending the user to the endpoint of Whatsapp API.
  const onClickOrderWith = async () => {
    const link = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=`;
    const message = `Pleaseeee order with me ${name}!`;

    // In order to support URL encoding, we're using encodeURIComponent.
    const messageEncoded = encodeURIComponent(message);
    const endpoint = `${link}${messageEncoded}`;

    window.open(endpoint, '_blank');
  };

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
        <div>
          <div className={styles.title}>{name}</div>
          <div className={styles.subtitle}>{address}</div>
        </div>
        <div className={styles.order_with_me} onClick={onClickOrderWith}>
          Order with Itzik
        </div>
      </main>
      <footer className={styles.footer}>
        {showPrice && <div>₪{price}</div>}
        <span>&#183;</span>
        {showTime && <div>{time} min</div>}
      </footer>
    </div>
  );
};

export default CardItem;
