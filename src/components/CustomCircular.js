import React from 'react';
import { Grid, CircularProgress, CardHeader, CardActionArea, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Trans } from 'react-i18next';

const useStyles = makeStyles(theme => ({
    root: {
          width: '100%',
          margin: theme.spacing(1)
    },
    card: {
		maxWidth: 345,
		textAlign: 'center'
    }
  }));


function CustomCircular({data}) {
    const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	function handleClickOpen() {
		setOpen(prevActiveStep => !prevActiveStep);
	}
  
    

    return(
        <Grid item xs={12} sm={6} md={3} className={classes.root}>
            <Card className={classes.card}>
                <CardActionArea
                    onClick={() => handleClickOpen(data.value)}
                >
                    <CardHeader
                        title={data.description}
                    />
                    <CardContent>
                        <CircularProgress
							variant={data.variant}
							color={data.color}
							value={data.value}
							size={data.size}
							thickness={data.thickness}
						/>
						{
							open ? 
							<Typography component="h4" variant="subtitle2"><Trans i18nKey={data.details}/></Typography> :
							null
						}
                    </CardContent>
                </CardActionArea>
            </Card>
			
        </Grid>
    )};

export default CustomCircular;