import React, { Component } from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { adminLogin } from './actions';
import { Field, reduxForm } from 'redux-form';
import validate from './validation/validate';
import {isMobile} from '../../utils/normalize';

// Redux form components
import { renderTextField } from '../../components/fields/reduxFields';

class Login extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    onLoginSubmit = (formProps) => {
        console.log('formprops', formProps)
        formProps = {}
        // this.props.adminLogin(formProps)
    }

    render() {
        const { handleSubmit } = this.props;
        console.log(this.props)
        return (
            <div className="container-fluid">
                <div className="row mtcent15">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <Card>
                            <CardContent>
                                <div className="row text-center m-3 mb-5">
                                    <i className="zmdi zmdi-account zmdi-hc-4x"></i>
                                    <Typography variant="h2" className="ml-2">
                                        HR Login
                                    </Typography>
                                </div>
                                <form onSubmit={handleSubmit(this.onLoginSubmit)}>
                                    <div className="row text-center m-3">
                                        <div className="col">
                                            <Field
                                                name="mobile"
                                                label="Mobile"
                                                type="text"
                                                normalize={isMobile}
                                                fullWidth={true}
                                                component={renderTextField}                                            />
                                        </div>
                                    </div>
                                    <div className="row text-center m-3">
                                        <div className="col">
                                            <Field
                                                name="password"
                                                label="Password"
                                                type="password"
                                                fullWidth={true}
                                                component={renderTextField} />
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col text-center">
                                            <Button variant="contained" color="secondary" type="submit">
                                                Login
                                        </Button>
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}


export default connect(mapStateToProps, {
    adminLogin
})(reduxForm({
    form: 'loginForm',
    validate
})(Login))
