import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { List, ListItem, Drawer, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SchoolIcon from '@material-ui/icons/School';
import InvoiceIcon from '@material-ui/icons/Description'
import LeaveManagementIcon from '@material-ui/icons/TransferWithinAStation';
import EmployeeIcon from '@material-ui/icons/Group';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = (props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    // Hook for drawer
    const [openDrawer, serDrawer] = React.useState(false);


    function handleMenu(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    function handleToggleDrawer() {
        serDrawer(!openDrawer)
    }

    const logout = () => {
        localStorage.clear()
        props.history.push('/')
    }

    return (
        <div className={classes.root}>
            <Drawer open={openDrawer} onClose={handleToggleDrawer} >
                <div className="p-2">
                    <h3 className="text-center mt-3">HR Admin</h3>
                    <List className="mx-3 mt-4">
                        <ListItem button onClick={() => { props.history.push('/employees') }}>
                            <ListItemIcon><EmployeeIcon /></ListItemIcon>
                            <ListItemText primary={'Employees'} />
                        </ListItem>
                        <ListItem button onClick={() => { props.history.push('/quiz') }}>
                            <ListItemIcon><SchoolIcon /></ListItemIcon>
                            <ListItemText primary={'Quiz (Interview)'} />
                        </ListItem>
                        <ListItem button onClick={() => { props.history.push('/salary-slip') }}>
                            <ListItemIcon><InvoiceIcon /></ListItemIcon>
                            <ListItemText primary={'Salary Slip'} />
                        </ListItem>
                        <ListItem button onClick={() => { props.history.push('/leaves') }}>
                            <ListItemIcon><LeaveManagementIcon /></ListItemIcon>
                            <ListItemText primary={'Leave Management'} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <AppBar position="static">
                <Toolbar className="d-flex justify-content-between">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleToggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}><i className="zmdi zmdi-account"></i><span className="mx-2">User Profile</span></MenuItem>
                            <MenuItem onClick={logout}><i className="zmdi zmdi-run"></i> <span className="mx-2">Logout</span></MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;