import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

class BookList extends Component {
  constructor() {
    super();
    this.state = {
      selectedBookId: null
    }
  }

  handleClick = (bookId) => {
    this.setState({ selectedBookId: bookId })
  }

  displayBooks = () => {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading...</div>
    }
    else {
      return data.books.map(book => {
          return <li key={book.id} onClick={() => this.handleClick(book.id)}>{book.name}</li>
        }
      )
    }
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          {this.displayBooks()}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
