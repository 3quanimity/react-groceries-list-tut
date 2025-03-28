import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  // helpers
  const saveToLocalStorage = (data, location) => {
    localStorage.setItem(location, JSON.stringify(data));
  };
  const loadFromLocalStorage = data => {
    return JSON.parse(localStorage.getItem(data));
  };

  const defaultList = [
    {
      id: 1,
      checked: true,
      item: 'One half pound bag of Cocoa',
    },
    {
      id: 2,
      checked: false,
      item: 'item 2',
    },
    {
      id: 3,
      checked: false,
      item: 'Item 3',
    },
  ];
  const savedList = loadFromLocalStorage('shoppingList');
  const [items, setItems] = useState(savedList || defaultList);

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
    <main>
      {items.length ? (
        <ul>
          {items.map(item => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                style={item.checked ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Your list is empty.</p>
      )}
    </main>
  );
};

export default Content;
