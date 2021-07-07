
import './App.css';
import Card from"./components/card"

function App() {
  return (
    <div className="App">
      
      <section className="scrollbar">
      <Card food="pizza" calory="56" />
      <Card food="burger" calory="96" />
      <Card food="coke" calory="108" />
      <Card food="chips" calory="206" />
      <Card food="kurkure" calory="959" />
      <Card food="chicken " calory="916" />
      </section>
    </div>
  );
}

export default App;
