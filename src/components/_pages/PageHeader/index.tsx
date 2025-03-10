import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

type Props = {
  title: string;
};
const PageHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.linkWrapper}>
        <Link to='/' className={styles.link1}>
          Home
        </Link>
        <p className={styles.symbol}>/</p>
        <Link to='' className={styles.link2}>
          {title}
        </Link>
      </div>
    </div>
  );
};

export default PageHeader;
