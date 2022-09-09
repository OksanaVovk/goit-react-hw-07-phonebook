import React from 'react';

const ContactItem = ({ id, name, number, onDeleteCon }) => (
  <div className="item_cont">
    {name}:<span>{number}</span>
    <button onClick={() => onDeleteCon(id)}>Delete</button>
  </div>
);

export default ContactItem;
