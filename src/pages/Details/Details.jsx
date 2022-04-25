import React, { useContext } from 'react';
import { Context } from '../../context/appContext';
import { Link } from 'react-router-dom';
import './Details.css'

const Details = () => {
  const { userInfo, deleteUser } = useContext(Context);

  return (
    <>
      <main className='container-cardView'>
        <Link to='/'>
          <button className='cardView-back'>⬅️ Back</button>
        </Link>
        <div className="cardView"
          style={{ backgroundColor: userInfo.backgroundColor ? userInfo.backgroundColor : 'var(--backgroundColor-spaceGuru)' }}>
          <span className='cardView-id'>ID: {userInfo.id}</span>
          <img className='cardView-image' src={userInfo.image} alt={userInfo.name} />
          <h1 className='cardView-title'>{userInfo.name}</h1>
          <Link to='/'>
            <button className='cardView-button' onClick={() => deleteUser(userInfo.id)} > Delete</button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Details