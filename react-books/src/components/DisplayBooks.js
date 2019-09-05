import React, {Component} from 'react'

export class DisplayBooks extends Component {

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
                    <div>
                        <img src={book.imageURL}/>
                        <span>{book.title}</span>
                        <span>{book.author}</span>
                        <span>{book.year}</span>
                    </div>
                    <button onClick={() => this.deleteBook(book.id)}>Delete Book</button>
                    {/* <button onClick={()=> this.renderUpdateForm(book.id)}>Update Book</button> */}
                    </div>
            )
        })

        return <div>
                    <h1>Book List</h1>
                    {bookItems}
                </div>
    }
}

