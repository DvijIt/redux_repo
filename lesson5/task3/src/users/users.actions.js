export const SET_FILTER_TEXT = 'USERS/SET_FILTER_TEXT';

export const setFilterText = (filteredText) => {
  return {
    type: SET_FILTER_TEXT,
    payload: {
      filteredText
    }
  }
}