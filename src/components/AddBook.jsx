import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';
import { flow as compose } from 'lodash';

class AddBook extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      genre: "",
      authorId: ""
    }
  }

  displayAuthors = () => {
    let data = this.props.getAuthorsQuery;
    if (data.loading) {
      return <option disabled>Loading Authors...</option>
    }
    else {
      return data.authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBookMutation({ variables: this.state, refetchQueries: [{ query: getBooksQuery }]}); // this method call returns a PROMISE;
  }

  render() {
    return (
      <form id="add-book" onSubmit={this.handleSubmit}>

        <div className="form-field">
          <label>Book Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
        </div>

        <div className="form-field">
          <label>Genre:</label>
          <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange}></input>
        </div>

        <div className="form-field">
          <label>Author</label>
          <select name="authorId" value={this.state.authorId} onChange={this.handleChange}>
            <option>Select Author</option>
            {this.displayAuthors()};
          </select>
        </div>

        <button>Add Book</button>

      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery"}), 
  graphql(addBookMutation, { name: "addBookMutation"})
)(AddBook);