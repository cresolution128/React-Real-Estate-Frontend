import React from 'react';
import MainLayout from 'layouts/MainLayout';
import PageHeader from 'components/_pages/PageHeader';
import { AboutSection } from 'components/_pages/Home/AboutSection';
import FAQsSection from 'components/_pages/Home/FAQsSection';

const About: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader title='About Us' />
      <AboutSection />
      <FAQsSection />
    </MainLayout>
  );
};

export default About;
