import logo from './logo.svg';
import './App.css';

function App() {
 
  
  return (
    <div>
      <header className="App-header">
        <h1>Registration Form </h1>
        <form>
        <label>FirstName:</label>
        <input type='text'></input>
        <br></br>
        <label>LastName:</label>
        <input type='text'></input>
        <br></br>
        <label>UserEmail:</label>
        <input type='text'></input>
        <br></br>

        <label></label>
        <label>Password:</label>
        <input type='password'></input>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
      </header>
    </div>
  );
}

export default App;
