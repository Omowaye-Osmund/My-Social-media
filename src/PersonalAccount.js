const PersonalAccount = () => {
  return (
    <div id="personal-account">
        <h2>Fist Up personal account here</h2>
        <form>
            <div>What's your username?</div>
            <input type="text" placeholder="Username"/> <br />
            <br />
            <div>Enter your Email:</div>
            <input type="email" placeholder="Email address"/> <br />
            <br />
            <div>Select your gender:</div>
           <p>Male:</p> <input type="radio" placeholder="Male" name="gender"/>
            <p>Female:</p> <input type="radio" placeholder="Female" name="gender"/>
            <p>Other:</p> <input type="radio" placeholder="Other" name="gender"/> <br />
            <br />
            <input type="password" placeholder="Password"/><br />
            <br />
            <input type="password" placeholder="Confirm Password"/><br />
            <br />
            <button>Fist Up</button>
        </form>
    </div>
  )
}

export default PersonalAccount