import React, {Component} from 'react';
import App from './App';
import {NavLink} from 'react-router-dom';

export class Menu extends Component {
    render() {
        return <ul>
                <li>Home</li>
                <li>View Books</li>
                <li>Add Book</li>
                <li>Update Book</li>
            </ul>
    }
}

export class Footer extends Component {
    render() {
        return <div>Footer</div>
    }
}


export class BaseLayout extends Component {
    render() {
        return <div>
                <Menu />
                {this.props.children}
                <Footer />

        </div>
    }
}