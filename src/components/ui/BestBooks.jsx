import { books } from "../../data";
import React from "react";
import Book from "../Book";
import Books from "../../pages/Books";

const BestBooks = ({ id }) => {
  return (
    <div className="books">
      {books
        .filter((book) => {
          if (id) {
            // Check for id when on the individual book
            // so the same book isnt recommended
            return book.rating === 5 && book.id != id;
          }
          return book.rating === 5;
        })
        .slice(0, 4)
        .map((book) => {
          return <Books book={book} key={book.id} />;
        })}
    </div>
  );
};

export default BestBooks;
