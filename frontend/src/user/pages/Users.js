import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Harrison Boland',
      image:
        'https://www.shanethegamer.com/wp-content/uploads/2019/12/Halo-Reach.jpg',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
