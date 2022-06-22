import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../components/App.css';

export default class Register extends Component {
    constructor(props) {
      super(props)
    this.state={
        FirstName:'',
        LastName:"",
        PhoneNumber:"",
        Gender:"Select",
        Password: "",
        ConfirmPassword:"",
        BloodGroup:"A+",
        Address :"",
        AccountType:""
        
    }
    }
    handleChange=(event)=>{
        let name=event.target.name;
        let val=event.target.value;
        this.setState({[name]:val});
    }
    onValueChange(e) {
      
      this.setState({value: e.target.BloodGroup});
    }
    handleSubmit=(event)=>{
     
event.preventDefault();
if((this.state.Password===this.state.ConfirmPassword) && (this.state.Password).length!==0)
{
alert("you have registered successfully");
   }
   else{
     alert("Please give the correct confirm password");
   }
     }
  render() {
    return (
      <div class="container-fluid" >
     
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-10 col-md-8 col-lg-6">
        <h1 >
          Registration Form
        </h1>
<form onSubmit={this.handleSubmit} className="form-example">
<label>
    FirstName</label>
    <input type="text" onChange={this.handleChange} name="FirstName" className='form-control FirstName'/>
    <br></br>
    <label>
        LastName</label>
        <input type="text" onChange={this.handleChange} name="LastName" className='form-control LastName'/>
        <br></br>
        <label>
       Password
        </label>
        <input type="password" name="Password" onChange={this.handleChange} className="form-control password"/>
        <br></br>
      
        <label>
           Confirm Password
        </label>
        <input type="password" name="ConfirmPassword" onChange={this.handleChange} className="form-control ConfirmPassword"/>
        <br></br>
     
          E-Mail
          <input type="email" name="email" onChange={this.handleChange} className="form-control email"/>
        <br></br>
        <div>
        Phone Number
        <input type="tel" onChange={this.handleChange} name="PhoneNumber" className="form-control PhoneNumber" pattern='[0-9]{10}' placeholder="0123456789"/><br></br>
        </div>
        <label>
            Gender</label>
<select name="Gender" onChange={this.handleChange} value={this.state.Gender} className="form-control Gender">
    <option value="Male"> Male </option>
<option value="Female"> Female</option>
<option value="Others">Others</option>
</select><br></br>
<label>
  Date of Birth
</label>
<input type='date' name='birthdate' className='form-control birthdate'
      placeholder='Enter BirthDate'
       onChange={this.handleChange}
      />
      <br></br>
    
       <div className='form-control BloodGroup' >
         <div > Blood Group :</div>
      
          <label>
            <input name="BloodGroup"
              type="radio" 
              value="A+"
              checked={this.state.BloodGroup === "A+"}
              onChange={this.handleChange}
            />
            A<sup>+</sup>      </label>
            <label>
            <input
              type="radio" name="BloodGroup"
              value="B+" 
              checked={this.state.BloodGroup === "B+"}
              onChange={this.handleChange} />
            B<sup>+</sup>
          </label>
          <label>
            <input
              type="radio" name="BloodGroup" 
              value="O+"
              checked={this.state.BloodGroup === "O+"}
              onChange={this.handleChange}
            />
          O<sup>+</sup>
          </label>
          <label>
            <input
              type="radio" name="BloodGroup" 
              value="A-"
              checked={this.state.BloodGroup === "A-"}
              onChange={this.handleChange}
            />
          A<sup>-</sup>
          </label>
          <label>
            <input
              type="radio" name="BloodGroup"
              value="B-" 
              checked={this.state.BloodGroup === "B-"}
              onChange={this.handleChange}
            />
          B<sup>-</sup>
          </label>
          <label>
            <input
              type="radio" name="BloodGroup"
              value="O-"
              checked={this.state.BloodGroup === "O-"}
              onChange={this.handleChange}
            />
          O<sup>-</sup>
          </label>
          <label>
            <input
              type="radio" name="BloodGroup"
              value="AB+"
              checked={this.state.BloodGroup === "AB+"}
              onChange={this.handleChange}
            />
          AB<sup>+</sup>
          </label>
          <label>
            <input
              type="radio" name="BloodGroup"
              value="AB-"
              checked={this.state.BloodGroup === "AB-"}
              onChange={this.handleChange}
            />
          AB<sup>-</sup>
          </label>
        </div>
        <br></br>
        <div>
        Address 
        <textarea name="Address"
          value={this.state.Address}
          onChange={this.handleChange}
        />
      </div>
      <div>
        Account Type:
        <select name="AccountType" onChange={this.handleChange} value={this.state.AccountType} className="form-control AccountType">
    <option value="User"> User </option>
<option value="Doctor"> Doctor</option>
<option value="BloodDonor">Blood_Donor</option>
<option value="Admin">Admin</option>
<option value="Patient">Patient</option>
</select><br></br>
      </div>
<div class="col-12">
    <div className="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" aria-describedby="invalidCheck3Feedback" required/>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div  class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <Link to ="/" >
<input type="submit" value ="Submit" class="btn btn-primary btn-customized"/>
</Link>
</form>
      </div>
      </div>
      </div>
    )
  }
}
