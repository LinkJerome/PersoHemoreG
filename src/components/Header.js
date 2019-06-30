import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import octocat from '../assets/img/website/octocat.png';
import octocatWebp from '../assets/img/website/octocat.webp';
import Link from '@material-ui/core/Link';
import { withTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
});

const linkedinURL = 'https://www.linkedin.com/in/jerome-gil/';
const relConst = "noopener noreferrer";
const targetConst = "_blank";

function Header({ t }) {
    const classes = useStyles();
    const spacing = React.useState(2);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container className={classes.root} maxWidth="xl">
                <Grid 
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                        <figure className="logo">
                            <picture >
                                <source width="100%" srcSet={octocatWebp} type="image/webp"/>
                                <img width="100%" src={octocat} alt="me as an octocat"/>
                            </picture>
                        </figure>
                    </Grid>
                    <Grid item >
                        <Typography variant="h2" component="h2" gutterBottom>&lt;HELLO_WORLD/&gt;</Typography>
                        <Typography variant="h1" component="h1" gutterBottom>{t('myNameIs')}</Typography>
                        <Typography variant="h2" component="h2" gutterBottom>{t('myCurrentJob')}</Typography>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Button className="scroll" color="primary" variant="contained" href="#infos">
                        EN SAVOIR PLUS &nbsp; <FontAwesomeIcon icon="angle-down"/>
                    </Button>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center" spacing={spacing}
                >
                    <Grid item>
                        <Typography>
                            <Link href={linkedinURL} rel={relConst} target={targetConst}>
                                <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x"/>
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Link href="https://www.twitter.com/hemoreg" rel={relConst} target={targetConst}>
                            <FontAwesomeIcon icon={['fab', 'twitter']} size="3x"/>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="https://drive.google.com/open?id=176RlWgIpr83eVcxARGN5j4FNTFQkQzdF" rel={relConst} target={targetConst}>
                            <FontAwesomeIcon icon="file-pdf" size="3x"/>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="mailto:LinkJerome@gmail.com?subject=Contact%20via%20Persohemoreg&amp;body=Pr%C3%A9nom%20%3A%20%0ANom%20%3A%0A%0ASujet%20%3A%0AContenu%20%3A" rel={relConst} target={targetConst}>
                            <FontAwesomeIcon icon="envelope" size="3x"/>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default withTranslation()(Header);