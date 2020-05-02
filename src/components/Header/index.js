import React from 'react';
import './styles.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'right',
    margin: '5px',
  },
  customApp: {
    backgroundColor: 'white',
    color: '#3f51b5',
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.customApp}>
        <Toolbar>
          <PeopleIcon />
          <Typography variant="h6" className={classes.title}>
            Nome da pessoa
          </Typography>
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200/300" />
        </Toolbar>
      </AppBar>
    </div>
  );
}