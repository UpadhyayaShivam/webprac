import React from 'react';

const Avatar = ({ imageUrl, altText }) => {
  return (
    <img
      src={imageUrl}
      alt={altText}
      className="rounded-full h-16 w-16 object-cover border-2 border-gray-300"
    />
  );
};

export default Avatar;
