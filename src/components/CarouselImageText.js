import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from "@material-ui/core";


/* SETTING AND CSS OF THE PAGE */

const settings = {
    arrows: false,
    autoplay: true,
    pauseOnFocus: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const useStyles = makeStyles(theme => ({
  container: {
    width: '40vw',
    background: '#ffffff',
    marginLeft: '2em',
    marginRight: '2em'
  },
  img: {
    width: '300px',
    margin: 'auto'
  },
  caption: {
    textAlign: 'center'
  }
}));

/* RENDER FUNCTIONS */

function CarouselImageText (props) {
  const classes = useStyles();
    
    return (
      <div className={classes.container}>
        <Slider {...settings}>
          {props.data.map((content, index) => {
            return (
              <div key={index}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={content.link}
                >
                  <img src={content.img} className={classes.img} alt={content.caption} ></img>
                </Link>
                <br/>
                <Typography component="h3" variant="subtitle1" className={classes.caption} gutterBottom>{content.caption}</Typography>
              </div>
            );
          })}
        </Slider>
      </div>
    );
}

export default CarouselImageText;