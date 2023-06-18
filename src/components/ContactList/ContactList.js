import { useDispatch, useSelector} from 'react-redux';
import { deleteContact } from '../../redux/operations.js';
import { selectVisibleContacts } from 'redux/selectors.js';
import './ContactList.css';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  
  return ( 
    <ul className='contactlist'>
      {visibleContacts.map(({ id, name, number }) => (
        <li
          className='contactlist__item'
          key={id}>
          <p>{name}: </p>
          <p>{number}</p>
          <button
            className='btn'
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};