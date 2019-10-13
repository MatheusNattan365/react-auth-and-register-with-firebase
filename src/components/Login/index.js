import React, { useState } from 'react';
import { Link } from 'react-router-dom'


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Importar o módulo do firebase {core}
import firebase from 'firebase'

// Estiliza o componente sem precisar da .css file
const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '90vh',
    margin: '0',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  linkText: {
    textDecoration: 'none'
  },
  card: {
    minWidth: 275,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

  },
  cardConntent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 14,
  },

}));


export default function Login() {
  const classes = useStyles();
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  const handleChange = name => event => {
    setLogin({ ...login, [name]: event.target.value });
  };

  //Login with firebase
  const loginWith = () => {
    const {password, email} = login
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (result) {
            console.log(result);

            // colocar uma variável para mostrar que o usuário está logado!
            // colocar no localStorage ou sessionStorage e 
            // chamar o useEffect para verificar se o usuário está Auth!
            //               {        VARIAVEL         }
            
            alert('Autenticado ' + email);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao autenticar, verifique o erro no console.')
        });

  }


  return (
    <>
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardContent className={classes.cardConntent}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Login with firebase
        </Typography>
            <TextField
              id="outlined-email-input"
              label="Email"
              className={classes.textField}
              onChange={handleChange('email')}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="outlined-password-input"
              label="Password"
              className={classes.textField}
              onChange={handleChange('password')}
              type="password"
              autoComplete="current-password"
              margin="normal"
              variant="outlined"
            />
          </CardContent>
          <CardActions>
            <Button size="small" onClick={loginWith}>Login</Button>
          </CardActions>
        </Card>
        <p>If you don't have an account, please <Link className={classes.linkText} to="/register">Register</Link> for free</p>
      </div>


    </>
  );
}

