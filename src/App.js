import React, { useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { loadFromLocalStorage } from './helpers/localStorageUtils';

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

  return (
    <div className="App">
      <Header title="Groceries List" />
      <Content items={items} setItems={setItems} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
