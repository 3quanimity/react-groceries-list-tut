import React from 'react';
import ItemList from './ItemList';

const Content = ({ items, setItems }) => {
  return (
    <main>
      <ItemList items={items} setItems={setItems} />
    </main>
  );
};

export default Content;
