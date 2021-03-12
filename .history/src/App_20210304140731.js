import './App.css';
import ItemList from './components/ItemList';
import Item from './components/Item';
import data from './data.json';

function App() {

  const ItemList [itemList, setItemList] = useState(data);

  return (
    <div className="App">
      
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />

    </div>
  );
}

export default App;
