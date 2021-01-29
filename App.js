import React from 'react';
import Navigation from './components/Navigation/Navigation';
import SaladMaker from './components/SaladMaker/SaladMaker';
import UserContext from './components/UserContext/UserContext';

const user = {
  name: 'Lachin',
  favorites: ['avocado', 'carrot' ]
}

function App() {
  return (
    <UserContext.Provider value={user}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>
  );
}

export default App;