import React, { Component } from 'react';
import axios from 'axios';
import BookItem from './bookItem';
import BuyLinks from './buyLinks';
import SearchBar from '../SearchBar';
require('dotenv').config();

//Use the library js-search as you would the FormData HOC

class Books extends Component {
  constructor() {
    super();
    this.state = {
      book: [],
      buyLinks: [],
      author: ''
    };

    this.searchChange = this.searchChange.bind(this);
  }
  // https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=yourkey
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

  searchChange(e) {
    console.log('EVENT CHANGE',{[e.target.name]:e.target.value});
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  searchBarQuery(e) {
    console.log('ONSUBMIT');
    e.preventDefault();
  }

  componentDidMount() {
    this.fetchBooks();
  }
  render() {
    return (
      <div className="text-red-600 grid grid-col-3">
        <SearchBar
          onSubmit={this.searchBarQuery}
          handleChange={this.searchChange}
        />
        {this.bookLayout()}
      </div>
    );
  }
}

export default Books;
