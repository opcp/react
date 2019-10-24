import React from 'react'
import Data from '../index'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from 'react-router-dom'
import PathNow from '../../components/PathNow'

function Home() {
  return (
    <>
      <PathNow />
      <h1>Home</h1>
      <div className="list-group">
        {Data.map((item, value) => {
          return (
            <Link
              key={item + value}
              to={'/student/' + item.id}
              className="list-group-item list-group-item-action"
            >
              {item.name}
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Home
