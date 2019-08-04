import React from 'react';
import { TextField } from '@material-ui/core'

export const renderTextField = ({
    input,
    fullWidth,
    label,
    disabled,
    meta: { touched, error },
    ...custom
}) => {
    return (
        <TextField
            name
            fullWidth={fullWidth}
            label={label}
            disabled={disabled ? disabled : false}
            helperText={touched && error}
            error={touched && error ? true : false}
            {...input}
            {...custom}
        />
    )
}