import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';

import Container from './components/Container'
import AnimeDetails from './components/AnimeDetails';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='bg-gray-100'>
      <div>
        <Navbar />
      </div>
      <div>
      <Switch>
        <Route exact path="/">
          <Container />
        </Route>
        <Route exact path="/anime/:mal_id">
          <AnimeDetails />
        </Route>
      </Switch>
      </div>
    </div>
  )
}

export default App
