import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { renderSingleSelect } from '../../../components/fields/reduxFields';
import { getSkills, getQuestionBySkill } from '../actions'
import { Card, CardContent, RadioGroup, Radio, FormControlLabel, Checkbox, CardActions, Button } from '@material-ui/core';

class Quiestionnaire extends Component {

    constructor(props) {
        super(props)

        this.state = {
            skillsArray: [],
            selectedSkill: '',
            disableDropdown: false,
            questionIndex: 0
        }
    }

    componentWillMount() {
        this.props.getSkills()
    }

    handleChange = (event) => {
        this.setState({
            selectedSkill: event.target.value,
            disableDropdown: true
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
                                disabled={this.state.disableDropdown}
                                selected={this.state.selectedSkill}
                                handleChange={this.handleChange}
                                options={this.props.skillsArray}
                                fullWidth={true}
                                component={renderSingleSelect}
                            />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 p-3">
                            {this.props.questions_based_on_skill.map((question, index) => {

                                if (this.state.questionIndex === index) {
                                    return (
                                        <Card>
                                            <CardContent>
                                                <h6 style={{ textTransform: 'uppercase' }}>{question.title}</h6>

                                                {question.type === 'radio' ?

                                                    <RadioGroup
                                                        aria-label="gender"
                                                        name="gender1"
                                                        value="female"
                                                    // onChange={handleChange}
                                                    >
                                                        {question.options.map(option => {
                                                            return <FormControlLabel value={option.option} control={<Radio />} label={option.option} />
                                                        }
                                                        )}
                                                    </RadioGroup> :

                                                    <div>
                                                        {question.options.map(option => {
                                                            return <p><FormControlLabel
                                                                control={<Checkbox checked={true} value="gilad" />}
                                                                label="Gilad Gray"
                                                            /></p>
                                                        })}
                                                    </div>

                                                }

                                                <CardActions className="d-flex flex-row-reverse">
                                                    {this.props.questions_based_on_skill.length - 1 === index ?
                                                        <Button variant="contained" color="secondary" className="ml-2">Finish</Button> : null}
                                                    <Button variant="contained" color="primary" disabled={this.props.questions_based_on_skill.length - 1 === index} onClick={() => { this.setState({ questionIndex: this.state.questionIndex + 1 }) }}>Next</Button>
                                                </CardActions>
                                            </CardContent>
                                        </Card>
                                    )
                                }
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