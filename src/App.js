import React, { Component } from 'react';
import './App.css';
import FlipCard from 'react-flipcard';
import phone from './images/phone_white.svg';
import shield from './images/shield_check.svg';
import truck from './images/truck.svg';
import heart from './images/heart.svg';
import home from './images/home.svg';
import umbrella from './images/umbrella.svg';
import hand from './images/hand_money.svg';
import airplane from './images/airplane.svg';
import commercial from './images/commercial.svg';



const NavigationBar= () => (
  <div className="row">
    <div className="navigation-bar-small">Small devices navigation bar</div>
    <div className="navigation-bar">
      <div>
        <span className='navigation-bar-logo'> best<br/>insure.ie</span>
      </div>
      <div>
        <span className='navigation-bar-in-touch'>
        <span>Home</span>
        <span>About Us</span>
        <span>Contact Us</span>
        </span>
      </div>
      <div>
          <ul className='navigation-bar-in-touch-mid-devices'>
            <li>Home</li>
            <li>About Us</li>
           <li>Contact Us</li>
          </ul>
      </div>
      <div>
        <span className='navigation-bar-contact-number'>
          <img src={phone} alt="phone" className="phone-navbar"/>1890 876 077
        </span>
       </div>
       <div> 
          <span className='naviagtion-bar-quote-button'>
           <button className='get-quote-now-button'>GET QUOTE NOW</button>
          </span>
      </div>  
     </div>  
  </div>
    
);

const SingleElementMenu = (props) => (
  <FlipCard type="vertical" >
    <div className="single-element-menu-front">
      <img src={props.image} alt="single-element-logo" className="single-element-logo"/>
      <h2>{props.heading}</h2>
    </div> 
    <div className="single-element-menu-back">
      <h1>GET QUOTE NOW</h1>
    </div> 
  </FlipCard>
);

const DoubleElementMenu = (props)=>(
   <div className="double-element-menu">
    <SingleElementMenu heading={props.twoElement[0].heading}  image={props.twoElement[0].image}/>
    <SingleElementMenu heading={props.twoElement[1].heading} image={props.twoElement[1].image}/>
  </div> 
);

const QuadrupleElementMenu = (props)=>(
   <div className="Quadruple-element-menu">
    <SingleElementMenu heading={props.fourElement[0].heading}  image={props.fourElement[0].image}/>
    <SingleElementMenu heading={props.fourElement[1].heading} image={props.fourElement[1].image}/>
    <SingleElementMenu heading={props.fourElement[2].heading} image={props.fourElement[2].image}/>
    <SingleElementMenu heading={props.fourElement[3].heading} image={props.fourElement[3].image}/>
  </div> 
);


const BoxMenu = ({Data}) => {
  const count_desktop = Data.length/2;
  const list_desktop = new Array(count_desktop).fill(0).map(
    
    (currentValue, index) => {
    return (
      <div style={{paddingTop:`${count_desktop*2 - index*2}em`}} key={index}>
        <DoubleElementMenu   twoElement={Data.slice(2*index, 2*index+2)}/>
     </div>
      )
    }
);
  const count_medium = Data.length/4;
  const list_MediumDevices = new Array(count_medium ).fill(0).map(
    
    (currentValue, index) => {
    return (
      <div style={{paddingTop:`${count_medium *4 - index*4}em`}} key={index}>
        <QuadrupleElementMenu    fourElement={Data.slice(4*index, 4*index+4)}/>
     </div>
      )
    }
);

   
  return (
  <div className="row">  
    <div className="box-menu-desktop">
        {list_desktop}
        {list_MediumDevices}
    </div>
  </div>   
);
}

const BoxMenuData = [
  { image: shield, heading: 'Life Assurance' },
  { image: commercial, heading: 'Commercial Cover' },
  { image: truck, heading: 'Commercial Motor Insurance' },
  { image: umbrella, heading: 'Income Protection' },
  { image: heart, heading: 'Health Insurance' },
  { image: hand, heading: 'Pension Advice' },
  { image: home, heading: 'Home Insurance' },
  { image: airplane, heading: 'Travel Cover' }, 
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <BoxMenu  Data={BoxMenuData}/>
     </div>
    );
  }
}

export default App;

































