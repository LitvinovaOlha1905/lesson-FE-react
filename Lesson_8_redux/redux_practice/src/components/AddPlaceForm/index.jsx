import React from 'react'
import { addPlaceAction } from '../../store/reducers/placesReducer';
import { useDispatch } from 'react-redux';

export default function AddPlaceForm() {

  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();

    const { country, capital, currency } = e.target;

    const newPlace = {
      id: Date.now(),
      country: country.value,
      capital: capital.value,
      currency: currency.value,
      like: false
    }

    dispatch(addPlaceAction(newPlace));

    e.target.reset()
  }

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder='Country' name='country' />
      <input type="text" placeholder='Capital' name='capital' />
      <select name='currency'>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="aed">AED</option>
      </select>
      <button>Add place</button>
    </form>
  )
}
