import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SuperTrunfo extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <div>
        <label htmlFor="cardTrunfo">
          Super Trunfo ?
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="cardTrunfo"
            id="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

SuperTrunfo.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SuperTrunfo;
