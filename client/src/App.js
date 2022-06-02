import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from "./Screens/HomeScreen";
import SigninScreen from "./Screens/SigninScreen";
import SignupScreen from "./Screens/SignupScreen";
import Blog from "./Components/Blog";
import Admin from "./Components/Admin";
import {useState} from 'react'

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router> 
      <Header user={user} setUser={setUser} />
      <main className='py-3'>
      <Container>
          <Routes>
             <Route path='/' 
             element={<HomeScreen user={user}/>} exact>
             </Route>
             <Route path='/signin'
              element={<SigninScreen setUser={setUser} />} exact>
              </Route>
             <Route path='/signup' 
             element={<SignupScreen/>} exact>
               </Route>
             <Route path='/admin' 
             element={<Admin user={user}/>} exact>
               </Route>
               <Route path='/blog' 
             element={<Blog user={user}/>} exact>
               </Route>
               <Route path='/admin' 
             element={<Admin user={user}/>} exact>
               </Route>
          </Routes>
      </Container>
      </main>
      </Router>
  );
}

export default App;
