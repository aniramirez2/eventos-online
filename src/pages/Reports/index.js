import React, {useEffect} from 'react';
import './styles.css';
import Header from './../../components/Header';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Chip from '@material-ui/core/Chip';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    alignContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: '32px',
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function Reports() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [list, setList] = React.useState([]);
  const [modalStyle] = React.useState(getModalStyle);
  const token = localStorage.getItem('makelinks-token');

  useEffect(() => {
    api.get('network/match', {headers: {
      Authorization: `Token ${token}`
    }}).then(response => {
      setList(response.data);
      console.log("match lists", response.data);
    })
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmail = (mail) => {
    window.location.href = `mailto:${mail}`; 
  }
  const handleLinkedin = (linkedin) => {
    window.location.href = linkedin; 
  }
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className="reports-modal-title">
        Tem certeza que deseja excluir o cartão?
      </div>
      <p id="simple-modal-description" style={{marginBottom:'41px'}}>
        Se deletar este cartão você perderá todas as suas informações.
      </p>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <Button variant="contained" onClick={handleClose} >
          VOLTAR
        </Button>
        <Button variant="contained" color="secondary" onClick={handleClose} >
          EXCLUIR
        </Button>
      </div>
    </div>
  );

  

  return (
    <div>
      <Header/>
      <Grid container className="custom-margin">
        <Grid item xs={12} sm={12} md={3}>
          <Grid container className="custom-container">
            <Typography variant="h6" className="title">
              Seus últimos eventos
            </Typography>
            <Card className="root-fourth-active" >
              <CardContent>
                <Typography className="title2" variant="h6" gutterBottom>
                  DIGITALKS expo2020
                  <Typography variant="body2" component="p">
                    01 a 05 de maio
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
            <Card className="root-fourth" >
              <CardContent>
                <Typography className="title2" variant="h6" gutterBottom>
                  DIGITALKS expo2020
                  <Typography variant="body2" component="p">
                    01 a 05 de maio
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={9} className="home-border-container" style={{height:'100vh'}}>
          <Grid container className="custom-container">
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="h6" className="title">
                Relatorios de networking
              </Typography>
            </Grid>
            { list.map(item => { return (
            <Grid item xs={12} sm={12} md={6} key={item.match.id}>
              <Card className="reports-cusotm-cards">
                <CardContent>                    
                  <Grid container className="custom-container">
                    <Grid item xs={12} sm={12} md={4}>
                      <div style={{textAlign:'center'}}>
                        <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/75.jpg" className={classes.large} />
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                      <Typography className="reports-title" variant="h6" gutterBottom style={{marginTop: '35px'}}>
                        {item.match.name}
                        <div style={{marginTop: '10px'}}>
                          <MailIcon color="action" onClick={() => handleEmail(item.match.email)} />
                          <LinkedInIcon color="action" onClick={() => handleLinkedin(item.match.linkedin_url)} />
                        </div>
                      </Typography>
                    </Grid>
                    <Grid container >
                      <div className="reports-commons-title">
                        Interesses em comum no evento
                      </div>
                      <div style={{marginTop:'20px', marginBottom:'20px'}}>
                        {item.match.interests.map(interest => {
                          return (<Chip style={{marginRight:'16px'}} label={interest.interest.name} color="primary"/>)
                        })}                        
                      </div>
                      <div style={{display:'flex'}}>
                        <FormatQuoteIcon color="secondary" style={{ transform: 'scaleX(-1)'}}/>
                        <p className="reports-about">
                          {item.match.description}
                        </p>
                        <FormatQuoteIcon color="secondary" />
                      </div>
                      <div style={{display:'flex', justifyContent:'flex-end', width:'100%'}}>
                        <DeleteIcon color="action" onClick={handleOpen} />
                        <FavoriteIcon color="action" />
                      </div>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>)})
            }
          </Grid>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{padding:'32px 32px'}}
      >
        {body}
      </Modal>
    </div>
  );
}