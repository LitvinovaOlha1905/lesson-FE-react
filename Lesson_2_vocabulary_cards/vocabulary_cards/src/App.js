import { useEffect, useState } from 'react';
import './App.css';
import CardsContainer from './components/CardsContainer/CardsContainer';
import { cardsData } from './data/cardsData';
import Triggers from './components/Triggers/Triggers';
import AddCardForm from './components/AddCardForm/AddCardForm'; 

function App() {

  // В качестве изначального состояния брать значение из localStorage под ключом cards
  // Если в localStorage под ключом cards ничего не найдено, то в качестве изначального состояния брать массив cardsData
  const [ cards, setCards ] = useState(JSON.parse(localStorage.getItem('cards')) || cardsData);

  // Сохраняем текущее состояние в localStorage
  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards]);

  // [] - функция вызывается один раз при перезагрузке компонента
  // [cards] - функция будет вызываться КАЖДЫЙ раз при изменении состояния cards

  // localStorage.setItem() - сохраняем данные в localStorage
  // localStorage.getItem() - достаем/используем данные из localStorage

  // JSON.stringify() - из JSON в ''
  // JSON.parse() - из '' в JSON

  const changeToRus = () => {
    setCards(cards.map(el => {
      el.lang = 'rus';
      return el
    }))
  }

  const changeToEng = () => {
    setCards(cards.map(el => {
      el.lang = 'eng';
      return el
    }))
  }

  const deleteAllCards = () => {
    setCards([])
  }

  const addNewCard = (new_card) => {
    setCards([...cards, new_card])
  }

  const deleteCard = id => {
    setCards(cards.filter(el => el.id !== id))
  }

  const changeLang = id => {
    // 1. Найти карточку, на которую было кликнуто
    const targetCard = cards.find(el => el.id === id);

    // 2. У найденной карточки обратиться к свойству lang и поменять значение этого свойства на противоположное
    targetCard.lang = targetCard.lang === 'eng' ? 'rus' : 'eng';

    // 3. В setCards() передать обновленное состояние
    setCards([...cards])
  }

  return (
    <div>
      <AddCardForm addNewCard={addNewCard} />
      <CardsContainer cards={cards} deleteCard={deleteCard} changeLang={changeLang} />
      <Triggers changeToRus={changeToRus} changeToEng={changeToEng} deleteAllCards={deleteAllCards} />
    </div>
  );
}

export default App;
