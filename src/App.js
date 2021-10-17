import React from 'react'
import { Switch, Route } from 'react-router-dom';

import AnimeDetails from './components/AnimeDetails';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Layout from './components/Layout';

const App = () => {
  return (
    <div className=''>
      <div className='bg-gray-800'>
        <Navbar />
      </div>
      <div className=''>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/anime/:mal_id">
            <AnimeDetails />
          </Route>
          <Route exact path="/anime/search?q=:anime">
            {/* todo */}
          </Route>
        </Switch>
      </Layout>
      </div>
    </div>
  )
}

export default App
