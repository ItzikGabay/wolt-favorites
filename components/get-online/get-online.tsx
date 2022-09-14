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
        const onlineResult = res[0].online;
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
      onClick={() => inProcess ? setInProcess(false) : setInProcess(true)}>
      {inProcess ? `Looking.. (${tryNum}x)` : 'Get online 🐹'}
    </button>
  );
};

export default GetOnline;
