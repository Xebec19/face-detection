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
      route: 'signin',
      isSignedIn: false,
      user: []
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
    if(this.state.route !== 'home'){
      this.setState({user:[]});
      console.log('User: ',this.state.route);
    }
  }

  loadUser = (props) => {
    this.setState({user:props});
    console.log(this.state.user);
  }

  render(){
    const { isSignedIn, imageUrl, route, box } = this.state;
  return (
    <div className="App">
     <Particles className='particles' 
                params={parameter} />
     <Navigation onRouteChange={this.onRouteChange} route={this.state.route}/>
     {
     route === 'register'
     ? <Register 
      onRouteChange={this.onRouteChange}
      loadUser={this.loadUser}/>
     :
     (
     route === 'home'? 
     (
      <div>
     <Logo />
     <Rank user={this.state.user}/>
     <ImageLinkForm 
     onInputChange={this.onInputChange} 
     onButtonSubmit={this.onButtonSubmit}
     />
     <FaceRecognition box = {box} imageUrl={imageUrl}/>
     </div>
      )
      :
      <SignIn onRouteChange = {this.onRouteChange} loadUser = {this.loadUser}/>
      )
      }
     </div>
  );
}
}

export default App;
