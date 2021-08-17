import './App.css';
import Farm from './components/Farm';
import Weathercard from './components/Weathercard';


function App() {
  return (
    <div className="parant-div">
    <div className="child-div">
      <Farm/>
      <Weathercard/>
    </div>
    </div>
  )
}

export default App;
