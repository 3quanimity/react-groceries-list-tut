import React, { useState } from 'react';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from './helpers/localStorageUtils';
import SearchItem from './SearchItem';

function App() {
  const defaultList = [
    {
      id: 1,
      checked: true,
      item: 'One half pound bag of Cocoa',
    },
    {
      id: 2,
      checked: false,
      item: 'Ice Cream',
    },
    {
      id: 3,
      checked: false,
      item: 'Chips',
    },
  ];
  const savedList = loadFromLocalStorage('shoppingList');

  const [items, setItems] = useState(savedList || defaultList);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const setAndSaveItems = (itemsToSave, localStorageLocation) => {
    setItems(itemsToSave);
    saveToLocalStorage(itemsToSave, localStorageLocation);
  };

  return (
    <div className="App">
      <Header title="Groceries List" />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items}
        setAndSaveItems={setAndSaveItems}
        search={search}
      />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        items={items}
        setAndSaveItems={setAndSaveItems}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
