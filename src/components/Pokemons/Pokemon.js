import React from 'react';

function Pokemon({ name, url }) {
  return (
    <li className="pokemon">
      <p className="pokemon__name">{name}</p>
      <a href={url} target="_blank" className="pokemon__link" rel="noreferrer">
        {url}
      </a>
    </li>
  );
}

export default Pokemon;
