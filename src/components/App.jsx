import { useSelector, useDispatch } from 'react-redux';
import { add, remove, changeFilter } from '../redux/actions';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

export default function App() {
  const valueItems = useSelector(state => state.contacts.items);
  const valueFilter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  let filtId = nanoid();

  const handleFilterChange = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  const onFormSubmit = data => {
    const isRepead = valueItems.some(contact =>
      contact.name.toLowerCase().includes(data.name.toLowerCase())
    );
    isRepead
      ? alert(`${data.name} is already in contacts`)
      : dispatch(add(data));
  };

  const getVisiableContacts = () => {
    const normalizedFilter = valueFilter.toLowerCase();
    return valueItems.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteCont = contId => {
    dispatch(remove(contId));
  };

  const visiableContacts = getVisiableContacts();
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onFormSubmit} />
      <h2>Contacts</h2>
      <Filter id={filtId} value={valueFilter} onChange={handleFilterChange} />
      <ContactList contactArray={visiableContacts} onDeleteCont={deleteCont} />
    </div>
  );
}
