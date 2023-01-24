import React from 'react';
import PropTypes from 'prop-types';
import SuperTrunfoImg from './SuperTrunfoImg';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardAttr1Name,
      cardAttr2Name,
      cardAttr3Name,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="card">
        <p data-testid="name-card">
          Nome:
          {' '}
          <span>{cardName}</span>
        </p>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="image-card"
        />
        <p data-testid="description-card">
          Descrição:
          {' '}
          <span>{cardDescription}</span>
        </p>
        <p data-testid="attr1-card">
          <span>
            {cardAttr1Name}
            {' '}
            :
          </span>
          {' '}
          <span>{cardAttr1}</span>
        </p>
        <p data-testid="attr2-card">
          <span>
            {cardAttr2Name}
            {' '}
            :
          </span>
          {' '}
          <span>{cardAttr2}</span>
        </p>
        <p data-testid="attr3-card">
          <span>
            {cardAttr3Name}
            {' '}
            :
          </span>
          {' '}
          <span>{cardAttr3}</span>
        </p>
        <p data-testid="rare-card">
          Raridade:
          {' '}
          <span>{cardRare}</span>
        </p>
        {cardTrunfo
        && <SuperTrunfoImg />}
      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardAttr1Name: PropTypes.string.isRequired,
  cardAttr2Name: PropTypes.string.isRequired,
  cardAttr3Name: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
