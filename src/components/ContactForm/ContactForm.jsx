import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    id: '',
    number: '',
  };
  handleChange = event => {
    const { name, value, number } = event.currentTarget;
    this.setState({ [name]: value, [number]: value });
  };
  onFormSubmit = event => {};
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className={css.form}>
        <label className={css.label}>Name</label>
        <input
          onChange={this.handleChange}
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></input>
        <label className={css.label}>Number</label>
        <input
          onChange={this.handleChange}
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></input>
        <button type="submit" className={css.formBtn}>
          Add Contacts
        </button>
      </form>
    );
  }
}

export default ContactForm;
