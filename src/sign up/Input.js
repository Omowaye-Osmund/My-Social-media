import '../App'
import AccountRecovery from '../AccountRecovery';
import { BrowserRouter, Switch,  Route, Link } from 'react-router-dom';

const Input = () => {
  return (
 <BrowserRouter>
    <div className="App">
  <input type="email" placeholder='Email address' />

     <br />
    <br />

    <input type="password" placeholder='Password' />
    <br />
    <br />
    <Link to="/account recovery">Forgot Password?</Link>
    <button className='btn'>Fist-In</button>
      </div>
      <Switch>
        <Route path="/account recovery" component={AccountRecovery} exact/>
      </Switch>
      </BrowserRouter>
  )
}

export default Input