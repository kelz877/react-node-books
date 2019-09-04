import React, {Component} from 'react'

class DisplayBooks extends Component {

    constructor(props) {
        super(props)
    }

    deleteBook = (id) => {
        fetch('http://localhost:8080/delete-book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
    }

    render() {

        let bookItems = this.props.books.map(book => {
            return (<div>
                    <div>{book.title}</div>
                    <button onClick={() => this.deleteBook(book.id)}>Delete</button>
                    </div>
            )
        })

        return <div>
                    <h1>Book List</h1>
                    {bookItems}
                </div>
    }
}

export default DisplayBooks;