import React from 'react';

import Header from 'layouts/Header';
import Footer from 'layouts/Footer';

import styles from './style.module.scss';

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
