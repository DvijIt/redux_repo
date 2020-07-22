import { createSelector } from "reselect";

export const usersListSelector = (state) => {
  return state.users.usersList;
};

export const filterTextSelector = (state) => {
  return state.users.filterText;
};

export const filteredListSelector = createSelector(
  [usersListSelector, filterTextSelector],
  (usersList, filterText) => {
    return usersList.filter(user => user.name.toLowerCase().includes(filterText.toLowerCase()))
  }
);

