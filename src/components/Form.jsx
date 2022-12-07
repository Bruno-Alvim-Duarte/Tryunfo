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
      <form action="" className="form-register-card">
        <h1 className="register-card-h1">ADICIONE NOVA CARTA</h1>
        <label
          htmlFor="cardName"
          className="register-card-label-type1 register-card-text"
        >
          Nome
          <input
            type="text"
            data-testid="name-input"
            name="cardName"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
            className="register-card-input-type1"
          />
        </label>
        <label
          htmlFor="cardDescription"
          className="register-card-label-type1 register-card-text"
        >
          Descrição
          <textarea
            name="cardDescription"
            id="cardDescription"
            data-testid="description-input"
            cols="30"
            rows="10"
            value={ cardDescription }
            onChange={ onInputChange }
            className="register-card-input-type1"
          />
        </label>
        <label
          htmlFor="cardAttr1"
          className="register-card-label-type2 register-card-text"
        >
          Attr01
          <input
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            id="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            className="register-card-input-type2"
          />
        </label>
        <label
          htmlFor="cardAttr2"
          className="register-card-label-type2 register-card-text"
        >
          Attr02
          <input
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            id="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            className="register-card-input-type2"
          />
        </label>
        <label
          htmlFor="cardAttr3"
          className="register-card-label-type2 register-card-text"
        >
          Attr03
          <input
            type="number"
            data-testid="attr3-input"
            name="cardAttr3"
            id="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            className="register-card-input-type2"
          />
        </label>
        <label
          htmlFor="cardImage"
          className="register-card-label-type2 register-card-text"
        >
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="cardImage"
            id="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            className="register-card-input-type2"
          />
        </label>
        <label
          htmlFor="cardRare"
          className="register-card-label-type1 register-card-text"
        >
          Raridade
          <select
            data-testid="rare-input"
            name="cardRare"
            id="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            placeholder="normal"
            className="register-card-input-type1"
          >
            <option value="normal"> normal </option>
            <option value="raro"> raro </option>
            <option value="muito raro"> muito raro </option>
          </select>
        </label>
        <div className="trunfo-save">
          { !hasTrunfo ? <input
            type="checkbox"
            data-testid="trunfo-input"
            name="cardTrunfo"
            id="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
            : <p>Você já tem um Super Trunfo em seu baralho</p>}

          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
