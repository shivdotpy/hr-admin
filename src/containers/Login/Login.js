import React, { Component } from 'react'
import { Grid, Card, CardContent, Typography, TextField, Button } from '@material-ui/core'

export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row mtcent15">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <Card>
                            <CardContent>
                                <div className="row text-center m-3 mb-5">
                                    <Typography variant="h2">
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
