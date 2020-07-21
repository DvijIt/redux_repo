import React from 'react';
import { connect } from "react-redux";
import User from './User.jsx';
import Pagination from './Pagination.jsx';
import * as userActions from './users.actions';
import { usersListSelector, currentPageSelector } from './users.selectors';

class UsersList extends React.Component {

  render() {
    const itemsPerPage = 3;
    const { users, currentPage, goNext, goPrev } = this.props;
    const from = currentPage * itemsPerPage;
    const usersList = users.slice(from, from + itemsPerPage)

    return (
      <div>
        <Pagination
          goNext={goNext}
          goPrev={goPrev}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {usersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state)
  };
};

const mapDispatch = {
  goPrev: userActions.goPrev,
  goNext: userActions.goNext,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList