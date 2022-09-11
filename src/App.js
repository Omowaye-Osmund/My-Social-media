import Header from './sign up/Header';
import Input from './sign up/Input';
import './App.css';
import Create from './Create';
import Blogs from './blogs/Blogs'
import { BrowserRouter, Switch,  Route } from 'react-router-dom';
import BlogInfo from './blogs/BlogInfo';
import NotFound from './NotFound';
import Motto from './sign up/Motto';
import AccountTypes from './AccountTypes';
import AccountRecovery from './AccountRecovery'
import FistUp from './sign up/FistUp';



function App() {
  /*You can add consts here and later use them in your JSX*/
// const history = useHistory()```````


 return (
       <BrowserRouter>
     <div className="App">
      <Header />
         <Motto />
         <Input />
    
           <hr />
           <FistUp />
     </div>
     

      <Switch>
      <Route path="/create" component={Create} exact/>
      <Route path="/blogs/:id" component={BlogInfo} exact/>
      <Route path="/blogs" component={Blogs} exact/>
      <Route path="/account-types" component={AccountTypes} />
       <Route path="/account-recovery" component={AccountRecovery} />
      <Route path="*" component={NotFound} />
      </Switch>

     
   </BrowserRouter>
)
} 

export default App;
