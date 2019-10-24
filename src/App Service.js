import React from 'react'
// import Service from './test/Service'
import styled from '@emotion/styled';
import Imgs from './images/123.jpg'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from 'react-router-dom'
import Home from './data/pages/Home'
import Student from './data/pages/Student'

const Box = styled.div`
  display:flex;
`;



const Container = styled.div`
  display:flex;
  border:2px solid #ace;
  width: 100px;
  height: 100px;
`;

// const App = () => {
//   return (
//     <Router>
//       <>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/student">Student</Link>
//           </li>
//         </ul>
//         <Route exact path="/" component={Home} />
//         <Route path="/student/:id?" component={Student} />
//       </>
//     </Router>
//   )
// }

const App = () => {
  let link = '123'
  return (
    <Router>
      <> 
      <Link to="/{link}">
      <img sec={Imgs}/>
      <Box>
      <Container/>
      <Container/>
      <Container/>
      <Container/>
      <Container/>
      </Box>
      </Link> 
      </>
      </Router>
  )
}
export default App
