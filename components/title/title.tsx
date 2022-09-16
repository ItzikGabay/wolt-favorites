import styles from './title.module.scss';
import { FunctionComponent, ReactElement } from 'react';

interface ITitleProps {
  label: any;
}

const Title: FunctionComponent<ITitleProps> = ({ label }): ReactElement => {
  return <h1 className={styles.container}>{label}</h1>;
};

export default Title;
