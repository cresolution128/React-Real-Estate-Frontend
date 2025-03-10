import React from 'react';
import MainLayout from 'layouts/MainLayout';
import PageHeader from 'components/_pages/PageHeader';
import ProjectSection from 'components/_pages/Project/ProjectSection';

const Project: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader title='Our Project' />
      <ProjectSection />
    </MainLayout>
  );
};

export default Project;
