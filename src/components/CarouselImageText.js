import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from "@material-ui/core";
import { Trans } from "react-i18next";

/* SETTING AND CSS OF THE PAGE */



const useStyles = makeStyles(theme => ({
  img: {
    width: '80%',
    margin: 'auto'
  },
  caption: {
    textAlign: 'center'
  }
}));

/* RENDER FUNCTIONS */

function CarouselImageText (props) {
  const classes = useStyles();

  const settings = {
    arrows: false,
    autoplay: true,
    pauseOnFocus: false,
    slidesToShow: props.nb,
    slidesToScroll: props.nb,
    dots: false,
    infinite: true,
    speed: 500
  };
    
    return (
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
                <Typography component="h4" variant="h4" className={classes.caption} gutterBottom>{content.caption}</Typography>
                <Typography component="p" variant="subtitle1" className={classes.caption} gutterBottom><Trans i18nKey={content.moreDetail}></Trans></Typography>
              </div>
            );
          })}
        </Slider>
    );
}

export default CarouselImageText;