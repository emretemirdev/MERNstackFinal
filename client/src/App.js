import './App.css';
import Header from './Components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from "./Screens/HomeScreen";
import BlogScreen from "./Screens/BlogScreen";
import SigninScreen from "./Screens/SigninScreen";
import Error from "./Screens/404";
import SignupScreen from "./Screens/SignupScreen";
import {useState,} from 'react'




function App() {
  const [user, setUser] = useState(null);
  return (
    <Router> 
      
      <Header user={user} setUser={setUser} />
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
               <Route path='/blog' 
             element={<BlogScreen/>} exact>
               </Route>
               <Route path='/404' 
             element={<Error/>} exact>
               </Route>
          </Routes>
      </Container>
      </Router>
  );
}
export default App;
