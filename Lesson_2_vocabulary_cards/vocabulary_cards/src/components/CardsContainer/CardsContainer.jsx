import React from 'react'
import Card from '../Card/Card'
import s from './CardsContainer.module.css'

export default function CardsContainer({ cards, deleteCard, changeLang }) {
  return (
    <div className={s.cards_container}>
      {
        cards.map(el => <Card key={el.id} {...el} deleteCard={deleteCard} changeLang={changeLang} />)
      }
    </div>
  )
}
