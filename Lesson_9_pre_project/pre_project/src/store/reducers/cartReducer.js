const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_SINGLE_PRODUCT = 'DELETE_SINGLE_PRODUCT';
const DELETE_ALL_PRODUCTS = 'DELETE_ALL_PRODUCTS';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';

export const addToCartAction = product => ({ type: ADD_TO_CART, payload: product });
export const deleteSindleProductAction = product_id => ({ type: DELETE_SINGLE_PRODUCT, payload: product_id });
export const deleteAllProductsAction = () => ({ type: DELETE_ALL_PRODUCTS });
export const incrementCountAction = (product_id) => ({ type: INCREMENT_COUNT, payload: product_id });
export const decrementCountAction = (product_id) => ({ type: DECREMENT_COUNT, payload: product_id });

const checkProduct = (state, payload) => {
  const productInCart = state.find(el => el.id === payload.id);
  // 1. productInCart === undefined (false)
  // 2. productInCart === {} (true)

  if(!productInCart){
    return [...state, {...payload, count: 1 }]
  } else {
    productInCart.count++
    return [...state]
  }
}

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

export const cartReducer = (state=initialState, action) => {
  if(action.type === ADD_TO_CART){
    return checkProduct(state, action.payload)
  } else if (action.type === DELETE_SINGLE_PRODUCT){
    return state.filter(el => el.id !== action.payload)
  } else if(action.type === DELETE_ALL_PRODUCTS){
    return []
  } else if (action.type === INCREMENT_COUNT){
    const target_product = state.find(el => el.id === action.payload);
    target_product.count++
    return [...state]
  } else if (action.type === DECREMENT_COUNT){
    const target_product = state.find(el => el.id === action.payload);
    if(target_product.count === 1){
      return state.filter(el => el.id !== action.payload);
    } else {
      target_product.count--
      return [...state]
    }
  }
  return state
}
