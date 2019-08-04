import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, FormControl, InputLabel, MenuItem, OutlinedInput } from '@material-ui/core';
import { Trans } from 'react-i18next';


const useStyles = makeStyles(theme => ({
    formControl0: {
      margin: theme.spacing(1),
      left: 0,
      minWidth: 120,
    },
    formControl1: {
      margin: theme.spacing(1),
      right: 0,
      minWidth: 120,
    },
    formControl2: {
      margin: theme.spacing(1),
      left: 200,
      minWidth: 120,
    }
  }));

export default function PortfolioToolbar({onChange, data, values}) {
    const classes = useStyles();
    
      const inputLabel = React.useRef(null);
      const [labelWidth, setLabelWidth] = React.useState(0);
      React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
      }, []);


    const renderMenuItems = () => {
        return (data.filter((tile, index, self) => index === self.findIndex((t) => (
            t.tag === tile.tag))).sort((a, b) => a.tag > b.tag).map((tile, index) => (
            index < values.number ?
                <MenuItem key={index} value={tile.tag}>{tile.tag}</MenuItem>
            : null
        )));
    }

    const renderMenuItems2 = () => {
        const maxi = values.filter ?
            [...Array(Math.round(
                data.filter(tile =>
                    tile.tag === values.filter
                ).length / values.number)+1).keys()] :
            [...Array(Math.round(data.length / values.number)).keys()];

        return (maxi.map(val => (
            <MenuItem key={val} value={val}>{val + 1}</MenuItem>
        )));
    }

  return (
    <form autoComplete="off">
        <FormControl variant="outlined" className={classes.formControl0}>
            <InputLabel ref={inputLabel} htmlFor="outlined-filter-simple">
                <Trans i18nKey="filter"/>
            </InputLabel>
            <Select
                value={values.filter}
                onChange={onChange}
                input={<OutlinedInput labelWidth={labelWidth} name="filter" id="outlined-filter-simple" />}
            >
                <MenuItem value={''}>Aucun</MenuItem>
                {renderMenuItems()}
            </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl1}>
            <InputLabel ref={inputLabel} htmlFor="outlined-number-simple">
                <Trans i18nKey="number"/>
            </InputLabel>
            <Select
                value={values.number}
                onChange={onChange}
                input={<OutlinedInput labelWidth={labelWidth} name="number" id="outlined-number-simple" />}
            >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
            </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl2}>
            <InputLabel ref={inputLabel} htmlFor="outlined-page-simple">
                <Trans i18nKey="page"/>
            </InputLabel>
            <Select
                value={values.page}
                onChange={onChange}
                input={<OutlinedInput labelWidth={labelWidth} name="page" id="outlined-page-simple" />}
            >
                {renderMenuItems2()}
            </Select>
        </FormControl>
    </form>
  )
}