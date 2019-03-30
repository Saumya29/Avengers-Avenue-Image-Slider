import React from 'react';

const Slide = ({ image }) => {
  return image ? (
    <img className="slide" alt={image.id} src={image.url} />
  ) : (
    <img alt="not found" />
  );
};

export default Slide;
