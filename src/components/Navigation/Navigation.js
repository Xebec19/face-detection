import React from 'react';
import'tachyons';
class Navigation extends React.Component{
	
	constructor(){
		super();
		this.handleSignOut = this.handleSignOut.bind(this);
	}  //constructor ends here

	handleSignOut = () => {
		this.props.onRouteChange('signin');
		window.location.reload();
	}
	render(){
		const {onRouteChange,route} = this.props;
		if(route === 'home'){
			return(
		<nav style={{display:'flex',justifyContent:'flex-end'}}>
		<p onClick = {this.handleSignOut} className='f3 link dim black underline pa3 pointer white' >Sign Out</p>
		</nav>
		)
		}
		else
		{
			return(
			<nav style={{display:'flex',justifyContent:'flex-end'}}>
			<p onClick = {() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer white'>Sign in</p>
			<p onClick = {() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer white'>Register</p>
			</nav>
			)
			
		}  //else ends here
}  //render ends here
}  //class ends here
export default Navigation;