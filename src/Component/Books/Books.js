import React, { Component } from 'react';
import axios from 'axios';
import BookItem from './bookItem';
import BuyLinks from './buyLinks';
require('dotenv').config();

class Books extends Component {
  state = {
    book: []
  };

  // console.log('book from books', this.state.book);

  fetchBooks() {
    const api_key = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${api_key}`
      )
      .then((res) =>
        this.setState({
          book: res.data.results.books
        })
      )
      .catch((error) => console.log('ERROR: ', error));
  }

  bookLayout() {
    // console.log('GETTING THE CALL');
    return this.state.book.map((bookItem, index) => {
      return <BookItem book={bookItem} key={index} />;
    });
  }

  componentDidMount() {
    this.fetchBooks();
  }
  render() {
    return <div className="text-red-600">{this.bookLayout()}</div>;
  }
}

export default Books;
