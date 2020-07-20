import {
  ADD_PRODUCT,
  REMOVE_PRODUCT
} from './cart.actions';

const initState = {
  productList: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        productList: state.productList.concat(action.payload.productData),
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        productList: state.productList
          .filter((product) => product.id !== action.payload.productId),
      };
    default:
      return state;
  }
};

export default cartReducer;