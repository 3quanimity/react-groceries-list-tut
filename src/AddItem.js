import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItem = ({ newItem, setNewItem, items, setAndSaveItems }) => {
  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    if (!newItem) return;

    const newItemEntry = {
      id: Date.now(),
      item: newItem,
      checked: false,
    };
    const updatedList = [...items, newItemEntry];

    setAndSaveItems(updatedList, 'shoppingList');
    setNewItem('');
  };

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
