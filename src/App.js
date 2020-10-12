import React,{ Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Particles from 'react-particles-js';
import Rank from './components/Rank/Rank.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';

const parameter =   {
                      particles: {
                                number: {
                                        value: 30,
                                        density: {
                                                enable: true,
                                                value_area: 800
                                                  }
                                        }  
                                  }
                    }

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => 
  {
    console.log(event.target.value);
  }

  render(){
  return (
    <div className="App">
     <Particles className='particles' 
                params={parameter} />
     <Navigation />
     <Logo />
     <Rank />
     <ImageLinkForm onInputChange={this.onInputChange}/>
{/*     <FaceRecognition />
*/} 
     </div>
  );
}
}

export default App;
