import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import { dashboardRoutes } from './routes'
import Frame from './components/Frame'

function App() {
  return (
    <Frame>
      <Switch>
        {
          dashboardRoutes.map( route => {
            return <Route key={route.path} 
              {...route} 
              exact={route.exact} 
              render={routeProps => {
                return <routeProps.component {...routeProps} />
              }}>
            </Route>
          })
        }
        <Redirect to= "/404" />
      </Switch>
    </Frame>
  );
}

export default App;
