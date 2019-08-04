import React, { Component } from 'react'
import Header from '../../components/header/Header';
import EmployeesTable from './components/EmployeesTable';
import EmployeeModal from './components/EmployeeModal';
import { connect } from 'react-redux';
import { getAllEmployees } from './actions';
import { Button} from '@material-ui/core';
import {change} from 'redux-form';



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

    openEmployeeModal = () => {
        this.setState({ openEmployeeModal: true })
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
                    <EmployeesTable employee_list={this.props.employee_list} />
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
        employee_list: state.employee.employee_list
    }
}

export default connect(mapStateToProps, { getAllEmployees })(Employees)