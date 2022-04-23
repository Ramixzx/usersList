import React from 'react';
import CreateUsers from '../../containers/CreateUsers';
import UsersList from '../../containers/UsersList';
import './Menu.css'

const Menu = () => {
  return (
    <>
      <main className='main-container'>
        <CreateUsers />
        <UsersList />
      </main>
    </>
  );
}

export default Menu;