import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors.js';
import { selectError } from 'redux/selectors.js';
import { Filter } from 'components/Filter/Filter';
import './components/ContactForm/ContactForm'
import { Loader } from 'components/Loader/loader';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);


  return (
    <>
    {error && <p>{error}</p>}

    {isLoading? (<Loader/>
      ) : (
          <div className="phonebook">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactList /> 
      </div>  
      )}
    </>
  );
};