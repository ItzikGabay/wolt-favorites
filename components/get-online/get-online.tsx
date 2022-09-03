import styles from './get-online.module.scss';
import { FunctionComponent, useEffect, useState } from 'react';
import { fetchRestaurants } from '../../lib/data';

interface ITitleProps {
  id: string;
  isActive?: boolean;
}

const GetOnline: FunctionComponent<ITitleProps> = ({
  id,
  isActive = false,
}) => {
  const [isOnline, setIsOnline] = useState(false);
  const [tryNum, setTryNum] = useState(0);
  const [inProcess, setInProcess] = useState(isActive);

  useEffect(() => {
    if (!isOnline && inProcess) {
      setTimeout(() => {
        fetchRestaurants(['vitrina']).then(res => {
          setIsOnline(res[0].results[0].online);
          setTryNum(prevState => prevState + 1);
        });
      }, 3000);
    } else {
      setInProcess(false);
    }
  }, [tryNum, inProcess]);

  return (
    <button
      className={`${styles.container} ${inProcess && styles.active}`}
      onClick={() => setInProcess(true)}
      disabled={inProcess}>
      {inProcess ? 'Fetching..' : 'Get online'}
    </button>
  );
};

export default GetOnline;
