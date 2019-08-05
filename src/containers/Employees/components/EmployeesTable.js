import React, { Component } from 'react'
import MaterialTable from "material-table";
import { deleteEmployee } from '../actions'
import { connect } from 'react-redux';

class EmployeesTable extends Component {
  render() {
    return (
      <MaterialTable
        columns={[
          { title: "EmpID", field: "empId" },
          { title: "FirstName", field: "firstName", render: rowData => <p style={{textTransform: 'capitalize'}}>{rowData.firstName}</p> },
          { title: "LastName", field: "lastName", render: rowData => <p style={{textTransform: 'capitalize'}}>{rowData.lastName}</p> },
          { title: "Mobile Number", field: "mobile" },
          { title: "Role", field: "role" }

        ]}
        data={this.props.employee_list}
        title="Employees"
        actions={[
          {
            icon: 'edit',
            tooltip: 'Edit User',
            onClick: (event, rowData) => this.props.openEditEmployeeModal(rowData.empId)
          },
          rowData => ({
            icon: 'delete',
            tooltip: 'Delete User',
            onClick: (event, rowData) => this.props.deleteEmployee(rowData.empId),
            disabled: rowData.role === 'admin'
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

const mapStateToProps = (state) => {
  return {

  }
}


export default connect(mapStateToProps, { deleteEmployee })(EmployeesTable)