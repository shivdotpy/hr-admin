import React, { Component } from 'react'
import MaterialTable from 'material-table';
import { connect } from 'react-redux';
import { getAllQuestions } from '../actions'

class QuestionsTable extends Component {

    componentWillMount() {
        this.props.getAllQuestions()
    }

    render() {
        return (
            <div>
                <MaterialTable
                    title="Quiz questions"
                    columns={[
                        { title: "Skill", field: 'skill' },
                        { title: "Title", field: 'title' },
                        { title: "Type", field: 'type' },
                        { title: "Options Count", render: rowData => rowData.options.length }

                    ]}
                    data={this.props.all_question_list}
                    actions={[
                        {
                            icon: 'edit',
                            tooltip: 'Edit Question',
                            onClick: (event, rowData) => this.props.openEditEmployeeModal(rowData.empId)
                        },
                        rowData => ({
                            icon: 'delete',
                            tooltip: 'Delete Employee',
                            onClick: (event, rowData) => this.props.deleteEmployee(rowData.empId),
                            disabled: rowData.role === 'admin'
                        }),
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

const mapStateToProps = (state) => {
    return {
        all_question_list: state.manageQuiz.all_question_list
    }
}

export default connect(mapStateToProps, { getAllQuestions })(QuestionsTable)