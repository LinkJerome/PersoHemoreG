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
import CarouselImageText from '../components/CarouselImageText';
import capgemini from './../assets/img/website/Capgemini.png';
import SNCF from './../assets/img/website/coiffeSNCF.png';
import Hemoreg from './../assets/img/website/HemoreG.gif';
import lyon1 from './../assets/img/website/logo-lyon1.png';
import maquette from './../assets/img/website/maquette.PNG';
import meteo09 from './../assets/img/website/meteo09.png';
import xiot from './../assets/img/website/XIoT.png';
import zupDeCo from './../assets/img/website/zup-de-co.png';



/* SETTING AND CSS OF THE PAGE */

const imgW = "400px";

const dataCarouselImage = [
	{img: capgemini, caption: 'Capgemini, Ho Chi Minh VIETNAM', link: 'https://www.linkedin.com/company/capgeminivietnam'},
	{img: Hemoreg, caption: 'HemöreG'},
	{img: lyon1, caption: 'Université Claude Bernard, Lyon FRANCE', link: 'https://fst-informatique.univ-lyon1.fr'}
];

const dataCarouselImageHemoreg = [
	{img: maquette, caption: 'French Groove', link: 'https://www.frenchgroove.com/'},
	{img: Hemoreg, caption: 'HemöreG', link: 'https://www.hemoreg.me'},
	{img: meteo09, caption: 'Meteo 09', link: 'https://www.facebook.com/Meteo09/'}
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
		return <CarouselImageText data={dataCarouselImageHemoreg} />;
      case 2:
        return (
          <React.Fragment>
			<Typography component="h5" variant="h5" gutterBottom>
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
          </React.Fragment>
        );
      default:
        return <CarouselImageText data={dataCarouselImage} />;
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
          alignItems="center"
		  className={classes.root}
        >
          <Grid item sm={12} md={8} lg={6} xl={4}>
            <Typography variant="h2" component="h2" gutterBottom><Trans i18nKey="myCourse"/></Typography>
            <Typography  variant="subtitle1" component="h3" gutterBottom>
              <Trans i18nKey="myCourseSub"/>
            </Typography>
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
            <Grid
				item sm={12} md={8} lg={6} xl={4} >
              {getStepContent2(activeStep, classes)}
            </Grid>
        </Grid>
    );
  }

export default Timeline;