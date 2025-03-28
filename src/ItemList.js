import React from 'react';
import Item from './Item';
import { saveToLocalStorage } from './helpers/localStorageUtils';

const ItemList = ({ items, setItems }) => {
  const handleCheck = id => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(updatedItems);
    saveToLocalStorage(updatedItems, 'shoppingList');
  };

  const handleDelete = id => {
    const filteredList = items.filter(item => item.id !== id);
    setItems(filteredList);
    saveToLocalStorage(filteredList, 'shoppingList');
  };

  return (
    <>
      {items.length ? (
        <ul>
          {items.map(item => (
            <Item
              item={item}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
              key={item.id}
            />
          ))}
        </ul>
      ) : (
        <p>Your list is empty.</p>
      )}
    </>
  );
};

export default ItemList;
