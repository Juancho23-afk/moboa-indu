import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:15}}>
            <img src="https://img.freepik.com/vector-premium/lindo-gato-fondo-error-404_28892-158.jpg" alt="Error" style={{width:'30%', marginBottom:15}} />
            <Link className='btn btn-dark' to='/'>Volver a home</Link>
        </div>
    )
}

export default NotFound