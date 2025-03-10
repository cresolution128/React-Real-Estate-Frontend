import React from 'react';
import MainLayout from 'layouts/MainLayout';
import PageHeader from 'components/_pages/PageHeader';
import ServiceSection from 'components/_pages/Home/ServiceSection';
import FAQsSection from 'components/_pages/Home/FAQsSection';

const Service: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader title='Our Service' />
      <ServiceSection />
      <FAQsSection />
    </MainLayout>
  );
};

export default Service;
