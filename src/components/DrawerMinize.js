import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer, ListItem, ListItemIcon, makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import React from 'react';
import TranslateContentMenu from '../variables/TranslateContentMenu';




const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
}));

function DrawerMinimize(props) {
    const classes = useStyles();

    return(
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: props.open,
                [classes.drawerClose]: !props.open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: props.open,
                    [classes.drawerClose]: !props.open,
                }),
            }}
            open={props.open}
        >
            <div className={props.toolbarClass} />
            <List>
                <ListItem button key="Collapse" onClick={props.toggleDrawer}>
                    <ListItemIcon><FontAwesomeIcon icon="bars" size="2x"/></ListItemIcon>
                </ListItem>
                <TranslateContentMenu/>
                </List>
        </Drawer>
    )};

export default DrawerMinimize;