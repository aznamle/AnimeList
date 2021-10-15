import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';

import Container from './components/Container'
import AnimeDetails from './components/AnimeDetails';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';

const App = () => {
  return (
    <div className='bg-gray-100 h-screen'>
      <div>
        <Navbar />
      </div>
      <div className='mx-auto max-w-7xl'>
      <Switch>
        <Route exact path="/">
          <Homepage />
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
