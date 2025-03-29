import React from 'react';
import ItemList from './ItemList';

const Content = ({ items, setAndSaveItems, search }) => {
  return (
    <main>
      <ItemList
        items={items}
        setAndSaveItems={setAndSaveItems}
        search={search}
      />
    </main>
  );
};

export default Content;
