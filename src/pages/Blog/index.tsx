import React from 'react';
import MainLayout from 'layouts/MainLayout';
import PageHeader from 'components/_pages/PageHeader';
import BlogSection from 'components/_pages/Blog/BlogSection';

const Project: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader title='Our Blog' />
      <BlogSection />
    </MainLayout>
  );
};

export default Project;
