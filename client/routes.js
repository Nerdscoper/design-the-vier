import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import FlexboxContainer from './components/flexbox/Flexbox.container'
import HutkoContainer from './components/hutko/hutko.container'
import Hutko from './components/hutko/hutko'
import Jedan from './components/hutko/jedan'
import Dva from './components/hutko/dva'
import Home from './components/Home'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="flexbox" component={FlexboxContainer} />
    <Route path="hutko" component={HutkoContainer} >
      <IndexRoute component={Hutko} />
    </Route>
    <Route path="hutko/jedan" component={Jedan}/>
    <Route path="hutko/dva" component={Dva}/>
  </Route>

)
