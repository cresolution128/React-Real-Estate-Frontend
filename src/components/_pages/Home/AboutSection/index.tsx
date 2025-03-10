import React from 'react';
import styles from './styles.module.scss';
import Container from 'components/_ui/Container';
import Button from 'components/_ui/Button';
import { Link } from 'react-router-dom';
import image from 'assets/img/about.jpg';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const AboutSection: React.FC = () => {
  return (
    <section>
      <AnimationOnScroll animateIn='animate__bounceIn'>
        <Container className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <img src={image} alt='About Image' className={styles.image} />
          </div>
          <div className={styles.textWrapper}>
            <p className={styles.logoText}>Welcome to Builderz</p>
            <h2 className={styles.title}>25 Years Experience</h2>
            <div className=''>
              <p className={styles.Description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                viverra quis sem.
              </p>
              <p className={styles.Description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                viverra quis sem. Curabitur non nisl nec nisi scelerisque
                maximus. Aenean consectetur convallis porttitor. Aliquam
                interdum at lacus non blandit.
              </p>
              <Link to=''>
                <Button isBig type='button'>
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </AnimationOnScroll>
    </section>
  );
};
