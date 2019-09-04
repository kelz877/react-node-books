import React, {Component} from 'react'

class DisplayBooks extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        let bookItems = this.props.books.map(book => {
            return <div>{book.title}</div>
        })

        return <div>
                    <h1>Book List</h1>
                    {bookItems}
                </div>
    }
}

export default DisplayBooks;