import { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import AuthorForm from '../components/AuthorForm';

const Create = props => {

    const initialState = {
        name:""
    }

    const [ authorForm, setAuthorForm ] = useState(initialState);

    const [ errors, setErrors ] = useState({
        name:""
    })

    const handleInputChange = e => {
        setAuthorForm({
            ...authorForm,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/new', authorForm)
            .then(res => {
                if(res.data.results) {
                    navigate('/');
                } else {
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Add an Author</h2>
            <AuthorForm 
                form={ authorForm }
                handleInputChange={ handleInputChange }
                handleSubmit={ handleSubmit }
                errors={ errors }
                submitValue="Submit"
            />
            
        </div>
    )
}

export default Create;