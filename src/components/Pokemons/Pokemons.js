import './Pokemons.scss';

import Loader from '../../helpers/Loader/Loader';
import Pokemon from './Pokemon';
import useFetch from '../../hooks/useFetch';

function Pokemons() {
  const { data, error, loading } = useFetch('https://pokeapi.co/api/v2/pokemon');

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div>
        <h2>HOUSTON!!! WE HAVE A PROBLEM HERE: {error}</h2>
        <p>Please try to reload page</p>
      </div>
    );
  }

  return (
    <ul className="pokemon-list">
      {data.results?.map(({ name, url }) => (
        <Pokemon key={crypto.randomUUID()} name={name} url={url} />
      ))}
    </ul>
  );
}

export default Pokemons;
