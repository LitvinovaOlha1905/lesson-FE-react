import React from 'react'
import s from './AddCardForm.module.css'

export default function AddCardForm({ addNewCard }) {

  const addCard = (event) => {
    event.preventDefault();

    const { rus, eng } = event.target;

    const new_card = {
      id: Date.now(),
      title_rus: rus.value,
      title_eng: eng.value,
      lang: 'eng'
    }

    addNewCard(new_card);

    event.target.reset()
  }

  return (
    <form className={s.add_card_form} onSubmit={addCard}>
      <input type='text' placeholder='RUS' name='rus' />
      <input type='text' placeholder='ENG' name='eng' />
      <button>Add word</button>
    </form>
  )
}
