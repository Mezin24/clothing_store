import categories from '../../categories.json';
import Categories from '../../components/categories/Categories';

const Home = () => {
  return (
    <>
      <Categories categories={categories} />;
    </>
  );
};

export default Home;
