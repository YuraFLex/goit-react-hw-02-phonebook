import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from '../constans';
import PhonebookFrom from './PhonebookForm';
import Filter from './Filter';
import PhonebookList from './PhonebookList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const contact = {
      id: nanoid(),
      ...data,
    };

    this.setState({
      contacts: [contact, ...this.state.contacts],
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { value } = this.state;
    const addContact = this.addContact;
    const visibleContacts = this.getFilteredContacts();

    return (
      <Box as="main">
        <Box as="section" display="flex" justifyContent="center" py={4}>
          <Box
            as="div"
            width={600}
            bg="backgroundSecondary"
            borderRadius="normal"
            boxShadow="normal"
            p={4}
          >
            <PhonebookFrom onSubmit={addContact} />

            <Filter value={value} onChange={this.changeFilter} />
            <PhonebookList
              contacts={visibleContacts}
              onDelContact={this.deleteContact}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}
export default App;
