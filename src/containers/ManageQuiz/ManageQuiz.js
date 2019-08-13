import React, { Component } from 'react'
import Header from '../../components/header/Header'
import QuestionsTable from './components/QuestionsTable';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core'

class ManageQuiz extends Component {

    render() {
        return (
            <div>
                <Header history={this.props.history} />
                <div className="row mx-5 mt-4 d-flex flex-row-reverse">
                    <Button variant="contained" color="secondary" onClick={this.openEmployeeModal}>
                        Add Question
                    </Button>
                </div>
                <div className="mx-5 mt-4">
                    <QuestionsTable />
                </div>
            </div>
        )
    }
}


export default connect(null, null)(ManageQuiz)