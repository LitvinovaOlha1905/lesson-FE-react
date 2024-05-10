import React from 'react'
import s from './Card.module.css'
import { RxCross1 } from "react-icons/rx";

export default function Card({ id, title_rus, title_eng, lang, deleteCard, changeLang }) {

  const card_text = lang === 'eng' ? title_eng : title_rus;

  const card_style = {
    color: lang === 'eng' ? 'white' : 'darkblue',
    backgroundColor: lang === 'eng' ? 'darkblue' : 'white'
  }

  const delete_card = (event) => {
    event.stopPropagation();
    deleteCard(id);
  };

  return (
    <div 
      className={s.card} 
      style={card_style}
      onClick={() => changeLang(id)}
    >
      <RxCross1 
        className={s.cross_icon}
        onClick={delete_card} 
      />
      <p>{ card_text }</p>
    </div>
  )
}
