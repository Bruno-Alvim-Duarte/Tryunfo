import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardsList extends React.Component {
  render() {
    const { cards, onDeleteButtonClick, onInputChange, nameFilter } = this.props;
    const filteredList = cards.filter((card) => card.cardName.includes(nameFilter));
    return (
      <>
        <input
          type="text"
          data-testid="name-filter"
          name="nameFilter"
          onChange={ onInputChange }
          value={ nameFilter }
        />
        <ul>
          {filteredList.map((card) => (
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
      </>
    );
  }
}

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
};

export default CardsList;
