// import {useState, useEffect} from 'react';
import Button from './Button';
import Header from './Header';
import Input from './Input';
import './App.css';
import Create from './Create';
import  Blogs from './Blogs';
import { BrowserRouter, Switch,  Route, Link } from 'react-router-dom';
import BlogInfo from './BlogInfo';
import BlogList from './BlogList';
import NotFound from './NotFound';
import { useHistory } from 'react-router-dom';


function App() {
  /*You can add consts here and later use them in your JSX*/
const Fistup = (e) => {
console.log(e.target)
}

const history = useHistory()


 return (
       <BrowserRouter>
     <div className="App">
      <h1>Hello React Developers!</h1>
    <Header title='FIST-BUMP' />
    <h3>HAVE A BETTER RELATIONSHIP WITH PEOPLE!</h3>
    <Input type="email" placeholder='E-MAIL' />

     <br />
    <br />

    <input type="password" placeholder='PASSWORD' />
    <br />
    <br />
    <Button onClick={Fistup} className='btn' text='Fist-In' />
    <Link to="/create">Click here!</Link>
    
  <hr />
    <h3>
      DON'T HAVE AN ACCOUNT YET?
      </h3>
      <Blogs />
    <h4>
      FIST UP AN ACCOUNT WITH US TODAY!
      </h4> 
      </div>
      <Switch>
      <Route path="/create" component={Create} exact/>
      <Route path="/blogs/:id" component={BlogInfo} />
      <Route path="/blogs" component={Blogs} />
      <Route path="*" component={NotFound} />
      </Switch>
   </BrowserRouter>
)
} 

export default App;
