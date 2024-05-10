import React from 'react'
import AddTeamForm from '../../components/AddTeamForm'
import AddPlayerForm from '../../components/AddPlayerForm'

export default function ConfigPage({teams}) {
  return (
    <div>
      <AddTeamForm />
      <AddPlayerForm teams={teams} />
    </div>
  )
}
