import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import octocat from '../assets/img/website/octocat.png';
import octocatWebp from '../assets/img/website/octocat.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Header(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <figure className="image logo">
                <picture >
                    <source width="100%" srcSet={octocatWebp} type="image/webp"/>
                    <img width="100%" src={octocat} alt="me as an octocat"/>
                </picture>
            </figure>
            <header className="hero-body">
                <Typography component="h2" gutterBottom>&lt;HELLO_WORLD/&gt;</Typography>
                <Typography component="h1" gutterBottom>Je m'appelle HemöreG</Typography>
                <Typography component="h2" gutterBottom>DEVELOPPEUR WEB FULL STACK</Typography>
                <a href="#infos" className="button is-large is-danger is-outlined scroll">EN SAVOIR PLUS &nbsp; <i className="fas fa-angle-down"></i></a>
                <Grid container>
                    <Grid item>
                        <a href="https://www.linkedin.com/in/jerome-gil/" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x"/>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href="https://www.twitter.com/hemoreg" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'twitter']} size="3x"/>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href="https://drive.google.com/open?id=176RlWgIpr83eVcxARGN5j4FNTFQkQzdF" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon="file-pdf" size="3x"/>
                        </a>
                    </Grid>
                    <Grid item>
                        <a href="mailto:LinkJerome@gmail.com?subject=Contact%20via%20Persohemoreg&amp;body=Pr%C3%A9nom%20%3A%20%0ANom%20%3A%0A%0ASujet%20%3A%0AContenu%20%3A">
                            <FontAwesomeIcon icon="envelope" size="3x"/>
                        </a>
                    </Grid>
                </Grid>
            </header>
        </div>
    );
}