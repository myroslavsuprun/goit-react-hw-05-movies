import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
