const validate = (values) => {

    const error = {};

    if (!values.email) {
        error.email = 'Please enter email'        
    }

    if (!values.password) {
        error.password = 'Please enter password'
    }

    return error
}

export default validate;