import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    root: {
      maxWidth: 'auto',
    },
});

export default function FE_Body(prop) {

    const classes = useStyles();
    const [animalsCardsList, setAnimalsCardsList] = useState([]);

    const ApiCall = apiUrl => {
        axios(apiUrl)
        .then(response => setAnimalsCardsList(response))
    }

    useEffect(() => {
        const apiUrl = "https://localhost:5001/api/mascotas";
        ApiCall(apiUrl);
        console.log(animalsCardsList)
    }, [])

    if (prop.idBody == 'StartBody'){

        return (
            <div>
                <p style={{
                        fontFamily: 'Segoe UI',
                        textAlign: 'left',
                        fontSize: 'large',
                        marginTop: '3em'
                }}>A continuación te mostramos los animales que esperan ser parte de tu familia:</p>

                {animalsCardsList}
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="300"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Ver más
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </div>
        )
    }

}
