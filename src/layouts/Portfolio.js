import React from 'react';
import { Container, Button, Typography } from '@material-ui/core';
import dataCarouselPortfolio from './../assets/constants/dataCarouselPortfolio';
import CarouselImageText from '../components/CarouselImageText';

export default function Portfolio(props) {
    const [activeStep, setActiveStep] = React.useState(1);

    function handleMoreImage() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
    
    function handleLessImage() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

  return (
    <Container maxWidth="lg">
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
            disabled={activeStep === dataCarouselPortfolio.length}  
        >
            +
        </Button>
        <Typography>Building page, please come back later.</Typography>
        <CarouselImageText nb={activeStep} data={dataCarouselPortfolio}/>
    </Container>
  )
}