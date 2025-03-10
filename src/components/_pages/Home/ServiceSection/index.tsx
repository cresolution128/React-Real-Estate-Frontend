import React from 'react';
import Container from 'components/_ui/Container';
import styles from './styles.module.scss';
import ServiceCard from './ServiceCard';
import firstImage from 'assets/img/service-1.jpg';
import secondImage from 'assets/img/service-2.jpg';
import thirdImage from 'assets/img/service-3.jpg';
import forthImage from 'assets/img/service-4.jpg';
import fifthImage from 'assets/img/service-5.jpg';
import sixthImage from 'assets/img/service-6.jpg';

const serviceList = [
  {
    image: firstImage,
    title: 'Building Construction',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.',
  },
  {
    image: secondImage,
    title: 'House Renovation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.',
  },
  {
    image: thirdImage,
    title: 'Architecture Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.',
  },
  {
    image: forthImage,
    title: 'Interior Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.',
  },
  {
    image: fifthImage,
    title: 'Fixing & Support',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.',
  },
  {
    image: sixthImage,
    title: 'Painting',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.',
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section>
      <Container className={styles.wrapper}>
        <div className={styles.heading}>
          <p className={styles.logoText}>Our Services</p>
          <h2 className={styles.headingText}>We Provide Services</h2>
        </div>
        <div className={styles.service}>
          {serviceList.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServiceSection;
