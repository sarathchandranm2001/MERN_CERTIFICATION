import logo from './logo.svg';
import './App.css';

function App() {
  const data=[{name:'sarath',rollno:51,gender:'male'},
    {name:'aswin',rollno:12,gender:'male'},
    {name:'saleem',rollno:48,gender:'male'},
    {name:'anshad',rollno:36,gender:'male'}]

  
  return (
    <div className="App">
      <h1>Names</h1>
      <ul>
        {data.map((items)=>
        <li>{items.name}{items.rollno}</li>)}
      </ul>
    </div>
  );
}

export default App;
