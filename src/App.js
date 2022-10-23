import Header from './components/Header';
import AddItem from './components/AddItem';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('Shopping List'))
  );

  const [newItem, setNewItem] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('Shopping List', JSON.stringify(newItems));
  };

  const addItem = (item) => {
    // Create a new item object id
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    // Create a new item object with unchecked and item
    const myNewItem = { id, checked: false, item };
    // Add the new item to the items array using the spread operator
    const listItems = [...items, myNewItem];
    // Set the items array to the new listItems array
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    // e.preventDefault(); // Prevents page refresh or reload
    e.preventDefault();
    if (!newItem) return;
    // add item function and then resetting the input field using setNewItem to an empty string
    addItem(newItem);
    setNewItem('');
  };

  // Props and Props Drilling
  // Apps => Content => ItemList => LineItem
  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
