import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';
import Button from '@material-ui/core/Button';

export default function Logon() {

  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogon(e) {
    e.preventDefault();
    try {
      const response = await api.post('sessions', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');
    } catch (err) {
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the Hero" />

        <form action="" onSubmit={handleLogon}>
          <h1>Faça seu login</h1>
          <input type="text" placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Entrar
          </Button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
};