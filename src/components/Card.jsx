import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
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
    } = this.props;
    return (
      <>
        <p data-testid="name-card">
          Nome:
          {' '}
          <span>{cardName}</span>
        </p>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">
          Descrição:
          {' '}
          <span>{cardDescription}</span>
        </p>
        <p data-testid="attr1-card">
          Atributo 1:
          {' '}
          <span>{cardAttr1}</span>
        </p>
        <p data-testid="attr2-card">
          Atributo 2:
          {' '}
          <span>{cardAttr2}</span>
        </p>
        <p data-testid="attr3-card">
          Atributo 3:
          {' '}
          <span>{cardAttr3}</span>
        </p>
        <p data-testid="rare-card">
          Raridade:
          {' '}
          <span>{cardRare}</span>
        </p>
        {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
      </>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
