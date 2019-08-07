import React, { Component } from 'react'
import { Button, Dialog, Slide, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { renderTextField } from '../../../components/fields/reduxFields';
import validate from '../validation/validate'
import {saveEmployee} from '../actions'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


class EmployeeModal extends Component {

    onAddEmployeeSubmit = (formProps) => {
        this.props.saveEmployee(formProps)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.add_employee_success && nextProps.add_employee_success !== this.props.add_employee_success) {
            this.props.closeEmployeeModal()
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <Dialog
                    open={this.props.openEmployeeModal}
                    TransitionComponent={Transition}
                    keepMounted
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{`${this.props.employeeModalTitle} Employee`}</DialogTitle>
                    <DialogContent style={{ width: '600px' }}>
                        <form onSubmit={handleSubmit(this.onAddEmployeeSubmit)}>
                            <div className="row px-2">
                                <div className="col-md-6 mb-3">
                                    <Field
                                        name="empId"
                                        label="Emp ID"
                                        type="text"
                                        fullWidth={true}
                                        required={true}
                                        component={renderTextField}
                                    />
                                </div>
                                <div className="col-md-6  mb-3">
                                    <Field
                                        name="mobile"
                                        label="Mobile No."
                                        type="text"
                                        fullWidth={true}
                                        required={true}
                                        component={renderTextField}
                                    />
                                </div>
                                <div className="col-md-6  mb-3">
                                    <Field
                                        name="firstName"
                                        label="First Name"
                                        type="text"
                                        fullWidth={true}
                                        required={true}
                                        component={renderTextField}
                                    />
                                </div>
                                <div className="col-md-6  mb-3">
                                    <Field
                                        name="lastName"
                                        label="Last Name"
                                        type="text"
                                        fullWidth={true}
                                        required={true}
                                        component={renderTextField}
                                    />
                                </div>
                                <div className="col-md-6  mb-3">
                                    <Field
                                        name="role"
                                        label="Role"
                                        type="text"
                                        disabled={true}
                                        fullWidth={true}
                                        component={renderTextField}
                                    />
                                </div>
                                <div className="col-md-6  mb-3">
                                    <Field
                                        name="salary"
                                        label="Salary (LPA)"
                                        type="text"
                                        fullWidth={true}
                                        required={true}
                                        component={renderTextField}
                                    />
                                </div>
                            </div>
                        </form>

                    </DialogContent>
                    <DialogActions>
                        <Button color="secondary" onClick={this.props.closeEmployeeModal}>
                            Close
                    </Button>
                        <Button color="primary" onClick={handleSubmit(this.onAddEmployeeSubmit)}>
                            Save
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => {    
    let initialData = {
        role: 'employee'
    }

    if (state.employee.employee_by_id) {
        let employeeData = state.employee.employee_by_id;
        initialData.empId = employeeData.empId
        initialData.mobile = employeeData.mobile
        initialData.firstName = employeeData.firstName
        initialData.lastName = employeeData.lastName
        initialData.role = employeeData.role
        initialData.salary = employeeData.salary     
    }

    return {
        initialValues: initialData,
        add_employee_success: state.employee.add_employee
    }
}


export default connect(mapStateToProps, {saveEmployee})(reduxForm({
    form: 'employeeForm',
    enableReinitialize: true,
    validate
})(EmployeeModal))