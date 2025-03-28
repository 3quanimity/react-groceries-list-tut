import React from 'react';

const Header = ({ title = 'Default title' }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

// NOTE: dosnt work with destructuring after react 17
// Header.defaultProps = {
//   title: 'Default title',
// };

export default Header;
