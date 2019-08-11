import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { renderTextField } from '../../../components/fields/reduxFields';
import { Button } from '@material-ui/core';
import validate from '../validation/validate';
import { isMobile } from '../../../utils/normalize';
import {saveCandidate} from '../actions'

class CandidateInformation extends Component {

    onSubmitCandidateInfoForm = (formProps) => {

        const formData = {
            name: formProps.name,
            email: formProps.email,
            mobile: formProps.mobile
        };

        this.props.saveCandidate(formData)
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="p-5">
                <form onSubmit={handleSubmit(this.onSubmitCandidateInfoForm)} noValidate>
                    <div className="row">
                        <div className="col-md-4">
                            <Field
                                name="name"
                                label={"Name"}
                                type="text"
                                fullWidth={true}
                                required={true}
                                component={renderTextField}
                            />
                        </div>
                        <div className="col-md-4">
                            <Field
                                name="email"
                                label={"Email"}
                                type="text"
                                fullWidth={true}
                                required={true}
                                component={renderTextField}
                            />
                        </div>
                        <div className="col-md-4">
                            <Field
                                name="mobile"
                                label={"Mobile"}
                                type="text"
                                normalize={isMobile}
                                fullWidth={true}
                                required={true}
                                component={renderTextField}
                            />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <Button color={"secondary"} variant="contained" type="submit">Submit</Button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {

    }
}

export default connect(mapStateToProps, {saveCandidate})(reduxForm({
    form: 'candidateInfoForm',
    enableReinitialize: true,
    validate
})(CandidateInformation))