import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';

import Container from './components/Container'
import AnimeDetails from './components/AnimeDetails';

const App = () => {
  return (
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
  )
}

export default App
