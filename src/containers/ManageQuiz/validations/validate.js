const validate = (values) => {
    let error = {}

    if (!values.question) {
        error.question = 'Please enter question'
    }

    return error
}

export default validate;