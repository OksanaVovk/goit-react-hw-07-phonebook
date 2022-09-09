import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../redux/actions';
import { useFetchContactsQuery } from 'redux/reducer';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

export default function App() {
  const { data } = useFetchContactsQuery();
  const valueFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  let filtId = nanoid();

  const handleFilterChange = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  const getVisiableContacts = () => {
    if (data) {
      const normalizedFilter = valueFilter.toLowerCase();
      return data.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const visiableContacts = getVisiableContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter id={filtId} value={valueFilter} onChange={handleFilterChange} />
      {data && (
        <ContactList contactArray={valueFilter ? visiableContacts : data} />
      )}
    </div>
  );
}
