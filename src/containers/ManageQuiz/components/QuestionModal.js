import React, { Component } from 'react'
import { Dialog, Slide, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { renderTextField } from '../../../components/fields/reduxFields';
import validate from '../validations/validate';
import {addQuestion} from '../actions'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


class QuestionModal extends Component {

    onAddQuestionSubmit = (formProps) => {
        this.props.addQuestion(formProps)
    }

    render() {

        const { handleSubmit } = this.props;

        const renderOptions = ({ fields, meta: { error, submitFailed } }) => (

            <div>
                {fields.map((member, index) => (
                    <div className="row mt-3" key={index}>
                        <div className="col-md-6" >
                            {/* <button
                            type="button"
                            title="Remove Member"
                            onClick={() => fields.remove(index)}
                        /> */}
                            <Field
                                name={`${member}.option`}
                                type="text"
                                fullWidth={true}
                                component={renderTextField}
                                label="Option"
                            />
                        </div>
                        <div className="col-md-6">
                            <Field
                                name={`${member}.correct`}
                                type="text"
                                fullWidth={true}
                                component={renderTextField}
                                label="Correct"
                            />
                        </div>
                        {/* <FieldArray name={`${member}.hobbies`} component={renderHobbies} /> */}
                    </div>
            ))}
                <div className="col-12 mt-3">
                    <Button variant="contained" color="primary" onClick={() => fields.push({})}>
                        Add Option
                    </Button>
                </div>
            </div>
        )

        return (
            <Dialog
                open={this.props.openQuestionModal}
                TransitionComponent={Transition}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{`${this.props.questionModalTitle} Question`}</DialogTitle>
                <DialogContent style={{ width: '600px' }}>
                    <form onSubmit={handleSubmit(this.onAddQuestionSubmit)}>

                        <div className="row">
                            <div className="col-12">
                                <Field
                                    label="Title"
                                    name="title"
                                    fullWidth={true}
                                    component={renderTextField}
                                />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <Field
                                    label="Skill"
                                    name="skill"
                                    fullWidth={true}
                                    component={renderTextField}
                                />
                            </div>
                            <div className="col-md-6">
                                <Field
                                    label="Type"
                                    name="type"
                                    fullWidth={true}
                                    component={renderTextField}
                                />
                            </div>
                        </div>
                        <FieldArray name="options" component={renderOptions} />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={this.props.closeQuestionModal}>
                        Close
                    </Button>
                    <Button color="primary" onClick={handleSubmit(this.onAddQuestionSubmit)}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {addQuestion})(reduxForm({
    form: 'questionForm',
    enableReinitialize: true,
    validate
})(QuestionModal))