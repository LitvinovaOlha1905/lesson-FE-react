import React, {useContext} from 'react'
import { Context } from '../../context'
import PlayerCard from '../PlayerCard';

export default function PlayersContainer() {

  const { players } = useContext(Context);

  return (
    <div>
      {
        players.length === 0
        ? <p>No players added...</p>
        : <div>
            {
              players.map(el => <PlayerCard key={el.id} {...el} />)
            }
          </div>
      }   
    </div>
  )
}
