import React, { Component } from 'react';
import Form from './components/Form';
import './app.css';

export default class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <Form />
      </>
    );
  }
}
