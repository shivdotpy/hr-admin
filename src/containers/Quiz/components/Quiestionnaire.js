import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { renderSingleSelect } from '../../../components/fields/reduxFields';
import { getSkills, getQuestionBySkill } from '../actions'

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
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    console.log('state', state.quiz)

    return {
        skillsArray: state.quiz.skills
    }
}


export default connect(mapStateToProps, { getSkills, getQuestionBySkill })(reduxForm({
    form: 'questionsForm'
})(Quiestionnaire))