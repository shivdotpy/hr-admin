const validate = (values) => {

    const error = {};

    if (!values.name) {
        error.name = 'Please enter name'
    }

    if (!values.email) {
        error.email = 'Please enter email'
        // eslint-disable-next-line
    } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
        error.email = 'Please enter valid email'
    }

    if (!values.mobile) {
        error.mobile = 'Please enter mobile'
    }

    return error
}

export default validate;