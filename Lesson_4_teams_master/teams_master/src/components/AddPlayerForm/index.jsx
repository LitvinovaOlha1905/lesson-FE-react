import React, {useContext} from 'react'
import s from './index.module.css'
import Select from 'react-select';
import { Context } from '../../context';


export default function AddPlayerForm({teams}) {

  const { addNewPlayer } = useContext(Context);

  const addPlayer = event => {
    event.preventDefault();

    const { player, team } = event.target;

    const new_player = {
      id: Date.now(),
      player: player.value,
      team: team.value
    }

    addNewPlayer(new_player);

    event.target.reset();
  }

  return (
    <form className={s.add_player_form} onSubmit={addPlayer}>
      <label>
        <p>Add player</p>
        <input type='text' placeholder="Players's name" name='player' />
      </label>
      <Select options={teams} name='team' />
      <button>Add player</button>
    </form>
  )
}
