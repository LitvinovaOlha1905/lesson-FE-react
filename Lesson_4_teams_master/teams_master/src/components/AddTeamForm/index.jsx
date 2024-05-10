import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context';

export default function AddTeamForm() {

  const { addNewTeam } = useContext(Context);

  const addTeam = event => {
    event.preventDefault();

    const { team } = event.target;

    const new_team = {
      value: team.value,
      label: team.value
    }

    addNewTeam(new_team);

    event.target.reset();
  }

  return (
    <form className={s.add_team_form} onSubmit={addTeam}>
      <label>
        <p>Add team</p>
        <input type='text' placeholder="Team's name" name='team' />
      </label>
      <button>Add team</button>
    </form>
  )
}
