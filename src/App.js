import { List } from './components/List';

function App() {
  const mainStyles = {
    width: '100vw',
    height: '100vh',
    display: 'grid',
    placeContent: 'center'
  }
  const ListStyle = {
    border: '1px solid grey',
    padding: '10px',
    width: '250px',
    height: '150px'
  }
  return (
    <main style={mainStyles}>
      <div style={ListStyle}>
        <List />
      </div>
    </main>
  );
}

export default App;
