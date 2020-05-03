import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Header from './../../components/Header';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import VideocamIcon from '@material-ui/icons/Videocam';
import MicIcon from '@material-ui/icons/Mic';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import StorefrontIcon from '@material-ui/icons/Storefront';
import Avatar from '@material-ui/core/Avatar';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import networkingImg from '../../assets/tela-networking 1.png'
import panelImg from '../../assets/paineis.png'
import expositorsImg from '../../assets/expositores.png'
import Modal from '@material-ui/core/Modal';
import Chip from '@material-ui/core/Chip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
function getSteps() {
  return ['Abertura', 'Networking', 'Painéis', 'Encerramento'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return 'Unknown step';
  }
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    alignContent: 'center',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  paper: {
    position: 'absolute',
    width: 700,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: '32px 32px',
  },
  chips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.4),
    },
    width: '300px',
    margin: 'auto',
    marginTop: '20px',
    marginBottom: '30px',
  },
}));

export default function Event() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [confirmed, setConfirmed] = React.useState(false);
  const interesses = 
    {
      inovacao: false,
      netoworking: false,
      atendimento: false,
      tecnologia: false,
      economia: false,
      vendas: false, 
    }
  
  const [interes, setInteres] = React.useState(interesses);
  const [split, setSplit] = React.useState(true);

  const handleSplit = () => {
    setSplit(!split);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleConfirm = () => {
    setConfirmed(true);
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddInteresse = (name) => {
    setInteres({ ...interes, [name]: true });
  }
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <p className="title-modal">Sobre o que você quer conversar hoje?</p>
      <p className="subtitle-modal">
        *Selecione até três temas
      </p>
      <div className={classes.chips}>
          <Chip label="inovação" color={interes['inovacao']? 'primary' : ''} clickable onClick={()=>handleAddInteresse('inovacao')}/>
          <Chip label="networking" color={interes['networking']? 'primary' : ''} clickable onClick={()=>handleAddInteresse('networking')}/>
          <Chip label="atendimento" color={interes['atendimento']? 'primary' : ''} clickable onClick={()=>handleAddInteresse('atendimento')}/>
          <Chip label="tecnologia" color={interes['tecnologia']? 'primary' : ''} clickable onClick={()=>handleAddInteresse('tecnologia')}/>
          <Chip label="economia digital" color={interes['economia']? 'primary' : ''} clickable onClick={()=>handleAddInteresse('economia')}/>
          <Chip label="vendas" color={interes['vendas']? 'primary' : ''} clickable onClick={()=>handleAddInteresse('vendas')}/>
        
      </div>
      <FormGroup row>
        <FormControlLabel
          control={<Switch checked={split} onChange={handleSplit} name="checkedA" />}
          label="Compartilhar meus contatos profissionais"
        />
      </FormGroup>

      <Grid container style={{marginTop:'20px', marginBottom:'30px'}}>
        <Grid item xs={12} sm={12} md={6}> 
          <TextField id="standard-basic" label="Linkedin" style={{width:'90%'}}/>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField id="standard-basic" label="Email" style={{width:'90%'}}/>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <Button variant="contained" onClick={handleClose} >
            Cancelar
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} style={{textAlign:'right'}}> 
          <Button variant="contained" color="secondary" onClick={handleConfirm} >
            Confirmar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
  return (
    <div>
      <Header/>
      <Grid container className="custom-margin">
        <Grid item xs={12} sm={12} md={3}>          
          <Grid container className="custom-container">
            <Typography variant="h6" className="title">
              Cronograma
            </Typography>
            
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <Typography>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                        >
                          Anterior
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? 'Finzalizar' : 'Seguinte'}
                        </Button>
                      </div>
                    </div>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>All steps completed - you&apos;re finished</Typography>
                <Button onClick={handleReset} className={classes.button}>
                  Reset
                </Button>
              </Paper>
            )}
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={9} lg={9} className="event-border-left">
          <Grid container className="custom-container">
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="off"
              >
                <Tab icon={<VideocamIcon />} aria-label="phone" {...a11yProps(0)} label="Palco" 
                  className="event-custom-tab"/>
                <Tab icon={<MicIcon />} aria-label="favorite" {...a11yProps(1)} label="Paineís"
                  className="event-custom-tab"/>
                <Tab icon={<EmojiPeopleIcon />} aria-label="person" {...a11yProps(2)} label="Networking"
                  className="event-custom-tab"/>
                <Tab icon={<StorefrontIcon />} aria-label="help" {...a11yProps(3)} label="Expositores"
                  className="event-custom-tab"/>
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className="event-panel">
              <Typography className="event-title" variant="h6" gutterBottom>
                DIGITALKS expo2020
              </Typography>
              <iframe width="100%" height="400" 
                src="https://www.youtube.com/embed/xm4LX5fJKZ8?list=PLcCp4mjO-z98WAu4sd0eVha1g-NMfzHZk" 
                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>

              <Typography className="event-subtitle" variant="h6" gutterBottom>
                Descrição do evento
              </Typography>

              <p className="event-description">
                O DIGITALKS EXPO é o maior evento de Negócios da ECONOMIA DIGITAL e TECNOLOGIA e segue o benchmarking dos maiores eventos digitais da Europa, proporcionando uma experiência única e integrada ao mercado mundial. O evento promove um ambiente propício para negócios, novos projetos, conexões e compartilhamento de conhecimento.
              </p>
              <br />
              <p className="event-description">
                Em 2019 foram 2 dias de evento com mais de 20 atividades, 11 auditórios com muito conteúdo e presença dos principais formadores de opinião do mercado nacional e internacional. 
              </p>
              <br />
              <b>DIGITAL ECONOMY | we’re under construction */</b>

              <Typography className="event-subtitle" variant="h6" gutterBottom>
                Palestrantes
              </Typography>
              <Grid container className="custom-container">
                <Grid item xs={12} sm={12} md={3}>
                  <div style={{textAlign:'center'}}>
                    <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/75.jpg" className={classes.large} />
                  </div>
                  <div><p className="speaker-name">Nome do palestrante</p></div>
                </Grid>

                <Grid item xs={12} sm={12} md={3}>
                  <div style={{textAlign:'center'}}>
                    <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/75.jpg" className={classes.large} />
                  </div>
                  <div><p className="speaker-name">Nome do palestrante</p></div>
                </Grid> 

                <Grid item xs={12} sm={12} md={3}>
                  <div style={{textAlign:'center'}}>
                    <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/75.jpg" className={classes.large} />
                  </div>
                  <div><p className="speaker-name">Nome do palestrante</p></div>
                </Grid> 

                <Grid item xs={12} sm={12} md={3}>
                  <div style={{textAlign:'center'}}>
                    <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/75.jpg" className={classes.large} />
                  </div>
                  <div><p className="speaker-name">Nome do palestrante</p></div>
                </Grid> 
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1} className="event-panel networking-container">
              <img src={panelImg} alt="make links paineis" className="netoworking-img"/>
              <div className="networking-text-container">
                <p className="networking-text">
                  Os painéis ainda não começaram, mas à make<b>links</b> vai te avisar quando for a hora!
                </p>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2} className="event-panel networking-container">
              <div style={{ display: !confirmed ? "block" : "none" }}>
                <img src={networkingImg} alt="make links networking" className="netoworking-img"/>
                <div className="networking-text-container">
                  <p className="networking-text">*Neste evento, a dinâmica vai permitir que cada videochamada dure até 5 minutos!</p>
                </div>
                <Button size="small" variant="contained" style={{margin:'27px'}}
                  color="secondary" onClick={handleOpen}>Confirmar presença
                </Button>
                <div className="networking-text-container">
                  <p className="networking-text">
                    A makelinks vai te apresentar a algumas pessoas que tem interesses em comum com os seus, para que possam ter uma conversa por vídeo realmente construtiva. Vamos lá?
                  </p>
                </div>
              </div>

              <div style={{ display: confirmed ? "block" : "none" }}>
                <img src={networkingImg} alt="make links networking" className="netoworking-img"/>
                <div className="networking-text-container">
                  <p className="networking-text">PRESENÇA CONFIRMADA! Agora você já pode começar a dinâmica.</p>
                </div>
                <Button size="small" variant="contained" style={{margin:'27px'}}
                  color="secondary" >Começar
                </Button>
                <div className="networking-text-container">
                  <p className="networking-text">
                  A makelinks vai te apresentar a algumas pessoas que tem interesses em comum com os seus, para que possam ter uma conversa por vídeo realmente construtiva. Vamos lá?
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={3} className="event-panel networking-container">
              <img src={expositorsImg} alt="make links paineis" className="netoworking-img"/>
              <div className="networking-text-container">
                <p className="networking-text">
                  Este evento não tem expositores :(
                </p>
              </div>
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}