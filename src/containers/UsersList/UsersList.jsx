import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Context } from '../../context/appContext';
import { Link } from 'react-router-dom';
import defaultAvatar from '../../Assets/images/avatarDefault.png'
import './UsersList.css'

const UsersList = () => {

  const { cards, deleteUser, api, setUserInfo } = useContext(Context);

  return (
    <>
      <section className='container-cards'>
        {/* Utilizando una lista de usuarios hardcodeada */}
        {/* <ul>
          {
            cards.map(user => (
              <li className='card'
                style={{ backgroundColor: user.backgroundColor }}
                key={uuidv4()}
              >
                <Link to={`/details/${user.id}` onClick={() => setUserInfo(user)}}>
                  <img className='card-image' src={defaultAvatar} alt="Avatar" />
                  <p className='card-p'>{user.name}</p>
                </Link>

                <button className='card-button' onClick={() => deleteUser(user.id)}>Delete</button>
              </li>
            ))
          }
        </ul> */}
        {/*------------------------------------------------------------------------------------------------------------------> */}
        {/* Utilizando una lista de usuarios traidas desde una API */}
        <ul>
          {
            api !== undefined
              ? api.map(user => (
                <li className='card'
                  style={{ backgroundColor: user.backgroundColor ? user.backgroundColor : 'var(--backgroundColor-spaceGuru)' }}
                  key={uuidv4()}
                >
                  <Link className='link-container' to={`/details/${user.id}`} onClick={() => setUserInfo(user)}>
                    <img className='card-image' src={user.image} alt="Avatar" />
                    <p className='card-p'>{user.name}</p>
                  </Link>
                  <button className='card-button' onClick={() => deleteUser(user.id)}>Delete</button>
                </li>
              ))
              :
              <p>Loading...</p>
          }
        </ul>
      </section>
    </>
  );
}

export default UsersList;


