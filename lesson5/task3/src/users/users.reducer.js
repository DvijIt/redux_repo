import { users } from './users';
import { SET_FILTER_TEXT } from './users.actions';

const initState = {
  filterText: '',
  usersList: users
}

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_FILTER_TEXT: {
      const { filteredText } = action.payload;
      return {
        ...state,
        filterText: filteredText,
      }

    }
    default:
      return state;
  }
};

export default usersReducer;
