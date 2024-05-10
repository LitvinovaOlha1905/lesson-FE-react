import { usersData } from "../../data/usersData";

const DELETE_USER = 'DELETE_USER';
const ADD_USER = 'ADD_USER';
const INCR_AGE = 'INCR_AGE';
const DECR_AGE = 'DECR_AGE';

export const deleteUserAction = (id) => ({ type: DELETE_USER, payload: id })

export const addUserAction = (new_user) => ({ type: ADD_USER, payload: new_user });

export const incrAgeAction = (id) => ({ type: INCR_AGE, payload: id });
export const decrAgeAction = (id) => ({ type: DECR_AGE, payload: id });

export const usersReducer = (state = usersData, action) => {
  if(action.type === DELETE_USER){
    return state.filter(el => el.id !== action.payload)
  } else if(action.type === ADD_USER){
    return [...state, action.payload]
  } else if(action.type === INCR_AGE){
    // 1. По айди найти объект в массиве
    const target_user = state.find(el => el.id === action.payload);

    // state.find(el => el.id === action.payload).age++

    // 2. У найденного объекта обратиться к свойству age и увеличить его на 1
    target_user.age++

    // 3. Вернуть обновленное состояние
    return [...state]
  } else if(action.type === DECR_AGE){
    const target_user = state.find(el => el.id === action.payload);
    
    if(target_user.age !== 0) {
      target_user.age--
    }
    
    return [...state]
  }
  return state
}
