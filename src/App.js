import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Contact from './pages/Contact'
import Navbar from './compnents/Navbar'

const App = () => {
  const userStatus = '登入成功'
  return (
    <Router>
      <>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/News"
            component={() => <News userStatus={userStatus} />}
          />
          <Route
            path="/Contact"
            render={props => <Contact {...props} userStatus={userStatus} />}
          />
        </Switch>
      </>
    </Router>
  )
}

export default App
