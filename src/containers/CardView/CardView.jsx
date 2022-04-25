import React, { useContext } from 'react'
import { Context } from '../../context/appContext';
import { Link } from 'react-router-dom';
import './CardView.css'

const CardView = () => {
  const { userInfo, deleteUser } = useContext(Context);

  return (
    <>
      <div className="cardView"
        style={{ backgroundColor: userInfo.backgroundColor ? userInfo.backgroundColor : 'var(--backgroundColor-spaceGuru)' }}>
        <span className='cardView-id'>ID: {userInfo.id}</span>
        <img className='cardView-image' src={userInfo.image} alt={userInfo.name} />
        <h1 className='cardView-title'>{userInfo.name}</h1>
        <Link to='/'>
          <button className='cardView-button' onClick={() => deleteUser(userInfo.id)} > Delete</button>
        </Link>
      </div>
    </>
  );
}

export default CardView;