import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';

import Container from './components/Container'
import AnimeDetails from './components/AnimeDetails';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Layout from './components/Layout';

const App = () => {
  return (
    <div className='bg-gray-100 h-screen'>
      <div>
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
        </Switch>
      </Layout>
      </div>
    </div>
  )
}

export default App
