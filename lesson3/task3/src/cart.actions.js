export const ADD_PRODUCT = 'CART/ADD';
export const REMOVE_PRODUCT = 'RREMOVE/REMOVE';

export const addProduct = (productData) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      productData
    }
  };
};

export const removeProduct = (productId) => {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      productId
    }
  };
};