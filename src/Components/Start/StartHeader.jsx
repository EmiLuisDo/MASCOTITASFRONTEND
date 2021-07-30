import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Row } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoCaption } from '@mui-treasury/components/info';
import { useTutorInfoStyles } from '@mui-treasury/styles/info/tutor';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  action: {
    backgroundColor: '#fff',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
  },
}));

export default function TutorCard() {
    
  return (
    <Row p={1.5} gap={2} bgcolor={'#f5f5f5'} borderRadius={16}>
      <Info position={'center'}useStyles={useTutorInfoStyles}>
        <InfoTitle style={{}} align={'center'} variant='h2'>
            <Typography variant={'h4'}>
                ¡Bienvenido a Mascotitas!
            </Typography>
        </InfoTitle>
        <InfoCaption>
            Somos una organización sin fines de lucro que busca que animales sin hogar 
            encuentren una familia que les brinde amor incondicional. 
            ¡Ayudanos a cumplir nuestra misión!
        </InfoCaption>
      </Info>
    </Row>
  );
};
