import React,{useState} from 'react'
import './AmazonLogin.css'



function Amazonlogin1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);


  const handleLogin=(event)=>{
    event.preventDefault();

  }

  return (
    
        <div className="login">
      <div className="login__container">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
          alt="Amazon Logo"
          className="login__logo"
        />
        <form onSubmit={handleLogin}>
          <h1>Sign-In</h1>
          <label>Email or mobile phone number</label>
          <input
            type="email"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <button type="submit" className="login__signInButton">
            Sign-In

          </button>

          <button className="login__registerButton">
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>


    
  )
}

export default Amazonlogin1