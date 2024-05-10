import React from 'react'
import s from './index.module.css'
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { changeLikeAction, deletePlaceAction } from '../../store/reducers/placesReducer';
import { FaHeart } from "react-icons/fa";

export default function PlaceCard({ id, country, capital, currency, like, cardBackground }) {

  const dispatch = useDispatch();

  const heart = {
    color: like ? 'red' : 'gray'
  }

  const cardStyle = {
    backgroundColor: cardBackground ? 'lightyellow' : 'transparent'
  }

  return (
    <div className={s.card} style={cardStyle}>
      <RxCross2 
        className={s.cross} 
        onClick={() => dispatch(deletePlaceAction(id))}
      />
      <p>Country: { country }</p>
      <p>Capital: { capital }</p>
      <p>Currency: { currency.toUpperCase() }</p>
      <FaHeart style={heart} onClick={() => dispatch(changeLikeAction(id))} className={s.heart} />
    </div>
  )
}
