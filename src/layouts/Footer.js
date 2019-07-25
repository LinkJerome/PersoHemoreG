import React from 'react';
import { Container, Grid, Typography, CssBaseline } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      position: 'fixed',
      bottom: '0px'
    },
  });

function Footer({ t }) {
    const classes = useStyles();

    return (
    <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className={classes.root}>
            <Grid container justify="center">
                <Typography component="p">
                    <strong>HemöreG</strong> {t('by')} <Typography color="inherit" component="a" href="https://www.hemoreg.me">Jérôme GIL</Typography>. {t('codeSource')}
                    <Typography color="inherit" component="a" href="http://opensource.org/licenses/mit-license.php">MIT</Typography>. {t('contentSource')}
                    <Typography color="inherit" component="a" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</Typography>.
                </Typography>
            </Grid>
        </Container>
    </React.Fragment>
    );
}

export default withTranslation()(Footer)