import React, { useDebugValue } from 'react';
import defaultAvatar from '../../Assets/images/avatarDefault.png'
import './Details.css'

const Details = () => {
  return (
    <>
      <main className='container-cardView'>
        <div className="cardView">
          <span className='cardView-id'>ID: 4</span>
          <img className='cardView-image' src={defaultAvatar} alt="" />
          <h1 className='cardView-title'>Rick</h1>
          <button className='cardView-button'>Delete</button>
        </div>
      </main>
    </>
  );
}

export default Details