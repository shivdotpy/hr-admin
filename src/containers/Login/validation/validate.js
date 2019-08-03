const validate = (values) => {

    const error = {};

    if (!values.mobile) {
        error.mobile = 'Please enter mobile'        
    }

    if (!values.password) {
        error.password = 'Please enter password'
    }

    return error
}

export default validate;