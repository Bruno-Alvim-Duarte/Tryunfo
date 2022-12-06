import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardsList extends React.Component {
  render() {
    const { cards, onDeleteButtonClick } = this.props;
    return (
      <ul>
        {cards.map((card) => (
          <li key={ card.cardName }>
            <Card
              { ...card }
            />
            <button
              data-testid="delete-button"
              type="button"
              onClick={ onDeleteButtonClick }
              id={ card.id }
            >
              Excluir

            </button>
          </li>
        ))}
      </ul>
    );
  }
}

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default CardsList;
