import React from 'react';

import FeatureCard from './FeatureCard';

import styles from './styles.module.scss';

const featureList = [
  {
    color: 'primary',
    icon: 'worker',
    title: 'Expert Worker',
    description:
      'Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non',
  },
  {
    color: 'secondary',
    icon: 'building',
    title: 'Quality Work',
    description:
      'Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non',
  },
  {
    color: 'primary',
    icon: 'call',
    title: '24/7 Support',
    description:
      'Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non',
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section>
      {/* <ReactWOW animation='fadeIn'> */}
      <div className={styles.wrapper}>
        {featureList.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      {/* </ReactWOW> */}
    </section>
  );
};

export default FeatureSection;
