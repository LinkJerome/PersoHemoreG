import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Content from './Content';
import DrawerMinimize from './DrawerMinize';
import Footer from './Footer';
import Header from './Header';
import Timeline from './Timeline';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf, faEnvelope, faBars, faVenusMars, faStar, faProjectDiagram, faBriefcase, faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faTwitter, faLinkedin, faFilePdf, faEnvelope, faBars, faVenusMars, faStar, faProjectDiagram, faBriefcase, faAngleDown);


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    title: {
        flexGrow: 1,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function Website() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    function toggleDrawerState() {
        setOpen(!open);
    }

    return (
        <div className={classes.root}>
            <DrawerMinimize open={open} toggleDrawer={toggleDrawerState} toolbarClass={classes.toolbar}/>
            <Container maxWidth="xl">
                <Header />
                <Content contentClass={classes.content} toolbarClass={classes.toolbar}>
                    <Timeline/>
                </Content>
                <Footer/>
            </Container>
        </div>
    );
  }

export default Website;