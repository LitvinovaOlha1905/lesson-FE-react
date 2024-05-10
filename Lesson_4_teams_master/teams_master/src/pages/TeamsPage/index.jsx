import React, { useContext } from 'react'
import PlayersContainer from '../../components/PlayersContainer'
import s from './index.module.css'
import { Context } from '../../context'

export default function TeamsPage() {

  const { deleteAllPlayers } = useContext(Context);
  
  return (
    <div>
      <PlayersContainer />
      <div 
        className={s.delete_btn}
        onClick={deleteAllPlayers}
      >
        Delete all players
      </div>
    </div>
  )
}
