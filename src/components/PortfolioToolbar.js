import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, FormControl, InputLabel, MenuItem, OutlinedInput, Dialog, DialogTitle, DialogContent, Button, DialogActions, IconButton } from '@material-ui/core';
import { Trans } from 'react-i18next';
import TuneIcon from '@material-ui/icons/Tune';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
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
    },
    formControlTune: {
        margin: theme.spacing(1),
        left: 200,
        minWidth: 30,
      },
    formControlPopup: {
      margin: theme.spacing(1),
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

    const [state, setOpen] = React.useState({open: false});
    function handleTogglePopup() {
        setOpen({ open: !state.open });
    }


    const renderMenuItems = () => {
        return (data.filter((tile, index, self) => index === self.findIndex((t) => (
            t.tag === tile.tag))).map((tile, index) => (
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
        
        <FormControl variant="outlined" className={classes.formControlTune}>
            <IconButton edge="start" color="inherit" onClick={handleTogglePopup} aria-label="close">
                <TuneIcon />
            </IconButton>
        </FormControl>
        <Dialog disableBackdropClick disableEscapeKeyDown open={state.open} onClose={handleTogglePopup}>
            <DialogTitle>
                <Trans i18nKey="configurationPortfolio"/>
            </DialogTitle>
            <DialogContent>
                <form className={classes.container}>
                    <FormControl variant="outlined" className={classes.formControlPopup}>
                        <InputLabel ref={inputLabel} htmlFor="outlined-size-simple">
                            <Trans i18nKey="size"/>
                        </InputLabel>
                        <Select
                            value={values.size}
                            onChange={onChange}
                            input={<OutlinedInput labelWidth={labelWidth} name="size" id="outlined-size-simple" />}
                        >
                            <MenuItem value={240}><Trans i18nKey="small"/></MenuItem>
                            <MenuItem value={360}><Trans i18nKey="medium"/></MenuItem>
                            <MenuItem value={480}>Large</MenuItem>
                            <MenuItem value={600}>Extra-large</MenuItem>
                            <MenuItem value={'auto'}>Auto</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControlPopup}>
                        <InputLabel ref={inputLabel} htmlFor="outlined-spacing-simple">
                            <Trans i18nKey="spacing"/>
                        </InputLabel>
                        <Select
                            value={values.spacing}
                            onChange={onChange}
                            input={<OutlinedInput labelWidth={labelWidth} name="spacing" id="outlined-spacing-simple" />}
                        >
                            <MenuItem value={0}><Trans i18nKey="none"/></MenuItem>
                            <MenuItem value={10}><Trans i18nKey="small"/></MenuItem>
                            <MenuItem value={20}><Trans i18nKey="medium"/></MenuItem>
                            <MenuItem value={30}>Large</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="outlined" className={classes.formControlPopup}>
                        <InputLabel ref={inputLabel} htmlFor="outlined-cols-simple">
                            <Trans i18nKey="cols"/>
                        </InputLabel>
                        <Select
                            value={values.cols}
                            onChange={onChange}
                            input={<OutlinedInput labelWidth={labelWidth} name="cols" id="outlined-cols-simple" />}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                    </FormControl>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleTogglePopup} color="primary">
                    <Trans i18nKey="close"/>
                </Button>
            </DialogActions>
        </Dialog>
    </form>
  )
}