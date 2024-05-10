import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../../requests/users';
import UsersContainer from '../../components/UsersContainer';
import { Context } from '../../context';

export default function UsersPage() {

  const [ users, setUsers ] = useState([]);

  useEffect(() => getAllUsers(setUsers), []);
  // () => {} - вызываемая функция
  // [] - массив зависимостей, когда массив пустой функция из первого аргумента вызывается один раз при перезагрузке компонента

  return (
    <div>
      <Context.Provider value={{ users }}>
        <UsersContainer />
      </Context.Provider>
    </div>
  )
}
