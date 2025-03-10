import React from 'react';
import MainLayout from 'layouts/MainLayout';
import PageHeader from 'components/_pages/PageHeader';
import ContactSection from 'components/_pages/Contact/ContactSection';

const Contact: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader title='Contact Us' />
      <ContactSection />
    </MainLayout>
  );
};

export default Contact;
