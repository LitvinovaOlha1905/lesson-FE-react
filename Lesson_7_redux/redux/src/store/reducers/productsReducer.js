import { productsData } from "../../data/productsData"

const DELETE_PRODUCT = 'DELETE_PRODUCT';
const INCR_PRICE = 'INCR_PRICE';
const DECR_PRICE = 'DECR_PRICE';

export const deleteProductAction = (id) => ({  type: DELETE_PRODUCT, payload: id })
export const incrPriceAction = (id) => ({  type: INCR_PRICE, payload: id })
export const decrPriceAction = (id) => ({  type: DECR_PRICE, payload: id })

export const productsReducer = (state = productsData, action) => {
  if(action.type === DELETE_PRODUCT){
    return state.filter(el => el.id !== action.payload)
  } else if(action.type === INCR_PRICE){
    const target_product = state.find(el => el.id === action.payload);
    target_product.price += 10;
    return [...state]
  } else if(action.type === DECR_PRICE) {
    const target_product = state.find(el => el.id === action.payload);
    target_product.price -= 10;
    return [...state]
  }
  return state
}
