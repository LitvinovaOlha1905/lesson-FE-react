import React, { useState } from 'react'
import s from './index.module.css'

export default function Counter() {
  // let count = 0;

  let [ count, setCount ] = useState(0)
  // count - состояние
  // setCount() - функция, отслеживающая изменение состояния

  const incr = () => {
    setCount(++count)
    console.log(count);
  }

  const decr = () => {
    setCount(--count)
    console.log(count);
  }

  const counter_styles = {
    backgroundColor: count >= 5 ? 'lightgreen' : 'lightblue'
  }

  return (
    <div className={s.counter} style={counter_styles}>
      <p>{ count }</p>
      <button onClick={decr}>-</button>
      <button onClick={incr}>+</button>
    </div>
  )
}
