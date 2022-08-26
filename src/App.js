import './App.scss';
import Animals from './components/Animals/Animals';
import Pokemons from './components/Pokemons/Pokemons';
import Books from './components/Books/Books';

function App() {
  return (
    <div>
      <h1> 1. Užduotis</h1>
      <ol style={{ textAlign: 'left' }}>
        <li>
          Išrenderinti visus gyvūnus esančius <strong> masyve Animals komponente </strong>
          . Pernaudojant <strong> vieną komponentą Animal </strong>. Komponentas Animal
          turi per <strong> props </strong> atvaizduoti atitinkamą gyvūno
          <strong>pavadinimą </strong>
          (kaip figcaption) ir <strong> nuotrauką </strong>, img alt atributas turi
          rašytis tokiu formatu (pvz. alt="Hippo-animal").
        </li>
        <li>
          Extra užduotis figcaption fono spalva turi būti
          <strong> random sugeneruotos spalvos </strong>
        </li>
      </ol>

      <Animals />

      <h2> 2. Užduotis su vienu API</h2>
      <ol className="App" style={{ textAlign: 'left' }}>
        <li>
          Gauti visus duomenis iš
          <a href="https://pokeapi.co/api/v2/pokemon">
            https://pokeapi.co/api/v2/pokemon
          </a>
          API ir išrenderinti Pokemons komponente.
          <strong> Nenaudoti bibliotekų. </strong> Pvz.
          <a href="https://reactjs.org/docs/faq-ajax.html">
            https://reactjs.org/docs/faq-ajax.html
          </a>
        </li>
        <li>
          <strong> Pokemons </strong> komponente turėtų būti panaudotas
          <strong> Pokemon </strong>
          komponentas, kuris per props gauna <strong>name</strong> ir <strong>url</strong>
          iš API.
        </li>
      </ol>

      <Pokemons />

      <h1>3. Užduotis naudojant du API</h1>
      <ol style={{ textAlign: 'left' }}>
        <li>
          Nenaudojant bibliotekų paimti duomenis iš
          <a href="https://in3.dev/knygos/">https://in3.dev/knygos/</a> ir paduoti
          <strong> img , title , author, price</strong> į Book komponentą.
        </li>
        <li>
          Pridėti <strong> loading </strong> jeigu knygų dar nėra.
        </li>
        <li>
          Paimti duomenis iš
          <a href="https://in3.dev/knygos/types/">https://in3.dev/knygos/types/</a> ir
          paduoti atitinkamą tipo pavadinimą į Book komponentą.
        </li>
      </ol>

      <Books />
    </div>
  );
}

export default App;
