import React, { Component } from 'react'
import Header from '../../components/header/Header';
import EmployeesTable from './components/EmployeesTable'

export default class Employees extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="m-5">
                    <EmployeesTable />
                </div>
            </div>
        )
    }
}
