import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/navbar';
import Flex from './components/flex';
import Crouselsdt from './components/crousels';


function App() {
  return (
    <div className="App">
      <NavigationBar />;
      <Flex />;
      <Crouselsdt />;
    </div>
  );
}

export default App;
