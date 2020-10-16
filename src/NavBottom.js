import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    stickToBottom: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        top: 'auto',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        textTransform: 'none'
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar variant="outlined" color="secondary" className={classes.stickToBottom} elevation={0}>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box>
                                <Button className={classes.menuButton}>Indonesia</Button>
                            </Box>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <Grid item>
                                <Button className={classes.menuButton}>Periklanan</Button>
                                <Button className={classes.menuButton}>Bisnis</Button>
                                <Button className={classes.menuButton}>Tentang</Button>
                                <Button className={classes.menuButton}>Cara Kerja Penelusuran</Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.menuButton}>Privasi</Button>
                                <Button className={classes.menuButton}>Persyaratan</Button>
                                <Button className={classes.menuButton}>Setelan</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div >
    );
}


