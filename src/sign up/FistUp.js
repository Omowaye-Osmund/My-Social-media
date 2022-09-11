import { BrowserRouter, Switch,  Route, Link } from 'react-router-dom';
import AccountTypes from '../AccountTypes';

const FistUp = () => {
    return ( 
        <BrowserRouter>
        <div>
            <h4>
      Fist up an account with us today!
      </h4>
            <Link to="/account types"><button id='btn'>Fist Up</button></Link>
            </div>
            <Switch>
                <Route path="/fist up" component={AccountTypes} exact/>
                <Route path="/account types" component={AccountTypes} />
            </Switch>
            </BrowserRouter>
     );
}
 
export default FistUp;