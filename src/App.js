import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: 'normal',
      cardTrunfo: 'off',
      hasTrunfo: false,
      isSaveButtonDisabled: false,
    };
  }

  onInputChange = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    console.log('clickou no botão salvar');
  };

  render() {
    return (
      <div>
        <h1>My Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...this.state }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
