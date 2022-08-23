import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

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
