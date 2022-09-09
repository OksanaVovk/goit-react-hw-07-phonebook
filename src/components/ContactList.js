import ContactItem from './ContactItem';
import React from 'react';

const ContactList = ({ contactArray, onDeleteCont }) => (
  <ul>
    {contactArray.map(contact => (
      <li key={contact.id}>
        <ContactItem
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteCon={onDeleteCont}
        />
      </li>
    ))}
  </ul>
);

export default ContactList;
