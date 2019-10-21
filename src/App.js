import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from 'react-router-dom'
import Home from './data/pages/Home'
import Student from './data/pages/Student'

const App = () => {
  return (
    <Router>
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/student">Student</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/student/:id?" component={Student} />
      </>
    </Router>
  )
}

export default App
