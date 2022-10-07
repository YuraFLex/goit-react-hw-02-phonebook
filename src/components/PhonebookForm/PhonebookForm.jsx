import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Form,
  FormTitle,
  FormLabel,
  FormText,
  FormInput,
  Button,
} from './PhonebookForm.styled';

class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormTitle>PhoneBook</FormTitle>
        <FormLabel>
          <FormText>Name</FormText>
          <FormInput
            onChange={this.handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Ivan Ivanov"
          />
        </FormLabel>
        <FormLabel>
          <FormText>Number</FormText>
          <FormInput
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="123-45-67"
          />
        </FormLabel>
        <Button type="submit"> + Add contact</Button>
      </Form>
    );
  }
}

PhonebookForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default PhonebookForm;
