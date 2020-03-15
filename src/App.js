import React, { Component } from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import { dashboardRoutes } from './routes'
import Frame from './components/Frame'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Frame>
        <Switch>
          {
            dashboardRoutes.map(route => {
              return <Route key={route.path}
                {...route}
                exact={route.exact}
                render={routeProps => {
                  return <routeProps.component {...routeProps} />
                }}>
              </Route>
            })
          }
          <Redirect to="/404" />
        </Switch>
      </Frame>
    );
  }
}
export default App;
