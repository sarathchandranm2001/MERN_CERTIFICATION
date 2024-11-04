import React, { useState } from 'react'
import './Signup1.css';


function Signup() {
  const[formData,setFormData]=useState({//in use state we ill be getting two value 1.previousdata2.current data
    firstname:"",
    lastname:"",
    email:"",
    password:"",

  })
  const handleInputchange=(event)=>{//
    const{name,value}=event.target;//we are getting the name and value of the input field
    setFormData((prevData) => ({ ...prevData, [name]: value }))    //we are updating the current data with the new

    }
    const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(formData,"The data")
  }
  return (
    <div className='Signp'>
      <header className="App-header">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <label>FirstName:</label>
          <br></br>
          <input type='text' name='firstname' value={formData.firstname} onChange={(event)=>handleInputchange(event)}/>
          <br />
          
          <label>LastName:</label>
          <br></br>
          <input type='text'name='lastname' value={formData.lastname} onChange={(event)=>handleInputchange(event)} />
          <br />
          
          <label>UserEmail:</label>
          <br></br>
          <input type='text'name='email' value={formData.email} onChange={(event)=>handleInputchange(event)} />
          <br />
          
          <label>Password:</label>
          <br></br>
          <input type='password' name='password' value={formData.password} onChange={(event)=>handleInputchange(event)}/>
          
          <br></br>
          <br></br>
          
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default Signup;
