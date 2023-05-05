import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/navbar';
import Flex from './components/flex';
import Crouselsdt from './components/crousels';
import Jumbo from './components/jumbo';
import ProductList from './components/data';


function App() {
  return (
    <div className="App">
      <NavigationBar />;
      <Flex />;
      <Crouselsdt />;
      <Jumbo />;
      <ProductList />
    </div>
  );
}

export default App;
