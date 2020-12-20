import React from 'react';
import'tachyons';
import'./ImageLinkForm.css';
const ImageLinkForm = ( {onInputChange,onButtonSubmit} ) => {
	return(
		<div>
		<p className='f3 secondaryfont'>
		{'Let\'s detect faces in a picture'}
		</p>
		<div className='center'>
		<div className='form center pa4 br3 shadow-5'>
			<input className='f4 pa2 w-70 center' type='text' placeHolder="Input the URL of the image" onChange={onInputChange}/>
			<button className='w-39 grow f4 link ph3 pv2 dib white bg-blue secondaryfont' onClick={onButtonSubmit}>Detect</button>
		</div>
		</div>
		</div>
		);
}
export default ImageLinkForm;