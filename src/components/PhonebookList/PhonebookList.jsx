import PropTypes from 'prop-types';
import React from 'react';
import PhonebookItem from '../PhonebookItem';
import { ContactList, ContactItem } from './PhonebookList.styled';

export default function PhonebookList({ contacts, onDelContact }) {
  return (
    <ContactList>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <PhonebookItem
            name={name}
            number={number}
            onDelContact={() => onDelContact(id)}
          />
        </ContactItem>
      ))}
    </ContactList>
  );
}

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelContact: PropTypes.func.isRequired,
};
