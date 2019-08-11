import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

export const renderTextField = ({
    input,
    fullWidth,
    label,
    disabled,
    required,
    meta: { touched, error },
    ...custom
}) => {
    return (
        <TextField
            name
            fullWidth={fullWidth}
            label={label}
            disabled={disabled ? disabled : false}
            required={required ? true : false}
            helperText={touched && error}
            error={touched && error ? true : false}
            {...input}
            {...custom}
        />
    )
}

export const renderSingleSelect = ({
    label,
    options,
    handleChange,
    selected,
    fullWidth
}) => {

    console.log('selectedSkill', selected)

    return (
        <FormControl fullWidth={fullWidth ? fullWidth : null}>
            <InputLabel htmlFor="age-simple">{label}</InputLabel>
            <Select
                value={selected}
                onChange={handleChange}
            >
                {options.map(item => <MenuItem value={item.skill} key={item.skill}> <span style={{ textTransform: 'capitalize' }}>{item.skill}</span></MenuItem>)}
            </Select>
        </FormControl>
    )
}