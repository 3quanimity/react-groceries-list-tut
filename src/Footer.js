import React from 'react';

const Footer = ({ length }) => {
  const today = new Date();
  return (
    <footer>
      {length ? (
        <p>
          You still got {length} {length === 1 ? 'item' : 'items'} left
        </p>
      ) : (
        <p>You're all done</p>
      )}
    </footer>
  );
};

export default Footer;
