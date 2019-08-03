import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faTwitter, faFirefox } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faBars, faBriefcase, faEnvelope, faFilePdf, faProjectDiagram, faStar, faVenusMars, faHome, faFlag, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import DrawerMinimize from '../components/DrawerMinize';
// import Footer from './Footer';
import Header from './Header';
import routes from '../routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

library.add(faTwitter, faLinkedin, faFirefox, faFilePdf, faEnvelope, faBars, faVenusMars, faStar, faProjectDiagram, faBriefcase, faAngleDown, faHome, faFlag, faDownload);


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
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
    app : {
        paddingBottom: '3vw'
    }
}));

function Website() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const { i18n } = useTranslation();

    function toggleDrawerState() {
        setOpen(!open);
    }

    function _handleChangeLanguage() {
        const nextLanguage = localStorage.i18nextLng === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(nextLanguage);
    }

    return (
        <div className={classes.root}>
            <Router>
                <DrawerMinimize
                    open={open}
                    toggleDrawer={toggleDrawerState}
                    changeLanguage={_handleChangeLanguage}
                    toolbarClass={classes.toolbar}
                />
                <Container maxWidth="xl" /*className={classes.app}*/>
                    <Header />
                    {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                    ))}
                    {/* <Footer/> */}
                </Container>
            </Router>
        </div>
    );
  }

export default Website;