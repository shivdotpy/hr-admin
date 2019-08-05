import React, { Component } from 'react'
import Header from '../../components/header/Header';
import EmployeesTable from './components/EmployeesTable';
import EmployeeModal from './components/EmployeeModal';
import { connect } from 'react-redux';
import { getAllEmployees, getEmployeeById } from './actions';
import { Button } from '@material-ui/core';


class Employees extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employeeModalTitle: 'Add',
            openEmployeeModal: false
        }
    }

    componentWillMount() {
        this.props.getAllEmployees()
    }

    closeEmployeeModal = () => {
        this.setState({ openEmployeeModal: false })
    }

    openEmployeeModal = (empId) => {

        // If we are not checking that empId if interger or not it is giving class (reason: unknown)
        this.setState({
            openEmployeeModal: true,
            employeeModalTitle: Number.isInteger(empId) ? 'Edit' : 'Add' // **
        })

        if (Number.isInteger(empId)) {
            this.props.getEmployeeById(empId)
        }

    }

    componentWillReceiveProps(nextProps) {
        
        // If add employee request succeeds , call get all employees
        if (nextProps.add_employee && nextProps.add_employee !== this.props.add_employee) {
            this.props.getAllEmployees()
        }

        if (nextProps.delete_employee && nextProps.delete_employee !== this.props.delete_employee) {
            this.props.getAllEmployees()
        }

    }

    render() {
        return (
            <div>
                <Header history={this.props.history} />
                <div className="row mx-5 mt-4 d-flex flex-row-reverse">
                    <Button variant="contained" color="secondary" onClick={this.openEmployeeModal}>
                        Add Employee
                    </Button>
                </div>
                <div className="mx-5 mt-4">
                    <EmployeesTable
                        employee_list={this.props.employee_list}
                        openEditEmployeeModal={this.openEmployeeModal}
                    />
                </div>
                <div>
                    <EmployeeModal
                        employeeModalTitle={this.state.employeeModalTitle}
                        closeEmployeeModal={this.closeEmployeeModal}
                        openEmployeeModal={this.state.openEmployeeModal}

                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        employee_list: state.employee.employee_list,
        add_employee: state.employee.add_employee,
        delete_employee: state.employee.delete_employee
    }
}

export default connect(mapStateToProps, { getAllEmployees, getEmployeeById })(Employees)