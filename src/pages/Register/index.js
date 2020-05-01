import React, {useState, useRef} from 'react';
import './styles.css';
import register from '../../assets/register.jpeg';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const history = useHistory();
  const actions = useRef(null);
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
      name: "Como você quer participar dos eventos?",
      type: "select",
      options: [
        "Participante",
        "Pessoa organizadora",
        "Jornalista"
      ]
    },
    {
      name: "Defina uma nova senha",
      type: "input",
    },
    {
      name: "Confirme sua nova senha?",
      type: "input",
      end: "yes",
    }
  ]
  async function handleregister(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }
    try {
      const response = await api.post('ongs', data);
      history.push('/');
      alert(`Seu ID de acesso ${response.data.id}`)
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }

  }
  function handleNext(e) {
    e.preventDefault();
    if (actions.current.state.currentSlide === items.length - 2) {
      history.push('/incidents/new')
    }
  }
  function Item(props)
  {
    if (props.type === "input") {
      return (
        <TextField className="input-width" id="outlined-basic" label={props.name}  variant="outlined" />
      )
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
    <Grid container component="main">
      <Grid item xs={8} >
        <Grid 
          direction="row"
          justify="center"
          alignItems="center">
          <form onSubmit={handleregister} className="form-left">
            
            <CarouselProvider className="center"
            naturalSlideWidth={90}
            naturalSlideHeight={10}
            totalSlides={items.length}
            dragEnabled={false}
            >
              <div className="title"> Olá</div>
              <Slider>
              {
                items.map( (item, index) => {
                  return  (<Slide style={{border:'none'}} ref={ actions } index={index}>{Item(item)}</Slide>);
                })
              }
              </Slider>
              <div className="actions">
                <ButtonBack className="button-prev">Anterior</ButtonBack>
                <ButtonNext className="button-next" onClick={handleNext}>Pŕoximo</ButtonNext>
              </div>
            </CarouselProvider>       
          </form>
        </Grid>
      </Grid>
      <Grid item xs={4} >
        <img src={register} alt="eventos online" className="image-right" />
      </Grid>
    </Grid>
  );
};