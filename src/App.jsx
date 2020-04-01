import React from 'react';
import Store from './core/context/store/index'

import List from './components/List';
import Button from './components/Button';

const App = () => (
  <Store>
    <List />
    <Button />
  </Store>
);

export default App;
