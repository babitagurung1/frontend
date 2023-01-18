import React ,{useState}from "react";
import './login.css';
import {Link} from "react-router-dom";

 const Login=()=>{
    const [input1,setinput1]=useState({username:"",password:""});
    const inputchange=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
      setinput1(e=>({...e,[name]:value}))
    }
  

    const submit2=(e)=>{
    e.preventDefault();
    console.log(input1)
    }

    return(
      <div className="login_wrapper">
            <div className="login_form">
           
           <form  onSubmit={submit2}>
            <div className="login_header"><h1 className="login_h1 p-3">Login Form</h1> </div> 
              <div className="form-group">
              <label classname="label_text" htmlFor=""> <i class="fa fa-user" aria-hidden="true"></i>Usename:</label>
               <input type="text" className="form-control" name="username"value={input1.username} onChange={inputchange}></input>
              </div>
              <div className="form-group">
            
            <label htmlFor=""> <i class="fa fa-lock" aria-hidden="true"></i>Password:</label>
             <input type="password"  className="form-control"name="password" value={input1.password} onChange={inputchange}></input>
             </div>
           <div>
           <button type="submit" className="btn mt-3 btn2">Login</button>
               <button type="button" className="btn btn5 mt-4 mx-4"><Link to="/forgetpass">Forget password</Link></button>
           </div>
               
               
           </form>
          
       </div>
      </div>
    )
}
export default Login;