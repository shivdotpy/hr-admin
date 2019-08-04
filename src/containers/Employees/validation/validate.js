const validate = (values) => {

    const error = {};

    if (!values.empId) {
        error.empId = 'Please enter emp Id'
    }

    if (!values.mobile) {
        error.mobile = 'Please enter mobile'
    }

    if (!values.firstName) {
        error.firstName = 'Please enter first name'
    }
    
    if (!values.lastName) {
        error.lastName = 'Please enter last name'
    }
    
    if (!values.role) {
        error.role = 'Please enter role'
    }
    
    if (!values.salary) {
        error.salary = 'Please enter salary'
    }

    return error
}

export default validate;