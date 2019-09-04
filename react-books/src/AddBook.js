import React, {Component} from 'react';

class AddBook extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            genre: '',
            publisher: '',
            year: '',
            imageURL: ''
        }
    }

    handleSave = () => {

        fetch('http://localhost:8080/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                genre: this.state.genre,
                publisher: this.state.publisher,
                year: this.state.year,
                imageURL: this.state.imageURL
            })
        }).then(response => {
            this.setState({
                title: '',
                genre: '',
                publisher: '',
                year: '',
                imageURL: ''
            })
        })
    }

    handleTextBoxChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return  <div>
                    <input type="text" name="title" value={this.state.title} placeholder="Enter book title" onChange={this.handleTextBoxChange} />
                    <input type="genre" name="genre" value={this.state.genre} placeholder="Enter book genre" onChange={this.handleTextBoxChange} />
                    <input type="text" name="publisher" value={this.state.publisher} placeholder="Enter book publisher" onChange={this.handleTextBoxChange} />
                    <input type="text" name="year" value={this.state.year} placeholder="Enter book year" onChange={this.handleTextBoxChange} />
                    <input type="text" name="imageURL" value={this.state.imageURL}
                    placeholder="Enter book image URL" onChange={this.handleTextBoxChange} />
                    <button onClick={this.handleSave}>Add Book</button>
                </div>  
    }
}

export default AddBook;