import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Context } from '../../context/appContext';

const UsersList = () => {

  const { cards } = useContext(Context);

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
                <img className='card-image' src="" alt="Avatar" />
                <h2 className='card-p'>{user.name}</h2>
                <button className='card-button'>Delete</button>
              </li>
            ))
          }
        </ul>
      </section>
    </>
  );
}

export default UsersList;