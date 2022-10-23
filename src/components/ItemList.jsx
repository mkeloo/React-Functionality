import React from 'react';
import LineItem from './LineItem';

const ItemList = ({ items, handleCheck, handleDelete }) => {
  // Props and Props Drilling
  // Apps => Content => ItemList => LineItem
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
