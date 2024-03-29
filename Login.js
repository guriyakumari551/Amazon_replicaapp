import React,{useState} from "react";
 import "./Login.css";
import {Link, useHistory } from "react-router-dom";
import {auth} from "./firebase";
function Login()
{
    const history=useHistory();
    const [email,setEmail]= useState("");
    const [password,setPassword]=useState("");
const login =(event) =>
{
event.preventDefault();//this stops the refresh
//do the login logic...
auth.
signInWithEmailAndPassword(email,password)
.then((auth)=>{
    //logged in,redirect to homepage....
    history.push("/");
})
.catch((e)=> alert(e.message));
};
const register=(event) =>
{
    event.PreventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then(auth=>
         {
             history.push("/");

        })
        .catch((e)=> alert(e.message));
    //this stops the register do the register    
};
return (
<div className="login">


<Link to = "/login">
<img className="login_logo"src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt=""/>
</Link>
<div className="login_container">


<form>
<h1>Sign In</h1>
<h5>E-mail</h5>
<input value={email} onChange={Event=>setEmail(Event.target.value)}type="email"/>
<h5>Password</h5>
<input value={password} type="password"/>

<button onClick={login} onChange={Event=>setPassword(Event.target.value)} type="submit" className="login_SignInButton">Sign In</button>
</form>

<p>
    By signing-in you agree to Amazon's Conditions of Use &sale.Please our privacy Notice,our Cookies Notice and our interst-Based Ads Notice.
</p>
<button onClick={register} className="login_registerButton">Create your Amazon Account</button>


</div>




</div>
   

);

}
export default Login;
    
