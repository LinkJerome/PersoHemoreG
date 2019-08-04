import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import CustomCircular from '../components/CustomCircular';
import { makeStyles } from '@material-ui/core/styles';
import myInfos from './../assets/constants/myInfos';


const useStyles = makeStyles(theme => ({
    root: {
          width: '100%',
          margin: theme.spacing(1)
    }
  }));

function About({ t }) {
    const classes = useStyles();
  return (
        <Container maxWidth="xl">
            <Typography variant="h3" component="h1"  id="infos">{t('aboutMe')}</Typography>
            <Typography variant="h4" component="h2">{t('whoAmI')}</Typography>
            <Grid container data-av-animation="fadeIn" spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" component="h3">{t('personalInfos2')}</Typography>
                    <Typography variant="h6" component="h4">
                        {t('personalSummary')}
                    </Typography>
                    <Typography component="p">{t('identity')}</Typography>
                    <Typography component="p">Jérôme GIL</Typography>
                    <Typography component="p" className="has-text-weight-bold">{t('birth')}</Typography>
                    <Typography component="p">{t('dateOfBirth')}</Typography>
                    <Typography component="p" className="has-text-weight-bold">{t('place')}</Typography>
                    <Typography component="p">{t('placeOfBirth')}</Typography>
                    <Typography component="p" className="has-text-weight-bold">{t('address')}</Typography>
                    <Typography component="p">Lyon, FRANCE</Typography>
                    <Typography component="p" className="has-text-weight-bold">{t('job')}</Typography>
                    <Typography component="p">{t('currentJob')}</Typography>
                    <Typography component="p" className="has-text-weight-bold">Email:</Typography>
                    <Typography
                        component="a"
                        color="inherit"
                        href="mailto:LinkJerome@gmail.com?subject=Contact%20via%20Persohemoreg&amp;body=Pr%C3%A9nom%20%3A%20%0ANom%20%3A%0A%0ASujet%20%3A%0AContenu%20%3A"
                    >
                        LinkJerome@gmail.com
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" component="h3">{t('mySkills')}</Typography>
                    <Typography variant="h6" component="h4">
                        {t('professionalSummary')}
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        alignContent="center"
                        spacing={2}
                        className={classes.root}
                    >
                        {myInfos.map((data, index) => {
                            return <CustomCircular key={index} data={data}/>;
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
  )};

  export default withTranslation()(About);