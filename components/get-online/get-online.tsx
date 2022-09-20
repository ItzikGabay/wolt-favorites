import styles from './get-online.module.scss';
import { FunctionComponent, useEffect, useState } from 'react';
import { fetchRestaurants } from '../../lib/data';
import useSound from 'use-sound';
import translations from '../../lib/translations';

interface ITitleProps {
  id: string;
  isActive?: boolean;
  isOnline: string | boolean;
  setIsOnline: (isOnline: any) => void | any;
}

const GetOnline: FunctionComponent<ITitleProps> = ({
  id,
  isActive = false,
  isOnline,
  setIsOnline,
}) => {
  const [tryNum, setTryNum] = useState(1);
  const [inProcess, setInProcess] = useState(isActive);

  const [play] = useSound('/laugh.mp3');

  const reFetch = () => {
    setTimeout(() => {
      fetchRestaurants([id]).then(res => {
        console.debug('[debug] -> res -> ', res);
        const onlineResult = res.restaurants[0].online;
        setIsOnline(onlineResult);
        if (!!onlineResult) {
          play();
          setIsOnline(true);
          setInProcess(false);
          setTryNum(1);
        } else {
          setTryNum(prevState => prevState + 1);
        }
      });
    }, 5000);
  };

  useEffect(() => {
    if (!isOnline && inProcess) {
      reFetch();
    } else {
      setInProcess(false);
      setTryNum(1);
    }
  }, [tryNum, inProcess]);

  return (
    <button
      className={`${styles.container} ${inProcess && styles.active}`}
      onClick={() => (inProcess ? setInProcess(false) : setInProcess(true))}>
      {inProcess
        ? `${translations.get_restaurant_active} (${tryNum}x)`
        : translations.get_restaurant_online}
    </button>
  );
};

export default GetOnline;
