import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

class AddBook extends Component {
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
          </select>
        </div>

      </form>
    );
  }
}

export default AddBook;