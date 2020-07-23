import React from 'react'

const Filter = ({onChange, filterText, count}) => {
  return (
    <div className="filter">
    <span className="filter__count">{count}</span>
    <input
      type="text"
      className="filter__input"
      onChange={onChange}
      value={filterText}
    />
  </div>
  )
}

export default Filter