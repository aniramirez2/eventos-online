import React, {useEffect, useState} from 'react';
import './styles.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';
import Avatar from '@material-ui/core/Avatar';
import logoImg from '../../assets/logo.svg';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    top: '0px',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'white',
    zIndex:'1200',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'right',
    margin: '5px',
    marginRight: '15px',
    fontSize:'15px',
    color:'#404040',
  },
  customApp: {
    backgroundColor: 'white',
    color: '#3f51b5',
  }
}));

export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const [colorIcon, setColorIcon] = useState('primary');

  useEffect(() => {
    const routes = window.location.href.split('/');
    if(routes[3] === 'reports'){
      setColorIcon('secondary');
    } else {
      setColorIcon('primary');
    }
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.customApp}>
        <Toolbar>
          <Link
            component="button"
            color="inherit"
            onClick={() => {
              history.push('/reports');
            }}
            >
           <PeopleIcon color={colorIcon} />
          </Link>
          <div className="header-logo">
            <Link
              component="button"
              color="inherit"
              onClick={() => {
                history.push('/home');
              }}
            >
              <img src={logoImg} alt="Make Links" />
              </Link>
          </div>
          <Typography variant="h5" className={classes.title}>
            Nome da pessoa
          </Typography>
          <Avatar alt="Remy Sharp" src="https://picsum.photos/200/300" />
        </Toolbar>
      </AppBar>
    </div>
  );
}