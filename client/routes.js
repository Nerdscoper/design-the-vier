import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import FlexboxContainer from './components/flexbox/Flexbox.container'
import HutkoContainer from './components/hutko/hutko.container'
import Hutko from './components/hutko/hutko'
import Jedan from './components/hutko/jedan'
import Dva from './components/hutko/dva'

export default (
  <Route path="/" component={App}>
    <Route path="flexbox" component={FlexboxContainer} />
    <Route path="hutko" component={HutkoContainer} >
      <IndexRoute component={Hutko} />
      <Route path="jedan" component={Jedan}/>
      <Route path="dva" component={Dva}/>
    </Route>
  </Route>

)
