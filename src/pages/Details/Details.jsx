import React from 'react';
import { Link } from 'react-router-dom';
import CardView from '../../containers/CardView';
import './Details.css'

const Details = () => {
  return (
    <>
      <main className='container-cardView'>
        <Link to='/'>
          <button className='cardView-back'>⬅️ Back</button>
        </Link>
        <CardView />
      </main>
    </>
  );
}

export default Details