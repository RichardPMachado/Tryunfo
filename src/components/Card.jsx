import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
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
      btnDelete,
      index,
    } = this.props;

    const buttonDelete = (
      <button
        onClick={ () => btnDelete(index) }
        type="button"
        data-testid="delete-button"
      >
        Excluir
      </button>
    );

    return (
      <>
        <section className="card-area">
          <h2 data-testid="name-card">{ cardName }</h2>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p data-testid="description-card">{ cardDescription }</p>
          <p data-testid="attr1-card">{ cardAttr1 }</p>
          <p data-testid="attr2-card">{ cardAttr2 }</p>
          <p data-testid="attr3-card">{ cardAttr3 }</p>
          <p data-testid="rare-card">{ cardRare }</p>
          { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : <p>Normal</p> }
        </section>
        {
          (cardName ? buttonDelete : '')
        }
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  btnDelete: PropTypes.func,
}.isRequired;
