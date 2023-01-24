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
        <h2 data-testid="name-card">{cardName}</h2>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="image-card"
        />
        <p data-testid="description-card">
          {cardDescription}
        </p>
        <ul>
          <li data-testid="attr1-card">
            <h3>{cardAttr1Name}</h3>
            <span>{cardAttr1}</span>
          </li>
          <li data-testid="attr2-card">
            <h3>{cardAttr2Name}</h3>
            <span>{cardAttr2}</span>
          </li>
          <li data-testid="attr3-card">
            <h3>{cardAttr3Name}</h3>
            <span>{cardAttr3}</span>
          </li>
        </ul>
        <div>
          <span data-testid="rare-card" className="card--rare">{cardRare}</span>
          {cardTrunfo
        && <SuperTrunfoImg />}
        </div>
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
