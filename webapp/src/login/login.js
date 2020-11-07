import React from 'react';
import { Container, Card, CardActions, CardContent, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useStyles from '../classes';

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  function enterClicked() {
    history.push('/logbook');
  }

  return (
    <Container>
      <Card>
        <CardContent></CardContent>
        <CardActions className={classes.rightAlign}>
          <Button variant="contained" color="primary" size="small" onClick={enterClicked}>
            Enter
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Login;
