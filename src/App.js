import './App.scss';
import Animals from './components/Animals/Animals';

function App() {
  return (
    <div>
      <h1> Užduotis</h1>
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

      <Animals />
    </div>
  );
}

export default App;
