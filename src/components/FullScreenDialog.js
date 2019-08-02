import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import CarouselImageText from './CarouselImageText';
import { Trans } from 'react-i18next';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const [activeStep, setActiveStep] = React.useState(1);

    function handleMoreImage() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
    
    function handleLessImage() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }



  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <Trans i18nKey="knowMore"></Trans>
      </Button>
      <Dialog
        fullWidth
        maxWidth="xl"
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.data.map(element => element.caption).join(', ')}
            </Typography>
            <Button
              color="inherit"
              onClick={handleLessImage}
              disabled={activeStep === 1}
            >
              -
            </Button>
            <Button
              color="inherit"
              onClick={handleMoreImage}
              disabled={activeStep === props.data.length}  
            >
              +
            </Button>
          </Toolbar>
        </AppBar>
        <CarouselImageText nb={activeStep} data={props.data} />
      </Dialog>
    </div>
  );
}