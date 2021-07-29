import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as API from '../../ApiLinks';
import AdoptionForm from '../Adoption/AdoptionForm';

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
        width: '25em',
        marginBottom: '3em'
    },
});

export default function StartBody() {
    const classes = useStyles();
    const [animalsCardsList, setAnimalsCardsList] = useState([]);
    const [currentPet, setCurrentPet] = useState();
    const [adoptionForm, setAdoptionForm] = useState();
    
    const renderAdoptionForm = idPet => {
        setCurrentPet(idPet);
        setAdoptionForm(true);
    }
    
    useEffect(() => {
        axios({
            method: 'GET',
            url: API.GET_MASCOTA_BY_AVAILABILITY
        })
        .then(acceptedAnswer => renderAnimalCards(acceptedAnswer.data))
        .catch(rejectedAnswer => console.log('Error al obtener los datos - ', rejectedAnswer));
    }, []);
    
    const renderAnimalCards = (apiRequestAnswer) => {
        setAnimalsCardsList(
            <Grid container>{
                apiRequestAnswer.map((current, id) => {
                    return (
                        <Grid 
                            item 
                            md={4}
                            sm={6}
                            key={id}
                        >
                            <Card className={classes.root}>
                                <CardMedia
                                    component="img"
                                    alt={current.nombre}
                                    height="300em"
                                    image={current.mascotaFotos[0].imagen}
                                    title={current.nombre}
                                    />
                                <CardContent>
                                    <Typography 
                                        gutterBottom 
                                        variant="h5" 
                                        component="h2"
                                        >{current.nombre}
                                    </Typography>
                                    <Typography 
                                        variant="body2" 
                                        color="textSecondary" 
                                        component="p"
                                        >{current.descripcion}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                        size="small" 
                                        color="primary" 
                                        className="justify-content-center" 
                                        onClick = {() => renderAdoptionForm(current.id)}
                                        >Adoptar
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })
            }
            </Grid>
            )
        }

    return (
        <div>
            <p style={{
                    fontFamily: 'Segoe UI',
                    textAlign: 'left',
                    marginTop: '2em',
                    marginBottom: '2em'
            }}>A continuación te mostramos los animales que esperan ser parte de tu familia:</p>
            {animalsCardsList}
            {adoptionForm && <AdoptionForm 
                                    idPet = {currentPet}
                                    adoptionForm = {setAdoptionForm}
                                />
            }                
        </div>
    )
}
