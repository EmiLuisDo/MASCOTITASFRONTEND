import React from 'react'

export default function FE_Header(prop) {

    if (prop.idHeader == 'StartHeader'){
        return (
            <div>
                <div className="">
                    <h1 style={{
                        textAlign: 'center', 
                        textDecoration: 'underline',
                        fontFamily: 'Segoe UI'
                    }}>!Bienvenido a Mascotitas!</h1>
                    <p style={{
                        fontFamily: 'Segoe UI',
                        textAlign: 'left',
                        marginTop: '1em'
                }}>Somos una organización sin fines de lucro que busca que animales sin hogar encuentren una familia que les brinde amor incondicional. ¡Ayudanos a cumplir nuestra misión!</p>
                </div>
            </div>
        )
    }

    
}
