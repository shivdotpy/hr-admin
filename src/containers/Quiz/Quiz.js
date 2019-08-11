import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/Header';
import QuestionIcon from '@material-ui/icons/QuestionAnswerSharp';
import { Stepper, Step, StepLabel, Button, StepContent } from '@material-ui/core';
import CandidateInformation from './components/CandidateInformation';
import Quiestionnaire from './components/Quiestionnaire';

class Quiz extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activeStep: 1
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.add_candidate && nextProps.add_candidate !== this.props.add_candidate) {
            this.setState({activeStep: 1})
        }
    }

    render() {
        return (
            <div>
                <Header history={this.props.history} />
                <div className="container mt-5">
                    <h3><QuestionIcon style={{ fontSize: '100px' }} color="secondary" /> Quiz</h3>
                    <Stepper activeStep={this.state.activeStep} orientation="vertical">
                        <Step>
                            <StepLabel>Candidate Basic Info</StepLabel>
                            <StepContent>
                                <CandidateInformation/>
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>Questionnaire</StepLabel>
                            <StepContent>
                                <Quiestionnaire/>
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>Submission</StepLabel>
                            <StepContent>
                                <Button color="secondary" onClick={() => { console.log('finished') }}>Finish</Button>
                            </StepContent>
                        </Step>
                    </Stepper>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        add_candidate: state.quiz.add_candidate
    }
}

export default connect(mapStateToProps, null)(Quiz)