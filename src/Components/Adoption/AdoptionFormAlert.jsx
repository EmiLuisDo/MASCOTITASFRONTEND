import {useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function AdoptionFormAlert(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    props.flagStateParam(false);
  };

  let severityType;
  let resultMessage;
  if(props.state){
    severityType='success';
    resultMessage='¡Mascota adoptada!';
  } else {
    severityType='error';
    resultMessage='Por favor complete los campos obligatorios (*)';
  }

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severityType}>
          {resultMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
