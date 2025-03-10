import Container from 'components/_ui/Container';
import React, { useState } from 'react';
import AccordionCard from './AccordionCard';
import styles from './styles.module.scss';

const leftFaqs = [
  {
    title: 'Lorem ipsum dolor sit amet?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.',
  },
  {
    title: 'Lorem ipsum dolor sit amet?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.',
  },
  {
    title: 'Lorem ipsum dolor sit amet?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.',
  },
  {
    title: 'Lorem ipsum dolor sit amet?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.',
  },
  {
    title: 'Lorem ipsum dolor sit amet?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.',
  },
];

const rightFaqs = [
  {
    title: 'Lorem ipsum dolor sit amet?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.',
  },
  {
    title: 'Lorem ipsum dolor sit amet?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.',
  },
  {
    title: 'Lorem ipsum dolor sit amet?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.',
  },
  {
    title: 'Lorem ipsum dolor sit amet?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.',
  },
  {
    title: 'Lorem ipsum dolor sit amet?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.',
  },
];

const FAQsSection: React.FC = () => {
  const [leftOpenedIndex, setLeftOpenedIndex] = useState(-1);
  const [rightOpenedIndex, setRightOpenedIndex] = useState(-1);
  return (
    <section>
      <Container className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <p className={styles.logoText}>Frequently Asked Question</p>
          <h2 className={styles.heading}>You May Ask</h2>
        </div>
        <div className={styles.accordion}>
          <div>
            {leftFaqs.map((faq, index) => (
              <AccordionCard
                key={index}
                index={index}
                title={faq.title}
                description={faq.description}
                isOpened={leftOpenedIndex === index}
                setIsOpened={setLeftOpenedIndex}
              />
            ))}
          </div>
          <div>
            {rightFaqs.map((faq, index) => (
              <AccordionCard
                key={index}
                index={index}
                title={faq.title}
                description={faq.description}
                isOpened={rightOpenedIndex === index}
                setIsOpened={setRightOpenedIndex}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
export default FAQsSection;
