import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, CardHeader, Grid, IconButton, Typography, CardMedia } from '@material-ui/core';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import browser from './../assets/img/website/browser.png';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: '95%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
  }));

function Dashboard({ t }) {
  function _handleOpenLink() {
    var win = window.open('https://www.mozilla.org/fr/firefox/new/', '_blank');
    win.focus();
  }
  const classes = useStyles();

  return (
    <Grid container alignContent="center" alignItems="center">
        <Grid item sm={12} md={8} lg={6} xl={4}>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <FontAwesomeIcon icon={['fab', 'firefox']} size="2x"/>
                    }
                    action={
                        <IconButton aria-label="Settings">
                        <FontAwesomeIcon
                            icon="download"
                            />
                        </IconButton>
                    }
                    title={t('favoriteBrowser')}
                    subheader={t('privacyRespect')}
                    onClick={_handleOpenLink}
                />
                <CardMedia
                    className={classes.media}
                    image={browser}
                    title={t('favoriteBrowser')}
                />

                <CardContent>
                    <Typography>
                        {t('linkDownload')}
                    <Typography
                        color="error"
                        component="a"
                        href="https://www.mozilla.org/fr/firefox/new/"
                        target="_blank"
                        rel="noopener noreferrer"
                    > 
                        Firefox
                    </Typography>
                    {t('linkDownload2')}</Typography>
                    <Typography
                        color="error"
                        component="a"
                        variant="button"
                        href="https://www.mozilla.org/fr/firefox/new/"
                        target="_blank"
                        rel="noopener
                        noreferrer"
                    >
                        {t('linkDownload3')}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
      
    </Grid>
  )};

  export default withTranslation()(Dashboard)