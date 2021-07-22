
import { useState } from 'react';
import './App.css';
import Card from './components/Card';
const arr=[
  {id:0,title:"poha",calories:34}
]
function App() {
  const [food, setFood] = useState("arr")
  return (
    <div className="App">
      <header className="App-header">
       { food.length ==0 ?<h1>Please eat some healthy food</h1>:
        food.map((item,index)=><card key={index} item={item} setFood={setFood}/>
        )} 

      </header>
    </div>
  );
}

export default App;
