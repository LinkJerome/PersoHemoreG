import { Grid, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepContent from '@material-ui/core/StepContent';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Trans } from 'react-i18next';
import FullScreenDialog from '../components/FullScreenDialog';
import capgemini from './../assets/img/website/Capgemini.png';
import SNCF from './../assets/img/website/coiffeSNCF.png';
import Hemoreg from './../assets/img/website/HemoreG.gif';
import lyon1 from './../assets/img/website/logo-lyon1.png';
import maquette from './../assets/img/website/maquette.PNG';
import meteo09 from './../assets/img/website/meteo09.png';
import chutSite from './../assets/img/website/chutsite.jpg';
import improvemygpx from './../assets/img/website/improvemygpx.jpg';
import explateau from './../assets/img/website/explateau.jpg';
import sondouagesite from './../assets/img/website/sondouagesite.jpg';
import persograph from './../assets/img/website/persograph.jpg';
import xiot from './../assets/img/website/XIoT.png';
import zupDeCo from './../assets/img/website/zup-de-co.png';



/* SETTING AND CSS OF THE PAGE */

const imgW = "300vw";

const dataCarouselImageHemoreg = [
	{img: maquette, caption: 'French Groove', link: 'https://www.frenchgroove.com/', moreDetail: 'detailFrenchGroove'},
	{img: Hemoreg, caption: 'HemöreG', link: 'https://www.hemoreg.me', moreDetail: 'detailHemoreg'},
	{img: meteo09, caption: 'Meteo 09', link: 'https://www.facebook.com/Meteo09/', moreDetail: 'detailMeteo09'},
	{img: chutSite, caption: 'Chut Bibliothèque', link: 'https://hemoreg.me/works/chutbibliotheque/', moreDetail: 'detailChutBibliotheque'},
	{img: persograph, caption: 'Perso graph', link: 'https://hemoreg.me/works/persograph/', moreDetail: 'detailPersoGraph'},
];

const dataCarouselImageUCBL = [
	{img: improvemygpx, caption: 'Improve My GPX', link: 'https://hemoreg.me/works/improvemygpx/', moreDetail: 'detailImproveMyGpx'},
	{img: explateau, caption: 'Croque Salade', link: '', moreDetail: 'detailCroqueSalade'},
	{img: sondouagesite, caption: 'Sondouage', link: 'https://hemoreg.me/works/sondouage/', moreDetail: 'detailSondouage'}
];

