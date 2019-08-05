import React from 'react';
import { Container, GridListTile, GridListTileBar, IconButton, GridList } from '@material-ui/core';
import dataCarouselPortfolio from './../assets/constants/dataCarouselPortfolio';
import { makeStyles } from '@material-ui/core/styles';
import PortfolioToolbar from '../components/PortfolioToolbar';
import InfoIcon from '@material-ui/icons/Info';
import { Trans } from 'react-i18next';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: 480,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    }
  }));

export default function Portfolio() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        number: '5',
        filter: '',
        page: '0'
      });

    const getData = data => {
        data.target.name === 'filter' || data.target.name === 'number' ?
        setValues(oldValues => ({
            ...oldValues,
            [data.target.name]: data.target.value,
            page: 0
        }))        
        : setValues(oldValues => ({
            ...oldValues,
            [data.target.name]: data.target.value,
        }));
    }

    const filteredData = values.filter || values.page || values.number ? 
      dataCarouselPortfolio.filter((tile, index) =>
        (values.filter ? tile.tag === values.filter : true) &&
        index >= values.page * values.number + 1 &&
        index <= (values.page + 1) * values.number
      ) :
      dataCarouselPortfolio;

  return (
    <Container maxWidth="lg" className={classes.root}>
        <PortfolioToolbar onChange={getData} data={dataCarouselPortfolio} values={values}/>
        <GridList cellHeight={240} className={classes.gridList}>
            {filteredData.map((tile, index) => (
            <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.caption} />
                <GridListTileBar
                title={tile.caption}
                subtitle={<Trans i18nKey={tile.moreDetail}/>}
                actionIcon={
                    <IconButton aria-label={`info about ${tile.caption}`} className={classes.icon}>
                    <InfoIcon />
                    </IconButton>
                }
                />
            </GridListTile>
            ))}
        </GridList>
    </Container>
  )
}