import React from 'react';

const Footer = ({ length }) => {
  // const today = new Date();
  // Copyright &copy; {today.getFullYear()}
  return (
    <footer>
      <h3>
        {length} List {length === 1 ? 'Item' : 'Items'}
      </h3>
    </footer>
  );
};

export default Footer;
