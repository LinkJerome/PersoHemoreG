import React from 'react';
import { Grid, Typography, Container, LinearProgress } from '@material-ui/core';
import { withTranslation } from 'react-i18next';


function About({ t }) {
  return (
        <Container maxWidth="xl">
            <Typography variant="h3" component="h1"  id="infos">{t('aboutMe')}</Typography>
            <Typography variant="h4" component="h2">{t('whoAmI')}</Typography>
            <Grid container data-av-animation="fadeIn">
                <Grid item sm={12} md={6}>
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
                <Grid item sm={12} md={6}>
                    <Typography variant="h5" component="h3">{t('mySkills')}</Typography>
                    <Typography variant="h6" component="h4">
                        {t('professionalSummary')}
                    </Typography>
                    <Typography component="p">HTML/CSS - 90%</Typography>
                    <LinearProgress variant="buffer" color="secondary" value={90} valueBuffer={100}/>
                    <Typography component="p">Javascript - 85%</Typography>
                    <LinearProgress variant="buffer" color="secondary" value={85} valueBuffer={100}/>
                    <Typography component="p">React.JS - 60%</Typography>
                    <LinearProgress variant="buffer" color="secondary" value={60} valueBuffer={100}/>
                    <Typography component="p">PHP - 70%</Typography>
                    <LinearProgress variant="buffer" color="secondary" value={70} valueBuffer={100}/>
                    <Typography component="p">SQL - 60%</Typography>
                    <LinearProgress variant="buffer" color="secondary" value={60} valueBuffer={100}/>
                    <Typography component="p">C/C++ - 75%</Typography>
                    <LinearProgress variant="buffer" color="secondary" value={75} valueBuffer={100}/>
                    <Typography component="p">Unix - 65%</Typography>
                    <LinearProgress variant="buffer" color="secondary" value={65} valueBuffer={100}/>
                    <Typography component="p">Suite Adobe - 80%</Typography>
                    <LinearProgress variant="buffer" color="secondary" value={80} valueBuffer={100}/>
                </Grid>
            </Grid>
            <Grid container>
                
            </Grid>
        </Container>
  )};

  export default withTranslation()(About);