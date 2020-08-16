import React,{ Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Particles from 'react-particles-js';
import Rank from './components/Rank/Rank.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
const parameter =   {polygon: {
                      number: {
                          value: 30,
                          density: {
                              enable: true,
                              value_area: 800
                          }
                      }  
                        
                    }}
class App extends Component {
  render(){
  return (
    <div className="App">
     <Particles className='particles' 
                params={{parameter}} />
     <Navigation />
     <Logo />
     <Rank />
     <ImageLinkForm />
{/*     <FaceRecognition />
*/} 
     </div>
  );
}
}

export default App;
