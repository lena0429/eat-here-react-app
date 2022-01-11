import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RestaurantsContainer from './containers/RestaurantsContainer';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Homepage />
      <RestaurantsContainer />
    </div>
  );
}

export default App;
