import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className=' min-h-[100vh] flex flex-col'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
