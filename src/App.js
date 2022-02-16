import logo from './logo.svg';
import './App.css';
import Item from './item';

function App() {
  const data = [
    {
      name: 'FIRST',
      label: 'FRT'
    },
    {
      name: 'SECOND',
      label: 'SED'
    },
    {
      name: 'THIRD',
      label: 'THD'
    }
  ]


  return (
    <div className="App" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {data && data.map(item => <Item key={item.label} { ...item}/>)}
    </div>
  );
}

export default App;
