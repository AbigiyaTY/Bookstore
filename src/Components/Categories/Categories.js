import { useDispatch } from 'react-redux';
import categoryActionReducer from '../../redux/categories/categories';
import './Categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <div className="container catContainer">
      <div className="row">
        <hr className="col-12" />
        <button
          type="button"
          className="col-4  my-2 py-5 px-3 catButton "
          onClick={() => {
            dispatch(categoryActionReducer());
          }}
        >
          Check status
        </button>
      </div>
    </div>
  );
};
export default Categories;
