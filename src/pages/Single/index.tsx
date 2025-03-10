import React from 'react';
import MainLayout from 'layouts/MainLayout';
import PageHeader from 'components/_pages/PageHeader';
import SingleSection from 'components/_pages/Single/SingleSection';

const Project: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader title='Our Single' />
      <SingleSection />
    </MainLayout>
  );
};

export default Project;
