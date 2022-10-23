import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {
  // Props and Props Drilling
  // Apps => Content => ItemList => LineItem
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <h3 style={{ marginTop: '2rem' }}>Your shopping list is empty.</h3>
      )}
    </main>
  );
};

export default Content;
