import Home from './routes/home/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import SignIn from './components/sign-in/SignIn';

const Shop = () => {
  return <h1>I am a shop!</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
