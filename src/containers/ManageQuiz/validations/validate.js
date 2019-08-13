const validate = (values) => {
    let error = {}

    if (!values.title) {
        error.title = 'Please enter question'
    }

    return error
}

export default validate;