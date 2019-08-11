import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { renderSingleSelect } from '../../../components/fields/reduxFields';
import { getSkills, getQuestionBySkill } from '../actions'
import { Paper } from '@material-ui/core';

class Quiestionnaire extends Component {

    constructor(props) {
        super(props)

        this.state = {
            skillsArray: [],
            selectedSkill: ''
        }
    }

    componentWillMount() {
        this.props.getSkills()
    }

    handleChange = (event) => {
        this.setState({
            selectedSkill: event.target.value
        }, () => {
            this.props.getQuestionBySkill(this.state.selectedSkill)
        })
    }

    render() {
        return (
            <div className="p-4">
                <form>
                    <div className='row'>
                        <div className="col-md-3">
                            <Field
                                name="skill"
                                label="Skill"
                                selected={this.state.selectedSkill}
                                handleChange={this.handleChange}
                                options={this.props.skillsArray}
                                fullWidth={true}
                                component={renderSingleSelect}
                            />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            {this.props.questions_based_on_skill.map(question => {
                                return (
                                    <Paper className="p-3">
                                        <p>{question.title}</p>
                                    </Paper>
                                )
                            })}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        skillsArray: state.quiz.skills,
        questions_based_on_skill: state.quiz.questions_based_on_skill
    }
}


export default connect(mapStateToProps, { getSkills, getQuestionBySkill })(reduxForm({
    form: 'questionsForm'
})(Quiestionnaire))