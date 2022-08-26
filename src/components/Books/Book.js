import React from 'react';

function Book({ img, field, title, author, price, time }) {
  const currTime = new Date(time).toLocaleDateString();

  return (
    <article className="book">
      <div className="book__img-container">
        <img src={img} alt={title} />
      </div>

      <div className="book__details">
        <p>{field}</p>
        <p>{title}</p>
        <p>{author}</p>
        <div className="book__date">
          <p>{price}&euro;</p>
          <p>{currTime}</p>
        </div>
      </div>
    </article>
  );
}

export default Book;
