import React from 'react';

function Book({ img, sritis, title, author, price, time }) {
  return (
    <article className="book">
      <div className="book__img-container">
        <img src={img} alt={title} />
      </div>

      <div className="book__details">
        <p>{sritis}</p>
        <p>{title}</p>
        <p>{author}</p>
        <div className="book__date">
          <p>{price}</p>
          <p>{new Date(time).toLocaleDateString()}</p>
        </div>
      </div>
    </article>
  );
}

export default Book;
