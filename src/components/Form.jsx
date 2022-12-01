import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <input type="text" data-testid="name-input" name="name" id="name" />
        <textarea
          name="description"
          id="description"
          data-testid="description-input"
          cols="30"
          rows="10"
        />
        <input type="number" data-testid="attr1-input" name="attr1" id="attr1" />
        <input type="number" data-testid="attr2-input" name="attr2" id="attr3" />
        <input type="number" data-testid="attr3-input" name="attr3" id="attr2" />
        <input type="text" data-testid="image-input" name="image" id="image" />
        <select data-testid="rare-input" name="rareInput" id="rareInput">
          <option value="normal"> normal </option>
          <option value="raro"> raro </option>
          <option value="muito raro"> muito raro </option>
        </select>
        <input type="checkbox" data-testid="trunfo-input" name="trunfo" id="trunfo" />

        <button type="submit" data-testid="save-button"> Salvar </button>
      </form>
    );
  }
}

export default Form;
