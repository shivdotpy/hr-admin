import React, { Component } from 'react'
import Header from '../../components/header/Header'
import QuestionsTable from './components/QuestionsTable';
import {connect} from 'react-redux';
import {getAllQuestions} from './actions'

class ManageQuiz extends Component {

    componentWillMount() {
        this.props.getAllQuestions()
    }
    render() {
        return (
            <div>
                <Header history={this.props.history} />
                <div className="mx-5 mt-4">
                    <QuestionsTable />
                </div>
            </div>
        )
    }
}


export default connect(null, {getAllQuestions})(ManageQuiz)