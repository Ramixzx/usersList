import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Context } from '../../context/appContext';
import defaultAvatar from '../../Assets/images/avatarDefault.png'
import './UsersList.css'

const UsersList = () => {

  const { cards, deleteUser, api } = useContext(Context);

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
                <img className='card-image' src={defaultAvatar} alt="Avatar" />
                <h2 className='card-p'>{user.name}</h2>
                <button className='card-button' onClick={() => deleteUser(user.id)}>Delete</button>
              </li>
            ))
          }
        </ul> */}
        {/* --------------------------------------------------------------------------------------------------------------------------------------> */}
        {/* Utilizando una lista de usuarios traidas desde una API */}
        <ul>
          {
            api !== undefined
              ? api.map(character => (
                <li className='card'
                  style={{ backgroundColor: character.backgroundColor ? character.backgroundColor : 'var(--backgroundColor-spaceGuru)' }}
                  key={uuidv4()}
                >
                  <img className='card-image' src={character.image} alt="Avatar" />
                  <h2 className='card-p'>{character.name}</h2>
                  <button className='card-button' onClick={() => deleteUser(character.id)}>Delete</button>
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


