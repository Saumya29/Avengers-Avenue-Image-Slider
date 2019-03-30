import React from 'react';

const ArrowControl = ({ next, onClickHandler, children }) => (
  <div
    className={`arrow-controls ${next ? 'next' : 'prev'}`}
    onClick={onClickHandler}
    role="button"
    tabIndex={0}
  >
    {children()}
  </div>
);

export default ArrowControl;
