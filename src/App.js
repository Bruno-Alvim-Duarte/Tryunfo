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
      cardAttr1Name: 'Atributo 1',
      cardAttr2Name: 'Atributo 2',
      cardAttr3Name: 'Atributo 3',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      cards: [],
      nameFilter: '',
      rareFilter: 'todas',
      trunfoFilter: false,
      isOtherFiltersDisabled: false,
      isSaveButtonDisabled: true,
    };
  }

  componentDidMount() {
    const cardsStorage = JSON.parse(localStorage.getItem('cards'));
    if (cardsStorage) {
      this.setState({ cards: cardsStorage });
    }
  }

  validateAtributesNumbers = (validateNameDescImgRare) => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxAttributes = 90;
    const maxSumAttributes = 210;
    const validateAttribute = Number(cardAttr1) >= 0
    && Number(cardAttr1) <= maxAttributes
    && Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxAttributes
    && Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxAttributes
    && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)
    <= maxSumAttributes;

    if (validateAttribute && validateNameDescImgRare) {
      this.setState({ isSaveButtonDisabled: false });
    }
    if (!validateAttribute || !validateNameDescImgRare) {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  validations = () => {
    const { cardName, cardDescription, cardImage, cardRare,
    } = this.state;
    const validateNameDescImgRare = cardName.length > 0
    && cardDescription.length > 0
    && cardImage.length > 0
    && cardRare.length > 0;

    this.validateAtributesNumbers(validateNameDescImgRare);
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
      cardAttr1, cardAttr2, cardAttr3,
      cardAttr1Name, cardAttr2Name, cardAttr3Name,
      cardTrunfo, hasTrunfo } = this.state;
    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }
    const newObject = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardAttr1Name,
      cardAttr2Name,
      cardAttr3Name,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      id: generateRandomKey(),
    };
    this.setState({ cards: [...cards, newObject] }, this.cleanState);
    if (localStorage.getItem('cards')) {
      const cardsStorage = JSON.parse(localStorage.getItem('cards'));
      localStorage.setItem('cards', JSON.stringify([...cardsStorage, newObject]));
      return;
    }
    localStorage.setItem('cards', JSON.stringify([newObject]));
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
    const cardsStorage = JSON.parse(localStorage.getItem('cards'));
    const cardsFiltered = cardsStorage.filter((cardStorage) => cardStorage.id
      !== e.target.id);
    localStorage.setItem('cards', JSON.stringify([...cardsFiltered]));
  };

  cleanState = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardAttr1Name: 'Atributo 1',
      cardAttr2Name: 'Atributo 2',
      cardAttr3Name: 'Atributo 3',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  };

  render() {
    const { cards } = this.state;
    return (
      <div className="app">
        <img src={ logo } alt="logo tryunfo" className="header--logo" />
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

        <h1 className="cards-list-h1">TODAS AS CARTAS</h1>
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
