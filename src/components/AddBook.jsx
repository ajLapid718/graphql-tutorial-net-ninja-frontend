import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {
  displayAuthors = () => {
    let data = this.props.data;
    if (data.loading) {
      return <option disabled>Loading Authors...</option>
    }
    else {
      return data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)
    }
  }

  render() {
    return (
      <form id="add-book">

        <div className="form-field">
          <label>Book Name:</label>
          <input type="text"></input>
        </div>

        <div className="form-field">
          <label>Genre:</label>
          <input type="text"></input>
        </div>

        <div className="form-field">
          <label>Author</label>
          <select>
            <option>Select Author</option>
            {this.displayAuthors()};
          </select>
        </div>

        <button>Add Book</button>

      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);