import React from 'react'
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    <>
      <main className='pageNotFound'>
        <h1>Pagina no encontrada 😔</h1>
        <Link to='/'>
          <button className='notFound-button'>Volver al inicio</button>
        </Link>
      </main>
    </>
  );
}

export default NotFound;