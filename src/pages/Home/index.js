import React from 'react';
import './styles.css';
import Header from './../../components/Header';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Header/>
      <Grid container className="custom-margin">
        <Grid item xs={12} sm={12} md={3}>
          <Grid container className="custom-container">
            <Typography variant="h6" className="title">
              Seus últimos eventos
            </Typography>
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

        <Divider xsDown orientation="vertical" flexItem className="custom-divider"/>

        <Grid item xs={12} sm={12} md={8}>
          <Grid container className="custom-container">
            <Typography variant="h6" className="title">
              Eventos acontecendo agora
            </Typography>
            <Card className="root">
              <CardContent>
                <Typography className="title2" variant="h6" gutterBottom>
                  DIGITALKS expo2020
                  <Typography variant="body2" component="p">
                    01 a 05 de maio
                  </Typography>
                </Typography>
              </CardContent>
              <CardActions className="custom-button">
                <Link to="/event">
                  <Button size="small" variant="contained"
                    color="secondary">Entrar
                  </Button>
                </Link>
              </CardActions>
            </Card>

            <Typography variant="h6" className="title">
              Próximos eventos
            </Typography>

            <Card className="root-secondary" style={{marginBottom:'0'}}>
              <CardContent>
                <Typography className="title2" variant="h6" gutterBottom>
                  DIGITALKS expo2020
                  <Typography variant="body2" component="p">
                    01 a 05 de maio
                  </Typography>
                </Typography>
              </CardContent>
              <CardActions className="custom-button">
                <Link to="/event">
                  <Button size="small" variant="contained"
                    color="#7AB6F6">Ver
                  </Button>
                </Link>
              </CardActions>
            </Card>
            <Card className="root-secondary">
              <CardContent>
                <Typography className="title2" variant="h6" gutterBottom>
                  DIGITALKS expo2020
                  <Typography variant="body2" component="p">
                    01 a 05 de maio
                  </Typography>
                </Typography>
              </CardContent>
              <CardActions className="custom-button">
                <Link to="/event">
                  <Button size="small" variant="contained"
                    color="#7AB6F6">Ver
                  </Button>
                </Link>
              </CardActions>
            </Card>

            <Typography variant="h6" className="title">
            Eventos recomendados na área de inovação e tecnologia
            </Typography>

            <Card className="root-third" style={{marginBottom:'0'}}>
              <CardContent>
                <Typography className="title2" variant="h6" gutterBottom>
                  DIGITALKS expo2020
                  <Typography variant="body2" component="p">
                    01 a 05 de maio
                  </Typography>
                </Typography>
              </CardContent>
              <CardActions className="custom-button">
                <Link to="/event">
                  <Button size="small" variant="contained"
                    color="#7AB6F6">Saber mais
                  </Button>
                </Link>
              </CardActions>
            </Card>

            <Card className="root-third" >
              <CardContent>
                <Typography className="title2" variant="h6" gutterBottom>
                  DIGITALKS expo2020
                  <Typography variant="body2" component="p">
                    01 a 05 de maio
                  </Typography>
                </Typography>
              </CardContent>
              <CardActions className="custom-button">
                <Link to="/event">
                  <Button size="small" variant="contained"
                    color="#7AB6F6">Saber mais</Button>
                  </Link>
              </CardActions>
            </Card>

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}