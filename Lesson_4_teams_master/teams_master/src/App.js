import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import MainPage from './pages/MainPage';
import ConfigPage from './pages/ConfigPage';
import TeamsPage from './pages/TeamsPage';
import { Context } from './context';

function App() {

  const [ teams, setTeams ] = useState([]);
  const [ players, setPlayers ] = useState([]);

  const addNewTeam = new_team => {
    setTeams([...teams, new_team])
  }

  const addNewPlayer = new_player => {
    setPlayers([...players, new_player])
  }

  const deletePlayer = id => {
    setPlayers(players.filter(el => el.id !== id))
  }

  const deleteAllPlayers = () => setPlayers([]);

  return (
    <div>
      <Context.Provider value={{ addNewPlayer, addNewTeam, players, deletePlayer, deleteAllPlayers }}>
        <NavMenu />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/configurations' element={<ConfigPage teams={teams} />} />
          <Route path='/teams' element={<TeamsPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
