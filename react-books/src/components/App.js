import React, {Component} from 'react';
import {DisplayBooks} from './DisplayBooks';
import AddBook from './AddBook';
import '../css/App.css'
import {Route} from 'react-router-dom'
// import UpdateBook from './UpdateBook'


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
      console.log(json)
      this.setState({
        books: json
      })
    })
  }

  render() {
    return <div>
            <Route path="/" exact component={AddBook} />
            <Route path="/books" render = {() => <DisplayBooks books = {this.state.books} /> }/>
          </div>
  }

}
export default App;