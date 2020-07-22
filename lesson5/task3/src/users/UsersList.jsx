import React from 'react'
import Filter from './Filter.jsx'
import User from './User.jsx';
import { filteredListSelector, filterTextSelector } from './users.selectors';
import { connect } from 'react-redux';
import { setFilterText } from './users.actions';

const UsersList = ({ users, filterText, setfilterText }) => {

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setfilterText(value);
  };

  return (
    <div>
      <Filter
        onChange={onChangeHandler}
        filterText={filterText}
        count={users.length}
      />
      <ul className="users">
        {users.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  )
}

const mapState = (state) => {
  return {
    users: filteredListSelector(state),
    filterText: filterTextSelector(state)
  };
};

const mapDispatch = {
  setfilterText: setFilterText,
};

export default connect(mapState, mapDispatch)(UsersList)