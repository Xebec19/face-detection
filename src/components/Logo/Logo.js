import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import logo from './identity.svg';
import'tachyons';
const Logo = () => {
	return(
		<div>
		<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 <div className="Tilt-inner pa3"><img style = {{paddingTop: '5px'}}src ={logo} alt='logo'/> </div>
</Tilt>
		</div>
		);
}
export default Logo;