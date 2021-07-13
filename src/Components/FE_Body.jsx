import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    root: {
      width: '70%',
      marginBottom: '3em'
    },
});

export default function FE_Body(prop) {
    const classes = useStyles();
    const [animalsCardsList, setAnimalsCardsList] = useState([]);
    
    const renderAnimalCards = (apiRequestAnswer) => {
        console.log(apiRequestAnswer);
        setAnimalsCardsList(
            apiRequestAnswer.map((current, id) => {
                return (
                    <Grid
                        key={current.id}
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Card className={classes.root}>
                            <CardMedia
                                component="img"
                                alt={current.nombre}
                                height="300em"
                                image={current.fotos[2].imagen}
                                title={current.nombre}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {current.nombre}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {current.descripcion}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Ver más
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })
        )
    }
    const apiCall = () => {
        axios({
            method: 'get',
            url: 'https://localhost:5001/api/mascotas'
        })
        .then(acceptedAnswer => renderAnimalCards(acceptedAnswer.data))
        .catch(rejectedAnswer => console.log('Error al obtener los datos - ', rejectedAnswer));
    }
    useEffect(() => apiCall(), []);

    if (prop.idBody === 'StartBody'){
        return (
            <div>
                <p style={{
                        fontFamily: 'Segoe UI',
                        textAlign: 'left',
                        fontSize: 'large',
                        marginTop: '3em'
                }}>A continuación te mostramos los animales que esperan ser parte de tu familia:</p>
                {animalsCardsList}                
            </div>
        )
    }
}
