import React from 'react';
import Card from './components/Card';
import Cardslist from './components/CardsList';
import Form from './components/Form';
import generateRandomKey from './helpers/generateRandomKey';
import logo from './img/logo_tryunfo.png';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validations = this.validations.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.cleanState = this.cleanState.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      nameFilter: '',
      rareFilter: 'todas',
      trunfoFilter: false,
      isOtherFiltersDisabled: false,
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
    const { isOtherFiltersDisabled } = this.state;
    this.setState(() => {
      if (e.target.type === 'checkbox' && e.target.name === 'cardTrunfo') {
        return { [e.target.name]: e.target.checked };
      } if (e.target.type === 'checkbox' && e.target.name === 'trunfoFilter') {
        return { [e.target.name]: e.target.checked,
          isOtherFiltersDisabled: !isOtherFiltersDisabled };
      }
      return { [e.target.name]: e.target.value };
    }, this.validations);
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const { cards, cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3, cardTrunfo, hasTrunfo } = this.state;
    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }
    this.setState({ cards: [...cards, {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      id: generateRandomKey(),
    }] }, this.cleanState);
  };

  onDeleteButtonClick = (e) => {
    this.setState(() => {
      const { cards } = this.state;
      const deletedCard = cards.find((card) => card.id
    === e.target.id);
      console.log(deletedCard);
      const newCards = cards.filter((card) => card !== deletedCard);
      return { cards: newCards, hasTrunfo: !deletedCard.cardTrunfo };
    });
  };

  cleanState = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  render() {
    const { cards } = this.state;
    return (
      <div>
        <img src={ logo } alt="logo tryunfo" />
        <div className="display-register-card">

          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />

          <div>
            <h1 className="pre-visualizer-h1">PRÉ-VISUALIZAÇÃO</h1>
            <div className="pre-visualizer-card">
              <Card
                { ...this.state }
                onInputChange={ this.onInputChange }
              />
            </div>
          </div>

        </div>
        <Cardslist
          { ...this.state }
          cards={ cards }
          onDeleteButtonClick={ this.onDeleteButtonClick }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
