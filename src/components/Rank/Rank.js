import React,{Component} from 'react';
import './Rank.css'
import'tachyons';
class Rank extends React.Component{
	render(){
	return(
		<div className=''>
		<div className=' f3 primaryfont'>
		{`Hello ${this.props.user.name}`}
		</div>
		<h1>
		{this.props.user.email}
		</h1>
		</div>
		);  //return ends here
}  //render ends here
}  //class ends here
export default Rank;