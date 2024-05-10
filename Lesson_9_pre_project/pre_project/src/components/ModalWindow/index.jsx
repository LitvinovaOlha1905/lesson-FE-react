import React, { useContext } from 'react'
import s from './index.module.css'
import { IoCloseSharp } from "react-icons/io5";
import { Context } from '../../context';

export default function ModalWindow({ text1, text2 }) {

  const { modalActive, setModalActive } = useContext(Context);

  return (
    <div className={[s.modal, modalActive ? s.active : ''].join(' ')}>
      <div className={s.modal_content}>
        <IoCloseSharp onClick={() => setModalActive(false)} />
        <p>{ text1 }</p>
        <p>{ text2 }</p>
      </div>
    </div>
  )
}