const useStyles = makeStyles(theme => ({
    root: {
		  width: '100%'
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    actionsContainer: {
      	marginBottom: theme.spacing(2)
    },
    resetContainer: {
      	padding: theme.spacing(3)
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.primary
  }
  }));


  /* RENDER FUNCTIONS */

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <React.Fragment>
            <Typography component="h5" variant="h5">
              <Trans i18nKey="jobList0"/>
            </Typography>
            <br/>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.capgemini.com/wp-content/uploads/2019/02/X-IoT_Secure-and-Agnostic-Device-Management-Platform_Web-PaP.pdf"
            >
              <img src={capgemini} width={imgW} alt="Capgemini Logo"/>
            </Link>
          </React.Fragment>
        );
      case 1:
        return (
          <React.Fragment>
            <Typography component="h5" variant="h5">
                    <Trans i18nKey="jobList1"/>
            </Typography>
            <br/>
            <img src={Hemoreg} width={imgW} alt="HemöreG Logo"/>
            <br/>
            <FullScreenDialog data={dataCarouselImageHemoreg}/>
          </React.Fragment>
        );
      case 2:
        return(
          <React.Fragment>
            <Typography component="h5" variant="h5">
                    <Trans i18nKey="jobList2"/>
            </Typography>
            <br/>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.univ-lyon1.fr/"
            >
              <img src={lyon1} width={imgW} alt="Lyon 1 Logo"/>
            </Link>
            <br/>
            <FullScreenDialog data={dataCarouselImageUCBL}/>
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <Typography component="h5" variant="h5">
                    <Trans i18nKey="jobList3"/>
            </Typography>
            <br/>
            <Link target="_blank" rel="noopener noreferrer" href="https://www.zupdeco.org/">
              <img src={zupDeCo} width={imgW} alt="ZupDeCo Logo"/>
            </Link>
          </React.Fragment>
        );
      case 4:
        return (
          <React.Fragment>
            <Typography component="h5" variant="h5">
                    <Trans i18nKey="jobList4"/>
            </Typography>
            <br/>
            <Link target="_blank" rel="noopener noreferrer" href="https://www.sncf.com/">
              <img src={SNCF} width={imgW} alt="ZupDeCo Logo"/>
            </Link>
          </React.Fragment>
        );
      case 5:
        return (
			<React.Fragment>
				<Trans i18nKey="jobList5"/>
			</React.Fragment>	
		);
      case 6:
        return (
			<React.Fragment>
				<Trans i18nKey="jobList6"/>
			</React.Fragment>	
		);
      default:
        return (
			<React.Fragment>
				<Trans i18nKey="jobListLost"/>
			</React.Fragment>	
		);
    }
  }
  
  function getStepContent2(activeStep, classes) {
    switch (activeStep) {
	  case 0:
		return (
			<Paper className={classes.paper}>
				<Typography component="h5" variant="h5" gutterBottom>
					<Trans i18nKey="jobList0"/>
				</Typography>
				<br/>
				<Link
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.capgemini.com/wp-content/uploads/2019/02/X-IoT_Secure-and-Agnostic-Device-Management-Platform_Web-PaP.pdf"
				>
					<img src={xiot} width={imgW} alt="Capgemini, Vietnam"/>
				</Link>
				<Typography component="h5" variant="subtitle1" gutterBottom>
					<Trans i18nKey="creationYadak"/>
				</Typography>
			</Paper>
		);
      case 1:
        return (
        dataCarouselImageHemoreg.map((data, index) => {
          return(
            <Paper className={classes.paper} key={index}>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={data.link}
              >
                <img src={data.img} width={imgW} alt={data.caption}/>
              </Link>
              <Typography component="h5" variant="subtitle1" gutterBottom>
                {data.caption}
              </Typography>
            </Paper>
          );
        }));
      case 2:
          return (
            dataCarouselImageUCBL.map((data, index) => {
              return(
                <Paper className={classes.paper} key={index}>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.link}
                  >
                    <img src={data.img} width={imgW} alt={data.caption}/>
                  </Link>
                  <Typography component="h5" variant="subtitle1" gutterBottom>
                    {data.caption}
                  </Typography>
                </Paper>
              );
            }));
      default:
        return (null);
    }
  }
function getSteps() {
    return [
      <Trans i18nKey="dateOfTimeline0"/>,
      <Trans i18nKey="dateOfTimeline1"/>,
      <Trans i18nKey="dateOfTimeline2"/>,
      <Trans i18nKey="dateOfTimeline3"/>,
      <Trans i18nKey="dateOfTimeline4"/>,
      <Trans i18nKey="dateOfTimeline5"/>,
      <Trans i18nKey="dateOfTimeline6"/>
    ];
  }

function Timeline() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
    
    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }
    
    function handleReset() {
        setActiveStep(0);
    }


    return (
        <Grid container 
          direction="row"
          justify="center"
          alignItems="flex-start"
          className={classes.root}
        >
          <Grid container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item sm={12} md={8} lg={6} xl={4}>
              <Typography variant="h2" component="h2" gutterBottom>
                <Trans i18nKey="myCourse"/>
              </Typography>
            </Grid>
            <Grid item sm={12} md={8} lg={6} xl={4}>
              <Typography  variant="subtitle1" component="h3" gutterBottom>
                <Trans i18nKey="myCourseSub"/>
              </Typography>
            </Grid>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    <StepContent>
                    <Typography>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                        <div>
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.button}
                        >
                            <Trans i18nKey="back"/>
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                        >
                            {activeStep === steps.length - 1 ? <Trans i18nKey="finish"/> : <Trans i18nKey="next"/>}
                        </Button>
                        </div>
                    </div>
                    </StepContent>
                </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                <Typography><Trans i18nKey="timelineEnd"/></Typography>
                <Button onClick={handleReset} className={classes.button}>
                  <Trans i18nKey="reset"/>
                </Button>
                </Paper>
            )}
            </Grid>
            <Grid item sm={12} md={6} lg={8}>
              <Grid container>
                {getStepContent2(activeStep, classes)}
              </Grid>
            </Grid>
        </Grid>
    );
  }

export default Timeline;