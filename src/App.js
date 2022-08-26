import './App.scss';
import Animals from './components/Animals/Animals';
import Pokemons from './components/Pokemons/Pokemons';
import fetchImg from './assets/fetch.png';

function App() {
  return (
    <div>
      {/* <h1> 1. Užduotis</h1>
      <ol style={{ textAlign: 'left' }}>
        <li>
          Išrenderinti visus gyvūnus esančius <strong> masyve Animals komponente </strong>
          . Pernaudojant <strong> vieną komponentą Animal </strong>. Komponentas Animal
          turi per <strong> props </strong> atvaizduoti atitinkamą gyvūno{' '}
          <strong>pavadinimą </strong>
          (kaip figcaption) ir <strong> nuotrauką </strong>, img alt atributas turi
          rašytis tokiu formatu (pvz. alt="Hippo-animal").
        </li>
        <li>
          Extra užduotis figcaption fono spalva turi būti{' '}
          <strong> random sugeneruotos spalvos </strong>
        </li>
      </ol>
      */}

      {/* <Animals /> */}

      {/* <h2> 2. Užduotis su vienu API</h2>
      <ol className="App" style={{ textAlign: 'left' }}>
        <li>
          Gauti visus duomenis iš{' '}
          <a href="https://pokeapi.co/api/v2/pokemon">
            https://pokeapi.co/api/v2/pokemon
          </a>{' '}
          API ir išrenderinti Pokemons komponente.
          <strong> Nenaudoti bibliotekų. </strong> Pvz.{' '}
          <a href="https://reactjs.org/docs/faq-ajax.html">
            https://reactjs.org/docs/faq-ajax.html{' '}
          </a>
          <img src={fetchImg} alt="fetch" />
        </li>
        <li>
          <strong> Pokemons </strong> komponente turėtų būti panaudotas{' '}
          <strong> Pokemon </strong>
          komponentas, kuris per props gauna <strong>name</strong> ir <strong>url</strong>{' '}
          iš API.
        </li>
      </ol> */}

      <Pokemons />
    </div>
  );
}

export default App;
