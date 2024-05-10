const defaultState = {
  status: 'loading',
  data: []
}

const LOAD_PRODUCTS_BY_CATEGORY = 'LOAD_PRODUCTS_BY_CATEGORY';
const RESET_STATUS = 'RESET_STATUS';

export const loadProductsByCategoryAction = categories => ({ type: LOAD_PRODUCTS_BY_CATEGORY, payload: categories });
export const resetStatusAction = () => ({ type: RESET_STATUS });

export const productsByCategoryReducer = (state=defaultState, action) => {
  if (action.type === LOAD_PRODUCTS_BY_CATEGORY){
    return {
      status: 'ready',
      data: action.payload
    }
  } else if (action.type === RESET_STATUS){
    return {
      ...state,
      status: 'loading'
    }
  }
  return state
}
