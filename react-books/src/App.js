import React, {Component} from 'react';
import DisplayBooks from './DisplayBooks'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      books: []
    }

    this.fetchBooks()

  }

  fetchBooks = () => {
    fetch('http://localhost:8080/books')
    .then(response => response.json())
    .then(json => {
      this.setState({
        books: json
      })
    })
  }

  render() {
    return <div>
            <DisplayBooks books={this.state.books} />
          </div>
  }


}

export default App;