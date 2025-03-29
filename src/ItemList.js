import React from 'react';
import Item from './Item';

const ItemList = ({ items, setAndSaveItems, search }) => {
  const handleCheck = id => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setAndSaveItems(updatedItems, 'shoppingList');
  };

  const handleDelete = id => {
    const filteredList = items.filter(item => item.id !== id);

    setAndSaveItems(filteredList, 'shoppingList');
  };

  const filteredItems = items.filter(element =>
    element.item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {items.length ? (
        <ul>
          {filteredItems.map(item => (
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
