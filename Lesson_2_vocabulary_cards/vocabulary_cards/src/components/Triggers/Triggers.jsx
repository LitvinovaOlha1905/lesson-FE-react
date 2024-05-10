import React from 'react'
import s from './Triggers.module.css'

export default function Triggers({ changeToRus, changeToEng, deleteAllCards }) {
  return (
    <div className={s.triggers}>
      <div onClick={changeToRus}>RUS</div>
      <div onClick={changeToEng}>ENG</div>
      <div onClick={deleteAllCards}>DELETE ALL</div>
    </div>
  )
}
