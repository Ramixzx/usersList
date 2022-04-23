import React from 'react';
import CreateUsers from '../../containers/CreateUsers';
import UsersList from '../../containers/UsersList';

const Menu = () => {
  return (
    <>
      <CreateUsers />
      <UsersList />
    </>
  );
}

export default Menu;