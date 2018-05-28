import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Fotos from './Fotos'
import Tasks from './Tasks'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/fotos' component={Fotos}/>
      <Route path='/tareas' component={Tasks}/>
    </Switch>
  </main>
)

export default Main
