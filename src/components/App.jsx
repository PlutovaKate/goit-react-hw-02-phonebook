import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import css from './App.module.css';

export class App extends Component {
  // state = {
  //   contacts: [],
  //   name: '',
  // };

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        {/* <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>
          <label>Number</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>
          <button>Add Contacts</button>
        </form> */}
        <h2>Contacts</h2>
        <label>Find contacts by name</label>
        <input></input>
        <ul>
          <li>
            qweqwe
            <button>Delete</button>
          </li>
          <li>
            qweqwe
            <button>Delete</button>
          </li>
          <li>
            qweqwe
            <button>Delete</button>
          </li>
          <li>
            qweqwe
            <button>Delete</button>
          </li>
        </ul>
      </div>
    );
  }
}
