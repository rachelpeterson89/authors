import { Link } from '@reach/router';

const AuthorForm = props => {

    const { form, errors, handleInputChange, handleSubmit, submitValue } = props;

    return (

        <form onSubmit={ handleSubmit } className="col-6 mx-auto">

            <div className="form-group">
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={ form.name }
                    className="form-control"
                    onChange={ handleInputChange }
                />
                <span className="text-danger">{ errors.name ? errors.name.message : "" }</span>
            </div>
            <input type="submit" className="btn btn-primary" value={ submitValue }/>
            <Link to="/" className="btn btn-warning">Cancel</Link>
        </form>
    )
}

export default AuthorForm;