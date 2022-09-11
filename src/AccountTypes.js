import { BrowserRouter, Switch,  Route, Link } from 'react-router-dom';
import PersonalAccount from './PersonalAccount';

const AccountTypes = () => {
  return (
    <BrowserRouter>
    <div id="select-account">
    <h2>Select account type</h2>
    <div id="account-links">
    <Link to="/official account">Official Account</Link> <br />
    <br />
    <Link to="/personal account">Personal Account</Link> <br />
    <br />
    <Link to="/business account">Business Account</Link> <br />
    <br />
    <Link to="/pet account">Pet Account</Link> <br />
    <br />
    </div>
    </div>
    <Switch>
        <Route path="/personal account" component={PersonalAccount} />
    </Switch>
    </BrowserRouter>
  )
}

export default AccountTypes