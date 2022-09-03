import styles from './title.module.scss';
import { FunctionComponent } from 'react';

interface ITitleProps {
  label: any;
}

const Title: FunctionComponent<ITitleProps> = ({ label }) => {
  return <h1 className={styles.container}>{label}</h1>;
};

export default Title;
