import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const Main = props => {

    const [ authors, setAuthors ] = useState([]);

    const [ deleted, setDeleted ] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data.results))
            .catch(err => console.log(err))
    })

    const deleteAuthor = (id, name) => {
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
            .then(res => {
                if(res.data.results) {
                    setDeleted(!deleted);
                    console.log("${name} was deleted from the DOM.")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Favorite Authors:</h1>
            <Link to="/new" >Add An Author</Link>
            <h2>We have quotes by:</h2>
            <table className="table table-hover col-6 mx-auto">
                <thead>
                    <tr>
                        <th>Author:</th>
                        <th>Actions Available:</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        authors.map((author, i) => <tr key={i}>
                            <td>
                                <Link to={`/${ author._id }`}>{ author.name }</Link>
                            </td>
                            <td>
                                <Link className="btn btn-primary" to={`/edit/${ author._id }`}>Edit</Link>

                                <button 
                                    onClick={()=> {deleteAuthor(author._id, author.name)}}
                                    className="btn btn-danger"
                                    >Delete
                                </button>

                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main;
