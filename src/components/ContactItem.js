import React from 'react';
import { useDeleteContactMutation } from 'redux/reducer';
import Spinner from './Spinner';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isDeleting }] = useDeleteContactMutation();
  return (
    <li key={id}>
      <div className="item_cont">
        {name}:<span>{number}</span>
        <button onClick={() => deleteContact(id)} disabled={isDeleting}>
          {isDeleting && <Spinner />}
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactItem;
