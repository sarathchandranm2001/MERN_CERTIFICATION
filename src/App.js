import './App.css';
import Amazonlogin1 from './Amazonlogin1';
import Probs1 from './Probs1'




function App() {
 
  
  return (
   <div className="sign-up-container">
    <h1>Product List</h1>
    <Probs1 item="Laptop" price="$1000" description="A high-performance laptop" />
    <Probs1 item="Mobile" price="$2000" description="Latest Smart Phone"/>
    <Probs1 item="Headphone" price="$500" description="Best Quality Headphone"/>
    
    </div>
  );
}

export default App;
