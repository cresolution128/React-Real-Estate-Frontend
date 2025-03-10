import React from 'react';
import FactCard from './FactCard';
import styles from './styles.module.scss';

const factList = [
  {
    color: 'primary',
    icon: 'worker',
    title: 109,
    description: 'EXPERT WORKERS',
  },
  {
    color: 'primary',
    icon: 'building',
    title: 485,
    description: 'HAPPY CLIENTS',
  },
  {
    color: 'secondary',
    icon: 'address',
    title: 789,
    description: 'COMPLETED PROJECTS',
  },
  {
    color: 'secondary',
    icon: 'crane',
    title: 890,
    description: 'RUNNING PROJECTS',
  },
];

export const FactSection: React.FC = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.leftPanel}>
          <FactCard {...factList[0]} />
          <FactCard {...factList[1]} />
        </div>
        <div className={styles.rightPanel}>
          <FactCard {...factList[2]} />
          <FactCard {...factList[3]} />
        </div>
      </div>
    </section>
  );
};
