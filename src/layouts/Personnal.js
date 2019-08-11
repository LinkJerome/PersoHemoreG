import { Container, GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HelpIcon from '@material-ui/icons/Help';
import React from 'react';
import { Trans } from 'react-i18next';
import PortfolioToolbar from '../components/PortfolioToolbar';
import dataPortfolio from './../assets/constants/dataPortfolio';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: '100%',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    }
  }));

export default function Personnal() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        number: '5',
        filter: '',
        page: '0',
        size: 240,
        spacing: 0,
        cols: 2
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
      dataPortfolio.filter(tile =>
        (values.filter ? tile.tag === values.filter : true) 
      ) :
      dataPortfolio;

  return (
    <Container maxWidth="xl" className={classes.root}>
        <PortfolioToolbar onChange={getData} data={dataPortfolio} values={values}/>
        <GridList
          cols={values.cols}
          spacing={values.spacing}
          cellHeight={values.size}
          className={classes.gridList}
        >
            {filteredData.map((tile, index) => (
              index >= values.page * values.number &&
              index <= (values.page + 1) * values.number - 1 ?
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.caption} />
                <GridListTileBar
                title={tile.caption}
                subtitle={<Trans i18nKey={tile.moreDetail}/>}
                actionIcon={tile.link ? 
                    <IconButton onClick={() => window.open(tile.link,'_blank')} aria-label={`info about ${tile.caption}`} className={classes.icon}>
                    <HelpIcon />
                    </IconButton> : null
                }
                />
            </GridListTile> : null
            ))}
        </GridList>
    </Container>
  )
}