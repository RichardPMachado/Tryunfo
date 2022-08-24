import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './app.css';

export default class App extends Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'Normal',
    cardTrunfo: false,
    // hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const {
        cardName, cardDescription, cardAttr1,
        cardAttr2, cardAttr3, cardImage, cardRare,
      } = this.state;
      const min = 0;
      const max = 90;
      const maxTotal = 210;
      const somaAtributos = +cardAttr1 + +cardAttr2 + +cardAttr3;

      if (cardName && cardDescription
        && cardImage && cardRare
        && cardAttr1 <= max
        && cardAttr2 <= max
        && cardAttr3 <= max
        && cardAttr1 >= min
        && cardAttr2 >= min
        && cardAttr3 >= min
        && somaAtributos <= maxTotal
      ) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  };

  onSaveButtonClick = ({ target }) => {
    console.log(target);
    // this.setState((prevState) => ({
    //   data: [...prevState.data, objInfo],
    //   previewOn: true,
    // }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      previewOn,
      data,
    } = this.state;
    return (
      <>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <main className="container">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            key={ cardName }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
          {
            previewOn === true && data.map((e) => (<Card
              cardName={ e.cardName }
              cardDescription={ e.cardDescription }
              cardAttr1={ e.cardAttr1 }
              cardAttr2={ e.cardAttr2 }
              cardAttr3={ e.cardAttr3 }
              cardImage={ e.cardImage }
              cardRare={ e.cardRare }
              cardTrunfo={ e.cardTrunfo }
              key={ e.cardName }
            />))
          }
        </main>
      </>
    );
  }
}
