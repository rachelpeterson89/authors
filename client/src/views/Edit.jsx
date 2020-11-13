import React, { useState, useEffect } from 'react';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';
import { navigate } from '@reach/router';

const Edit = props => {

    const [ authorForm, setAuthorForm ] = useState({
        name:""
    })

    // const [ authorForm, setAuthorForm ] = useState({})

    const [ errors, setErrors ] = useState({
        name:""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/update/${ props.id }`)
            .then(res => setAuthorForm(res.data.results))
            .catch(err => console.log(err))
    }, [props])

    const handleInputChange = e => {
        setAuthorForm({
            ...authorForm,
            [e.target.name]:e.target.value
        })
    }

    const handleUpdate = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${ props.id }`, authorForm)
            .then(res => {
                if(res.data.results) {
                    navigate('/')
                } else {
                    setErrors(res.data)
                }
            })
            //     navigate(`/`))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2 className="text-center">Edit Author:</h2>
            <AuthorForm
                form={ authorForm }
                errors={ errors }
                value={ props.name }
                handleInputChange={ handleInputChange }
                submitValue="Update"
                handleSubmit={ handleUpdate }
            />
        </div>
    )
}

export default Edit;