import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import logo from './Google.png';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRadius: `50px`,
            },
        }
    },
    text: {
        textTransform: 'none',
    }
}));

export default function SearchBottom() {
    const classes = useStyles();
    return (
        <Box mt={10}>
            <Grid container>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <Grid item xs={12}
                        container
                        justify="center">
                        <Box mb={3}>
                            <img src={logo} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box mb={3}>
                            <TextField fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                placeholder="My name is Ferry Dermawan"
                                className={classes.root}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} container justify="center">
                        <Box mr={3}>
                            <Button variant="contained" className={classes.text}>
                                Penelusuran Google
                    </Button>
                        </Box>
                        <Button variant="contained" className={classes.text}>
                            Saya Lagi Beruntung
                    </Button>
                    </Grid>
                    <Grid item xs={12} container justify="center">
                        <Box mt={3}>
                            <Typography variant="body1">
                                Google menawarkan:
                            <Button className={classes.text}>English</Button>
                                <Button className={classes.text}>Indonesia</Button>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={3} />
            </Grid>
        </Box>
    )
}