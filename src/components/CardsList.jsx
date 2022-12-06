import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardsList extends React.Component {
  render() {
    const { cards, onDeleteButtonClick, onInputChange, nameFilter,
      rareFilter } = this.props;
    let filteredList = cards.filter((card) => card.cardName.includes(nameFilter));
    if (rareFilter !== 'todas') {
      filteredList = cards.filter((card) => card.cardName.includes(nameFilter)
      && card.cardRare === rareFilter);
    }
    return (
      <>
        <input
          type="text"
          data-testid="name-filter"
          name="nameFilter"
          onChange={ onInputChange }
          value={ nameFilter }
        />
        <label htmlFor="rareFilter">
          Filtro por raridade:
          <select
            name="rareFilter"
            id="rareFilter"
            onChange={ onInputChange }
            value={ rareFilter }
            data-testid="rare-filter"
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
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
  rareFilter: PropTypes.string.isRequired,
};

export default CardsList;
