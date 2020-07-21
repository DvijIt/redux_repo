  
export const PREV_USER = "USERS/PREV_USER ";
export const NEXT_USER = "USERS/NEXT_USER ";


export const goPrev = () => {
  return {
    type: PREV_USER,
  };
};

export const goNext = () => {
  return {
    type: NEXT_USER,
  };
};
