const defaultState = {
  status: 'loading',
  data: {}
}

const LOAD_SINGLE_PRODUCT = 'LOAD_SINGLE_PRODUCT';
const RESET_SINGLE_STATUS = 'RESET_SINGLE_STATUS';

export const loadSingleProductAction = product => ({ type: LOAD_SINGLE_PRODUCT, payload: product});
export const resetSingleStatusAction = () => ({ type: RESET_SINGLE_STATUS });

export const singleProductReducer = (state=defaultState, action) => {
  if(action.type === LOAD_SINGLE_PRODUCT){
    return {
      status: 'ready',
      data: action.payload
    }
  } else if (action.type === RESET_SINGLE_STATUS){
    return {
      ...state,
      status: 'loading'
    }
  }
  return state
}
