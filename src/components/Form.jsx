import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form action="">
        <input
          type="text"
          data-testid="name-input"
          name="name"
          id="name"
          value={ cardName }
          onChange={ onInputChange }
        />
        <textarea
          name="description"
          id="description"
          data-testid="description-input"
          cols="30"
          rows="10"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <input
          type="number"
          data-testid="attr1-input"
          name="attr1"
          id="attr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <input
          type="number"
          data-testid="attr2-input"
          name="attr2"
          id="attr3"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <input
          type="number"
          data-testid="attr3-input"
          name="attr3"
          id="attr2"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <input
          type="text"
          data-testid="image-input"
          name="image"
          id="image"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <select
          data-testid="rare-input"
          name="rareInput"
          id="rareInput"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal"> normal </option>
          <option value="raro"> raro </option>
          <option value="muito raro"> muito raro </option>
        </select>
        <input
          type="checkbox"
          data-testid="trunfo-input"
          name="trunfo"
          id="trunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
