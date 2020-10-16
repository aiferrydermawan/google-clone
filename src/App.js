import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import AppsIcon from '@material-ui/icons/Apps';
import Box from '@material-ui/core/Box';
import SearchBottom from './SearchBottom';
import NavBottom from './NavBottom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  text: {
    textTransform: 'none',
  }
}));


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid>

      </Grid>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <div className={classes.root} />
          <Box mr={1}>
            <Button size="small" color="inherit" className={classes.text}>Gmail</Button>
          </Box>
          <Box mr={1}>
            <Button size="small" color="inherit" className={classes.text}>Gambar</Button>
          </Box>
          <Box mr={1}>
            <IconButton size="small" aria-label="delete">
              <AppsIcon size="small" />
            </IconButton>
          </Box>
          <Box>
            <Button size="small" disableRipple variant="contained" color="primary" className={classes.text}>Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <SearchBottom />
      <NavBottom />
    </div>
  );
}

export default App;
