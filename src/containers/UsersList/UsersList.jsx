import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Context } from '../../context/appContext';
import defaultAvatar from '../../Assets/images/avatarDefault.png'
import './UsersList.css'

const UsersList = () => {

  const { cards, deleteUser } = useContext(Context);

  return (
    <>
      <section className='container-cards'>
        <ul>
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
        </ul>
      </section>
    </>
  );
}

export default UsersList;