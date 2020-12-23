import React from 'react';
import'tachyons';
class Register extends React.Component{


constructor(props){
super(props);
this.state = {
email: '',  //state to hold email of user
password: '',  //state to hold password of user
name: ''  //state to hold name of user
}  //this.state ends here

this.handleEmail = this.handleEmail.bind(this); //bind the func to handle this in callback
this.handlePassword = this.handlePassword.bind(this); //bind the func to handle this in callback
this.handleSubmit = this.handleSubmit.bind(this);
this.handleName = this.handleName.bind(this);
}


handleEmail(e)  {  //to hold email of user
e.preventDefault();
this.setState({email: e.target.value});  //set state email to make hold user's email
console.log(this.state.email);
}

handleName(e)  {  //to hold email of user
e.preventDefault();
this.setState({name: e.target.value});  //set state email to make hold user's email
console.log(this.state.name);
}

handlePassword(e)  {  //func to hold password of user
this.setState({password: e.target.value})
console.log(this.state.password);  //print value in console
}

handleSubmit() {
fetch('https://hidden-spire-91414.herokuapp.com/register',{
method:'POST',
headers: {'Content-Type':'application/json'},
body: JSON.stringify({
email: this.state.email,
name: this.state.name,
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
Register
</legend>
                       
<div 
className="mt3">
<label 
className="db fw6 lh-copy f6" 
htmlFor
="email-address">
Email
</label>
<input 
className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
type="email" 
name="email-address"  
id="email-address"
onChange={this.handleEmail}/>
</div>

<div 
className="mt3">
<label 
className="db fw6 lh-copy f6" 
htmlFor
="name">
Name
</label>
<input 
className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
type="text" 
name="name"  
id="name"
onChange={this.handleName}/>
</div>


<div className="mv3">
<label 
className="db fw6 lh-copy f6" 
htmlFor
="password">
Password
</label>
<input 
className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
type="password" 
name="password"  
id="password"
onChange={this.handlePassword}/>
</div>
</fieldset>
<div className="">
<input 
onClick = {this.handleSubmit}
className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
type="submit" 
value="Register"/>
</div>
</div>
</main>
</article>
);  //return ends here
}  //render ends here
}  //class ends here

export default Register;