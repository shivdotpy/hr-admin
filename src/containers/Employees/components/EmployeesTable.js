import React, { Component } from 'react'
import MaterialTable from "material-table";

export default class DashboardTable extends Component {
    render() {
        return (
                <MaterialTable
                    columns={[
                        { title: "EmpID", field: "empId" },
                        { title: "FirstName", field: "firstName" },
                        { title: "LastName", field: "lastName"},
                        { title: "Mobile Number", field: "mobile"},
                        {title: "Role", field: "role"}
                        
                    ]}
                    data={this.props.employee_list}
                    title="Employees"
                    actions={[
                        {
                          icon: 'save',
                          tooltip: 'Save User',
                          onClick: (event, rowData) => alert("You saved " + rowData.name)
                        },
                        rowData => ({
                          icon: 'delete',
                          tooltip: 'Delete User',
                          onClick: (event, rowData) => alert("You want to delete " + rowData.name),
                          disabled: rowData.birthYear < 2000
                        })
                      ]}
                      options={{
                        actionsColumnIndex: -1,
                        pageSize: 10
                      }}
                />
        )
    }
}
