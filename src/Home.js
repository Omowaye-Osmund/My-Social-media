import Header from './Header';
import Button from './Button';
import Input from './Input';
import './Components.css';


function Home() {
  /*You can add consts here and later use them in your JSX*/
const Fistup = (e) => {
console.log(e.target)
}


 return (
     <div className="App">
    <Header title='FIST-BUMP' />
    <h3>HAVE A BETTER RELATIONSHIP WITH PEOPLE!</h3>
    <Input type="email" placeholder='E-MAIL' />

     <br />
    <br />

    <input type="password" placeholder='PASSWORD' />
    <br />
    <br />
    <Button onClick={Fistup} className='btn' text='Fist-In' />
    <hr />
    <h3>
      DON'T HAVE AN ACCOUNT YET?
      </h3>
    <h4>
      FIST UP AN ACCOUNT WITH US TODAY!
      </h4>
  </div>
)
} 

export default Home;
