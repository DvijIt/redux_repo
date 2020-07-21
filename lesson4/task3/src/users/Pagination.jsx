import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage === 0;
  const isNextPageAvailable = (currentPage + 1) * itemsPerPage < totalItems;

  return (
    <div className="pagination">
      <button disabled={isPrevPageAvailable} className="btn" onClick={goPrev}>
        {!isPrevPageAvailable && ('←')}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button disabled={!isNextPageAvailable} className="btn" onClick={goNext}>
        {isNextPageAvailable && ('→')}
      </button>
    </div>
  )
};

export default Pagination;