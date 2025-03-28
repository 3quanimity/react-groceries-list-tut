import React from 'react';
import ItemList from './ItemList';

const Content = ({ items, setAndSaveItems }) => {
  return (
    <main>
      <ItemList items={items} setAndSaveItems={setAndSaveItems} />
    </main>
  );
};

export default Content;
