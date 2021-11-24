// import logo from './logo.svg';
// import './App.css';
import Componente1 from "./Componente1";
import Product from "./Product";

const primaCard = {
  nome:  "Prodotto 1",
  img: "http://www.regalopiu.com/img/w256-h256-c1:1/photo/articoli/art-d83wh4.jpg",
  prezzo: 10,
} 

const secondaCard = {
  nome:  "Prodotto 2",
  img: "http://www.regalopiu.com/img/w256-h256-c1:1/photo/articoli/art-d83wh4.jpg",
  prezzo: 15,
} 

function App() {
  return (
    <div className="App">
      <h2>test funzionamento</h2>
      <Componente1 />
      <Product 
      nome= {primaCard.nome}
      img= {primaCard.img}      
      prezzo= {primaCard.prezzo}
      />

      <Product 
      nome= {secondaCard.nome}
      img= {secondaCard.img}      
      prezzo= {secondaCard.prezzo}
      />
    </div>
  );
}



export default App;
