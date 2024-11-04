import logo from './logo.svg';
import './App.css';

function App() {
  const obtainedMark = 70;
  const passMark = 60;

  const ifPass = obtainedMark > passMark ? (<button>PassButton</button>) : (<button>FailButton</button>);

  
  return (
    <div className="App">
      <div>
        {ifPass}
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
