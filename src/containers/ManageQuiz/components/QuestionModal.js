import React, { Component } from 'react'
import { Dialog, Slide, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { renderTextField } from '../../../components/fields/reduxFields';
import validate from '../validations/validate';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


class QuestionModal extends Component {

    onAddQuestionSubmit = (formProps) => {
        console.log(formProps)
    }

    render() {

        const { handleSubmit } = this.props;

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
                            <div className="col-md-6">
                                <Field
                                    label="skill"
                                    name="skill"
                                    fullWidth={true}
                                    component={renderTextField}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Field
                                    label="Question"
                                    name="question"
                                    fullWidth={true}
                                    component={renderTextField}
                                />
                            </div>
                        </div>
                        {/* <div className="row">
                            <FieldArray name="members" component={renderTextField} />
                        </div> */}
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

export default connect(mapStateToProps, {})(reduxForm({
    form: 'questionForm',
    enableReinitialize: true,
    validate
})(QuestionModal))