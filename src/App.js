import React,{ Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Particles from 'react-particles-js';
import Rank from './components/Rank/Rank.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';

const app = new Clarifai.App({
  apiKey: 'b689f4732239456fab898e84d719eb88'
});
const parameter ={
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
      imageUrl: '',
      box: {},
      route: 'signin'

    }
  }

  calculateFaceLocation = (data) => 
  {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage')
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width,height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol : width - (clarifaiFace.right_col * width),
      bottomRow : height - (clarifaiFace.bottom_row * height),
    }
  }

  displayFaceBox = (box) => 
  {
  //  console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => 
  {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => 
  {
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(
    Clarifai.FACE_DETECT_MODEL,
    this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => 
  {
    this.setState({route: route});
  }

  render(){
  return (
    <div className="App">
     <Particles className='particles' 
                params={parameter} />
     <Navigation onRouteChange={this.onRouteChange}/>
     {
/*     this.state.route == 'signin'
     ? <SignIn onRouteChange = {this.onRouteChange}/>
     : 
     <div>
     <Logo />
     <Rank />
     <ImageLinkForm 
     onInputChange={this.onInputChange} 
     onButtonSubmit={this.onButtonSubmit}
     />
     <FaceRecognition box = {this.state.box} imageUrl={this.state.imageUrl}/>
     </div>
     
*/
     this.state.route == 'signin'
     ? <SignIn onRouteChange = {this.onRouteChange}/>
     :
     (
     this.state.route == 'home'? 
     (
      <div>
     <Logo />
     <Rank />
     <ImageLinkForm 
     onInputChange={this.onInputChange} 
     onButtonSubmit={this.onButtonSubmit}
     />
     <FaceRecognition box = {this.state.box} imageUrl={this.state.imageUrl}/>
     </div>
      )
      :
      <Register />
      )
      }
     </div>
  );
}
}

export default App;
