import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validations = this.validations.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  validations = () => {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const validateNameDescImgRare = cardName.length > 0
    && cardDescription.length > 0
    && cardImage.length > 0
    && cardRare.length > 0;

    const maxAttributes = 90;
    const maxSumAttributes = 210;
    const validateAttribute = Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxAttributes
    && Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxAttributes
    && Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxAttributes
    && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSumAttributes;

    if (validateAttribute && validateNameDescImgRare) {
      this.setState({ isSaveButtonDisabled: false });
    }
    if (!validateAttribute || !validateNameDescImgRare) {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onInputChange = (e) => {
    this.setState(() => {
      const value = (e.target.type === 'checkbox') ? e.target.checked : e.target.value;
      return { [e.target.name]: value };
    }, this.validations);
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
