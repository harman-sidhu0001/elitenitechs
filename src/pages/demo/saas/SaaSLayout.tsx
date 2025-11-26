import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const SaaSLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default SaaSLayout;