import React, { useState, useEffect } from 'react';
import axios from 'axios';
require('dotenv').config();
const Books = () => {
  const [book, setBook] = useState([]);
  const [bookMeta, setBookMeta] = useState([]);
  console.log('book from books', book);
  const api_key = process.env.REACT_APP_API_KEY;

  const fetchBooks = async () => {
    await axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${api_key}`
      )
      .then((res) => setBook([...res.data.results.books]))
      .catch((error) => console.log('ERROR: ', error));
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="text-red-600">
      <h1>this is a collection of books</h1>
    </div>
  );
};

export default Books;
