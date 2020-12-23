import React from 'react';
import'tachyons';
class SignIn extends React.Component {

constructor(props){
super(props);
this.state = {
email: '',  //state to hold email of user
password: ''  //state to hold password of user
}

this.handleEmail = this.handleEmail.bind(this); //bind the func to handle this in callback
this.handlePassword = this.handlePassword.bind(this); //bind the func to handle this in callback
this.handleSubmit = this.handleSubmit.bind(this);
}

handleEmail(e)  {  //to hold email of user
e.preventDefault();  //to prevent default init
this.setState({email: e.target.value});  //set state email to make hold user's email
console.log(this.state.email);
}


handlePassword(e)  {  //func to hold password of user
e.preventDefault();  //to prevent default init
this.setState({password: e.target.value})
console.log(this.state.password);  //print value in console
}

handleSubmit() {
fetch('https://hidden-spire-91414.herokuapp.com/login',{
method:'POST',
headers: {'Content-Type':'application/json'},
body: JSON.stringify({
email: this.state.email,
password: this.state.password
})
}) //fetch ends here
.then(resp => resp.json())
.then(resp => {
console.log(resp)
if(resp.email){
this.props.loadUser(resp);
this.props.onRouteChange('home');
}else{alert('Error!!!')}
})
.catch(err => {
        alert('Error!!!');
        console.log(err);
})
}  //handleSubmit ends here 

render(){

const {onRouteChange} = this.props;

return(
<article 
className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6  shadow center">
<main 
className="pa4 black-80">
<div 
className="measure">
<fieldset 
id="sign_up" 
className="ba b--transparent ph0 mh0">
<legend 
className="f1 fw6 ph0 mh0">
Sign In
</legend>

{/*Input field for email*/}
<div 
className="mt3">
<label 
className="db fw6 lh-copy f6" 
htmlFor="email-address">
Email
</label>
<input 
className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
type="email" 
name="email-address"  
id="email-address" 
onChange = {this.handleEmail}  //invoke handleEmail to hold email
/>
</div>

{/*Input field for password*/}
<div className="mv3">
<label 
className="db fw6 lh-copy f6" 
htmlFor="password">
Password
</label>
<input 
className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
type="password" 
name="password"  
id="password"
onChange = {this.handlePassword}  //invoke handlePassword to hold password
/>
</div>
</fieldset>

{/*Submit button*/}
<div className="">
<input 
onClick = {this.handleSubmit}
className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
type="submit" 
value="Sign in"
/>
</div>

{/*Register button to set route to register*/}
<div 
className="lh-copy mt3">
<p 
onClick = {() => onRouteChange('register')}
className="f6 link dim black db pointer">
Register
</p>
</div>
</div>
</main>
</article>
);  //return ends here
}  //render ends here
}

export default SignIn;