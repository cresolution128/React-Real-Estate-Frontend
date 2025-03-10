import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { EmailSchema } from 'utils/schema/footer';
import styles from './styles.module.scss';
import Input from 'components/_ui/Input';
import Button from 'components/_ui/Button';
import Container from 'components/_ui/Container';

const Footer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EmailSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    console.log('data: ', data);
  };

  return (
    <div className={styles.wrapper}>
      <Container className={styles.containerWrapper}>
        <div className={styles.colWrapper}>
          <div className={styles.footerCol}>
            <div className={styles.title}>Office Contact</div>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p>123 Street, New York, USA</p>
            </div>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <p>+012 345 67890</p>
            </div>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>info@example.com</p>
            </div>
            <div className={styles.socialWrapper}>
              <div className={styles.socialIcon} role='button'>
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className={styles.socialIcon} role='button'>
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className={styles.socialIcon} role='button'>
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              <div className={styles.socialIcon} role='button'>
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className={styles.socialIcon} role='button'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
            </div>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.title}>Services Areas</div>
            <div className={styles.link} role='button'>
              <FontAwesomeIcon icon={faAngleRight} />
              <p>Building Construction</p>
            </div>
            <div className={styles.link} role='button'>
              <FontAwesomeIcon icon={faAngleRight} />
              <p>House Renovation</p>
            </div>
            <div className={styles.link} role='button'>
              <FontAwesomeIcon icon={faAngleRight} />
              <p>Architecture Design</p>
            </div>
            <div className={styles.link} role='button'>
              <FontAwesomeIcon icon={faAngleRight} />
              <p>Interior Design</p>
            </div>
            <div className={styles.link} role='button'>
              <FontAwesomeIcon icon={faAngleRight} />
              <p>Painting</p>
            </div>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.title}>Useful Pages</div>
            <div className={styles.link} role='button'>
              <FontAwesomeIcon icon={faAngleRight} />
              <p>About Us</p>
            </div>
            <div className={styles.link} role='button'>
              <FontAwesomeIcon icon={faAngleRight} />
              <p>Contact Us</p>
            </div>
            <div className={styles.link} role='button'>
              <FontAwesomeIcon icon={faAngleRight} />
              <p>Our Team</p>
            </div>
            <div className={styles.link} role='button'>
              <FontAwesomeIcon icon={faAngleRight} />
              <p>Projects</p>
            </div>
            <div className={styles.link} role='button'>
              <FontAwesomeIcon icon={faAngleRight} />
              <p>Testimonial</p>
            </div>
          </div>
          <div className={styles.footerCol}>
            <div className={styles.title}>Newsletter</div>
            <div>
              Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
              Curabitur facilisis ornare velit non vulpu
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <Input
                name='email'
                register={register('email')}
                error={null}
                placeholder='Email here'
              />
              <Button
                type='submit'
                buttonStyle='dark'
                className={styles.button}
              >
                SUBMIT
              </Button>
            </form>
          </div>
        </div>
        <div className={styles.footerBox}>
          <Link to='' className={styles.footerLink}>
            Terms of use
          </Link>
          <Link to='' className={styles.footerLink}>
            Privacy policy
          </Link>
          <Link to='' className={styles.footerLink}>
            Cookies
          </Link>
          <Link to='' className={styles.footerLink}>
            Help
          </Link>
          <Link to='' className={styles.footer}>
            FAQs
          </Link>
        </div>
        <div className={styles.footerEnd}>
          <p>
            &copy;{' '}
            <Link to='' className={styles.siteName}>
              Your Site Name
            </Link>
            , All Right Reserved.
          </p>
          <p>
            Designed By{' '}
            <Link to='https://htmlcodex.com' className={styles.siteName}>
              HTML Codex
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
