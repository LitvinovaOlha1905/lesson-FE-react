const ADD_PLACE = 'ADD_PLACE';
const DELETE_PLACE = 'DELETE_PLACE';
const CHANGE_LIKE = 'CHANGE_LIKE';
const DELETE_ALL_PLACES = 'DELETE_ALL_PLACES';

export const addPlaceAction = (place) => ({ type: ADD_PLACE, payload: place })
export const deletePlaceAction = (place_id) => ({ type: DELETE_PLACE, payload: place_id })
export const changeLikeAction = (place_id) => ({ type: CHANGE_LIKE, payload: place_id })
export const deleteAllPlacesAction = () => ({ type: DELETE_ALL_PLACES })

export const placesReducer = (state = [], action) => {
  if(action.type === ADD_PLACE){
    return [...state, action.payload]
  } else if(action.type === DELETE_PLACE){
    return state.filter(el => el.id !== action.payload)
  } else if(action.type === CHANGE_LIKE){
    const targetCard = state.find(el => el.id === action.payload);
    targetCard.like = !targetCard.like;
    return [...state]
  } else if (action.type === DELETE_ALL_PLACES){
    return []
  }
  return state
}
