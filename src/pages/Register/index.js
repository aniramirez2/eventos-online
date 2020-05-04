import React, {useState, useEffect} from 'react';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [occupation_area, setArea] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');
  const [occupation, setOcuppation] = useState([]);
  const [linkedin_url, setLinkedin] = useState('');
  
  useEffect(() => {
    api.get('occupation_areas').then(response => {
      console.log('occupations', response.data)
      setOcuppation(response.data);
    })
  }, []);

  async function handleregister(e) {
    e.preventDefault();
    // history.push('/home');
    const data = {
      name,
      email,
      occupation_area: Number(occupation_area),
      description,
      password,
      linkedin_url
    }
    try {
      const response = await api.post('auth/register', data);
      localStorage.setItem('makelinks-user-name', name )
      localStorage.setItem('makelinks-token', response.data.token);
       history.push('/home')
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  return (
    <Grid container component="main" className="custom-register-container">
      <Grid item xs={12} sm={8} container >
      <Grid
          item
          xsdown="true" sm={3}>
        </Grid>
        <Grid 
          item
          xs={12} sm={6} className="margin-container" style={{marginTop:'10px'}}>
          <form onSubmit={handleregister} className="form-left">
            <div className="title3"> Olá</div>
              <div className="input-custom-space">
                <TextField className="input-width" id="outlined-basic" label="Qual é seu nome?" 
                variant="outlined"
                value={name}
                onChange={e => setName(e.target.value)} />
                <TextField className="input-width" type="email" 
                 label="Qual é seu email?" variant="outlined" 
                value={email}
                onChange={e => setEmail(e.target.value)}/>
                <TextField className="input-width" type="text" 
                 label="Url do LinkedIn" variant="outlined" 
                value={linkedin_url}
                onChange={e => setLinkedin(e.target.value)}/>
                <FormControl variant="outlined" className="input-width">
                <InputLabel htmlFor="outlined-age-native-simple">Qual sua área de atuação?</InputLabel>
                <Select
                  native
                  value={occupation_area}
                  onChange={e => setArea(e.target.value)}
                >
                  <option aria-label="None" value="" />
                  
                  { occupation.map((item, index) => {
                    return <option key={index} value={+item.id}>{item.name}</option>
                  }) }
                </Select>
              </FormControl>
              <TextField  multiline className="input-width"
                rows={2} label="Fale um pouquinho sobre você" variant="outlined"
                value={description}
                onChange={e => setDescription(e.target.value)} />
              <TextField className="input-width"  type="password" 
                label="Digite uma senha" variant="outlined"
                value={password}
                onChange={e => setPassword(e.target.value)} />

              </div> 
            <div className="actions">
              <Button color="secondary" variant="contained"
               type="submit">Entrar</Button>
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