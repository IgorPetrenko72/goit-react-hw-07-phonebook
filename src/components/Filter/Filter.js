import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import './Filter.css';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
   
    <label className='filter'>
      <p>Find contacts by name</p>
      <input
      className='filter__input'
      type="text"
        onChange={e => {
          const action = filterContact(e.target.value);
          dispatch(action);
        }}
      />
    </label>
  );
};