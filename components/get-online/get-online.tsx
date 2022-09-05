import styles from './get-online.module.scss';
import { FunctionComponent, useEffect, useState } from 'react';
import { fetchRestaurants } from '../../lib/data';
import useSound from 'use-sound';

interface ITitleProps {
  id: string;
  isActive?: boolean;
}

const GetOnline: FunctionComponent<ITitleProps> = ({
  id,
  isActive = false,
}) => {
  const [isOnline, setIsOnline] = useState(false);
  const [tryNum, setTryNum] = useState(1);
  const [inProcess, setInProcess] = useState(isActive);

  const [play] = useSound('/laugh.mp3');

  const reFetch = () => {
    setTimeout(() => {
      fetchRestaurants([id]).then(res => {
        const onlineResult = res[0].results[0].online;
        setIsOnline(onlineResult);
        if (!!onlineResult) {
          play();
        } else {
          setTryNum(prevState => prevState + 1);
        }
      });
    }, 3000);
  };

  useEffect(() => {
    if (!isOnline && inProcess) {
      reFetch();
    } else {
      setInProcess(false);
    }
  }, [tryNum, inProcess]);

  return (
    <button
      className={`${styles.container} ${inProcess && styles.active}`}
      onClick={() => setInProcess(true)}
      disabled={inProcess}>
      {inProcess ? `Getting online (${tryNum}x) 🫣` : 'Get online 🐹'}
    </button>
  );
};

export default GetOnline;
