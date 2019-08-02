import React, { Component } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import {adminLogin} from './actions'

class Login extends Component {

    componentDidMount() {
        this.onLoginSubmit({})
    }

    onLoginSubmit = (formProps) => {
        formProps = {}
        formProps.mobile = '9876542111'
        formProps.password = '123456'

        this.props.adminLogin(formProps)
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row mtcent15">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <Card>
                            <CardContent>
                                <div className="row text-center m-3 mb-5">
                                <i class="zmdi zmdi-account zmdi-hc-4x"></i>
                                    <Typography variant="h2" className="ml-2">
                                        HR Login
                                    </Typography>
                                </div>
                                <div className="row text-center m-3">
                                    <div className="col">
                                        <TextField
                                            fullWidth
                                            label="Email"
                                        />
                                    </div>
                                </div>
                                <div className="row text-center m-3">
                                    <div className="col">
                                        <TextField
                                            fullWidth
                                            label="Password"
                                        />
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col text-center">
                                        <Button variant="contained" color="secondary">
                                            Login
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    console.log(state);
    

    return {

    }
}


export default connect(mapStateToProps, {adminLogin})(Login)