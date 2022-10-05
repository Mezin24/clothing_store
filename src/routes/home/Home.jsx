import categories from '../../categories.json';
import Categories from '../../components/categories/Categories';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Outlet />
      <Categories categories={categories} />;
    </>
  );
};

export default Home;
