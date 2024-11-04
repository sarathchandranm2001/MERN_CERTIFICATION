import logo from './logo.svg';
import './App.css';

function App() {
  const isBussMissed=true;
  let mess;
  if(isBussMissed){
    mess=<p>Take auto</p>
  }else{
    mess=<p>Take bus</p>
  }
  return (
    <div className="App">
      <div>
        {mess}
      </div>
      <header className="App-header">
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
      </header>
    </div>
  );
}

export default App;
