import React from 'react';
import './Books.scss';
import Book from './Book';
import Loader from '../../helpers/Loader/Loader';
import useFetch from '../../hooks/useFetch';

function Books() {
  const { loading, data: books, error } = useFetch('https://in3.dev/knygos/');
  const {
    loading: typesLoading,
    data: types,
    error: typesError,
  } = useFetch('https://in3.dev/knygos/types/');

  if (loading || typesLoading) {
    return <Loader />;
  }

  if (error || typesError) {
    return (
      <div>
        <h2>HOUSTON!!! WE HAVE A PROBLEM HERE: {error}</h2>
        <p>Please try to reload page</p>
      </div>
    );
  }

  return (
    <div className="book-list">
      {books?.map((book) => {
        const sritis = types?.find((item) => item.id === book.type);

        return (
          <Book
            key={book.id}
            img={book.img}
            sritis={sritis.title}
            title={book.title}
            author={book.author}
            price={book.price}
            time={book.time}
          />
        );
      })}
    </div>
  );
}

export default Books;
