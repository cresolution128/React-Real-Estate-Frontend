import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ContactSchema } from 'utils/schema/contact';
import Container from 'components/_ui/Container';
import styles from './styles.module.scss';
import IconGroup from './IconGroup';
import Input from 'components/_ui/Input';
import Textarea from 'components/_ui/Textarea';
import Button from 'components/_ui/Button';

const iconGroupList = [
  {
    iconName: 'address',
    title: 'Location',
    description: '123 Street, New York, USA',
  },
  {
    iconName: 'call',
    title: 'Phone',
    description: '+012 345 6789',
  },
  {
    iconName: 'send-mail',
    title: 'Email Us',
    description: 'info@example.com',
  },
];
const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });
  const onSubmit = async (data: FieldValues) => {
    console.log('data: ', data);
  };
  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.textWrapper}>
          <p className={styles.logoText}>Get In Touch</p>
          <h2 className={styles.heading}>For Any Query</h2>
        </div>
        <div className={styles.contactWrapper}>
          <div className={styles.leftPanel}>
            {iconGroupList.map((item, index) => (
              <IconGroup
                key={index}
                iconName={item.iconName}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className={styles.rightPanel}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <Input
                className={styles.input}
                register={register('name')}
                error={errors.name}
                placeholder='Your Name'
              />
              <Input
                register={register('email')}
                error={errors.email}
                placeholder='Your Email'
              />
              <Input
                register={register('subject')}
                error={errors.subject}
                placeholder='Subject'
              />
              <Textarea
                className={styles.textarea}
                register={register('message')}
                error={errors.message}
                placeholder='Massage'
              />
              <Button
                buttonStyle='contact'
                type='submit'
                className={styles.button}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
