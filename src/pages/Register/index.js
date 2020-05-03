import React, {useState, useRef} from 'react';
import './styles.css';
import register from '../../assets/register.jpeg';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import 'pure-react-carousel/dist/react-carousel.es.css';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

export default function Register() {
  const history = useHistory();
  const items = [
    {
      name: "Qual é seu nome?",
      type: "input",
    },
    {
      name: "Qual é o seu e-mail?",
      type: "input",
    },
    {
      name: "Qual é a sua área de atuação?",
      type: "select",
      options: [
        "Agronegócios",
        "Comércio e Serviços",
        "Artesanato",
        "Educação - Cursos e Palestras",
        "Economia Criativa",
        "Inovação e Tecnologia",
        "Acesso a Mercados",
        "Indústria",
        "Turismo"
      ]
    },
    {
      name: "Fale um pouquinho sobre você",
      type: "area",
    },
    {
      name: "Defina uma nova senha",
      type: "input",
    },
  ]
  async function handleregister(e) {
    e.preventDefault();

  }
  function handleNext(e) {
    e.preventDefault();
      history.push('/home')
    
  }
  function Item(props)
  {
    if (props.type === "input" || props.type === "area") {
      if(props.type === "area") {
        return (<TextField  multiline className="input-width"
        rowsMax={4} label={props.name} variant="outlined" />)
      } else {
        return (
          <TextField className="input-width" id="outlined-basic" label={props.name}  variant="outlined" />
        )
      }
    } else {
      return (
        <div>
          <FormControl variant="outlined" className="input-width">
            <InputLabel htmlFor="outlined-age-native-simple">{props.name}</InputLabel>
            <Select
              native
              value=""
            >
              <option aria-label="None" value="" />
              
              {props.options.map(item => {
                return <option value={item}>{item}</option>
              })}
            </Select>
          </FormControl>
        </div>
      )
    }
  }
  return (
    <Grid container component="main" className="custom-register-container">
      <Grid item xs={12} sm={8} container >
      <Grid 
          direction="row"
          justify="center"
          alignItems="center"
          xsdown sm={3}>

        </Grid>
        <Grid 
          direction="row"
          justify="center"
          alignItems="center"
          xs={12} sm={6} className="margin-container">
          <form onSubmit={handleregister} className="form-left">
            <div className="title3"> Olá</div>
              {
                items.map( (item) => {
                  return (<div className="input-custom-space">{Item(item)}</div> )
                })
              }
            <div className="actions">
              <Button color="secondary" variant="contained"
               onClick={handleNext}>Finalizar</Button>
            </div>  
          </form>
        </Grid>
      </Grid>
      <Hidden xsDown>
        <Grid item xs={4} >
          <img src={register} alt="eventos online" className="image-right" />
        </Grid>
      </Hidden>
    </Grid>
  );
};