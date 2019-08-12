import React, { Component } from 'react'
import MaterialTable from 'material-table';

export default class QuestionsTable extends Component {
    render() {
        return (
            <div>
                <MaterialTable
                    title="Quiz questions"
                    columns={[
                        {title: "Skill"},
                        {title: "Title"},
                        {title: "Type"}
                    ]}
                    data={[]}
                    actions={[
                        {
                            icon: 'edit',
                            tooltip: 'Edit User',
                            // onClick: (event, rowData) => this.props.openEditEmployeeModal(rowData.empId)
                          },
                    ]}
                    options={{
                        actionsColumnIndex: -1,
                        pageSize: 10
                      }}
                />
            </div>
        )
    }
}
