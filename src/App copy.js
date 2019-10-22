import React, { useState, useMemo } from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from 'react-router-dom'
import Home from './useContext/Home'
import News from './useContext/News'
import Contact from './useContext/Contact'
import Navbar from './components/Navbar'
import { UserContext } from './UserContext'

const App = () => {
  const [user, setUser] = useState(null)

  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  const userStatus = '登入成功'
  return (
    <Router>
      <>
        <Navbar />
        <UserContext.Provider value={value}>
          <Route exact path="/" component={Home} />
          <Route path="/News" component={News} />
          <Route path="/Contact" component={Contact} />
        </UserContext.Provider>
      </>
    </Router>
  )
}

export default App
