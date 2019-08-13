import React, { Component } from 'react';
import Header from '../../components/header/Header';
import QuestionsTable from './components/QuestionsTable';
import QuestionModal from './components/QuestionModal';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { reset } from 'redux-form';

class ManageQuiz extends Component {

    constructor(props) {
        super(props)

        this.state = {
            openQuestionModal: false,
            questionModalTitle: ''
        }
    }

    openQuestionModal = (questionId) => {
        this.props.dispatch(reset('employeeForm'))

        this.setState({
            openQuestionModal: true,
            questionModalTitle: Number.isInteger(questionId) ? 'Edit' : 'Add' // **
        })
    }

    closeQuestionModal = () => {
        this.setState({
            openQuestionModal: false
        })
    }

    render() {
        return (
            <div>
                <Header history={this.props.history} />
                <div className="row mx-5 mt-4 d-flex flex-row-reverse">
                    <Button variant="contained" color="secondary" onClick={this.openQuestionModal}>
                        Add Question
                    </Button>
                </div>
                <div className="mx-5 mt-4">
                    <QuestionsTable />
                </div>
                <div>
                    <QuestionModal
                        questionModalTitle={this.state.questionModalTitle}
                        openQuestionModal={this.state.openQuestionModal}
                        closeQuestionModal={this.closeQuestionModal}
                    />
                </div>
            </div>
        )
    }
}


export default connect(null, null)(ManageQuiz)