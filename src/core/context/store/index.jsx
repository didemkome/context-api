import React, { useReducer, createContext } from 'react';
import { node } from 'prop-types'

import userReducer from '../reducer';

const users = [
  {
    name: 'Didem',
    title: 'Frontend Developer'
  },
  {
    name: 'Aleyna',
    title: 'Mechanical Engineer'
  }
];

export const UserContext = createContext(users);

function Store({ children }) {
  const [user, dispatch] = useReducer(userReducer, users);
  const value = { user, dispatch };
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export default Store;

Store.defaultProps = {
  children: null
};

Store.propTypes = {
  children: node
};
