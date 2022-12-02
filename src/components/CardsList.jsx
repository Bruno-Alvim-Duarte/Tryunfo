import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardsList extends React.Component {
  render() {
    const { cards } = this.props;
    return (
      <ul>
        {cards.map((card) => (
          <li key={ card.cardName }>
            <Card
              { ...card }
            />
          </li>
        ))}
      </ul>
    );
  }
}

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default CardsList;
