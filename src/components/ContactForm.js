import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useAddContactMutation } from 'redux/reducer';
import Spinner from './Spinner';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  let nameId = nanoid();
  let numbId = nanoid();
  const [createContact, { isLoading }] = useAddContactMutation();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    createContact({ name: name, phone: number });
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameId}>
        Name
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={numbId}>
        Number
        <input
          type="tel"
          value={number}
          name="phone"
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className="main_button" type="submit">
        {isLoading && <Spinner />}
        Add contact
      </button>
    </form>
  );
}
