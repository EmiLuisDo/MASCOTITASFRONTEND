import {React, useState} from 'react';
import axios from 'axios';
import * as API from '../../ApiLinks';
import AdoptionFormAlert from './AdoptionFormAlert';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AdoptionForm(props) {
  const [open, setOpen] = useState(true);
  const [flagState, setFlagState] = useState();
  const [formFlagState, setFormFlagState] = useState();

  /* const handleClickOpen = () => setOpen(true); */
  const handleClose = () => {
    setOpen(false);
    props.adoptionForm(false);
  }
  const handleFormAlert = (status) => {
    console.log('Valor del estado: ', status);
    setFlagState(true);
    setFormFlagState(status);
  }
  const refreshPage = () => {
    window.location.reload(true);
  }
  const handlePetsUpdate = (personData) => {
    axios({
      method: 'PUT',
      url: API.UPDATE_MASCOTA_ADOPTION(props.idPet, personData.id),
    })
    .then(() => {
      console.log('Se ha modificado la mascota con éxito.');
      refreshPage();
    })
    .catch(response => console.log('Ha ocurrido un error al intentar modificar la mascota - ', response.data))
  }
  const handleRegisterPerson = () => {
    if(
      persona.nombre === ''
      || persona.apellido === ''
      || persona.DNI === ''
      || persona.direccion === ''
      || persona.telefono === ''
      || persona.fechaNacimiento === ''
      ) {
        handleFormAlert(false);
      } else {
        axios({
          method: 'POST',
          url: API.ADD_PERSONA,
          data: persona
        })
        .then(response => {
          console.log('Se ha registrado la adopción con éxito.');
          handlePetsUpdate(response.data);
        })
        .catch(response => console.log('Ha ocurrido un error al intentar adoptar a la mascota - ', response.response))
        handleFormAlert(true);
        handleClose();
    }
  }
  const handleSendButton = () => {
    handleRegisterPerson();
  }
  const persona = {
      nombre: '',
      apellido: '',
      DNI: '',
      correoElectronico: '',
      direccion: '',
      telefono: '',
      fechaNacimiento: ''
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Formulario de adopción</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para poder adoptar a este animal, por favor complete el siguiente formulario con sus datos.
          </DialogContentText>
          <TextField
            margin="dense"
            id="nombre"
            label="Nombre"
            type="text"
            onChange = {e => {
              persona.nombre = e.target.value
              console.log(persona)
            }}
            required
            fullWidth
          />
          <TextField
            margin="dense"
            id="apellido"
            label="Apellido"
            type="text"
            onChange = {e => persona.apellido = e.target.value}
            required
            fullWidth
          />
          <TextField
            margin="dense"
            id="dni"
            label="DNI"
            type="text"
            onChange = {e => persona.DNI = e.target.value}
            required
            fullWidth
          />
          <TextField
            margin="dense"
            id="correoElectronico"
            label="Correo electrónico"
            type="email"
            onChange = {e => persona.correoElectronico = e.target.value}
            fullWidth
          />
          <TextField
            margin="dense"
            id="direccion"
            label="Dirección"
            type="text"
            onChange = {e => persona.direccion = e.target.value}
            required
            fullWidth
          />
          <TextField
            margin="dense"
            id="telefono"
            label="Teléfono"
            type="text"
            onChange = {e => persona.telefono = e.target.value}
            required
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="fechaNacimiento"
            title="Fecha de nacimiento"
            type="date"
            onChange = {e => persona.fechaNacimiento = e.target.value}
            required
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSendButton} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
      {flagState && <AdoptionFormAlert 
                              state={formFlagState}
                              flagStateParam={setFlagState}
                            />}
    </div>
  );
}
