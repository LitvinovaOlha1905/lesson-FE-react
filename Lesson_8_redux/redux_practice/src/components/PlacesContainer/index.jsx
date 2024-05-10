import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PlaceCard from '../PlaceCard';
import s from './index.module.css'
import { deleteAllPlacesAction } from '../../store/reducers/placesReducer';

export default function PlacesContainer() {

  const [ cardBackground, setCardBackground ] = useState(false);
  // false === прозрачный фон
  // true === светло-желтый фон


  const placesState = useSelector(store => store.places);

  const dispatch = useDispatch();

  return (
    <div>
      {
        placesState.length === 0
        ? <p>No places added...</p>
        : <div>
            <div className={s.container}>
              {
                placesState.map(el => <PlaceCard key={el.id} {...el} cardBackground={cardBackground} />)
              }
            </div>
            <button onClick={() => dispatch(deleteAllPlacesAction())}>
              Delete all places
            </button>
            <button onClick={() => setCardBackground(!cardBackground)}>Change color</button>
          </div> 
      }
    </div>
  )
}
