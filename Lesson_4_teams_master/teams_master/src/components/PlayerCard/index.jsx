import React, { useContext } from 'react'
import s from './index.module.css'
import { IoClose } from "react-icons/io5";
import { Context } from '../../context';

export default function PlayerCard({ id, player, team }) {

  const { deletePlayer } = useContext(Context);

  return (
    <div className={s.player}>
      <p>{player}</p>
      <p>{team}</p>
      <IoClose onClick={() => deletePlayer(id)} />
    </div>
  )
}
