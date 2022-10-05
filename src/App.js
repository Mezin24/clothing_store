import { categories } from './data';
import './categories.styles.scss';

const App = () => {
  return (
    <div className='categories-container'>
      {categories.map(({ title, id }) => (
        <div className='category-container' key={id}>
          <dir className='background-image' />
          <div className='category-body-container'>
            <h3 className='category-title'>{title}</h3>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
