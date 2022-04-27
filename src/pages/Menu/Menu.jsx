import React from 'react';
import ToggleSwitch from '../../components/ToggleSwitch';
import CreateUsers from '../../containers/CreateUsers';
import UsersList from '../../containers/UsersList';
import './Menu.css'

const Menu = () => {
  return (
    <>
      <main className='main-container'>
        <ToggleSwitch />
        <CreateUsers />
        <UsersList />
      </main>
    </>
  );
}

export default Menu;