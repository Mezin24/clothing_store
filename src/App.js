import Home from './routes/home/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const Shop = () => {
  return <h1>I am a shop!</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
