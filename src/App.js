import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlipCard from 'react-flipcard';


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
        <span className='navigation-bar-contact-number'>
          1890 876 077
        </span>
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
      <img src={logo} alt="single-element-logo" className="single-element-logo"/>
      <h4>{props.heading}</h4>
    </div> 
    <div className="single-element-menu-back">
      <h4>GET QUOTE NOW</h4>
    </div> 
  </FlipCard>
);

const DoubleElementMenu = (props)=>(
   <div className="double-element-menu">
    <SingleElementMenu heading={props.twoElement[0].heading} />
    <SingleElementMenu heading={props.twoElement[1].heading} />
  </div> 
);

const BoxMenu = ({Data}) => {
  const count = Data.length/2;
  const list = new Array(count).fill(0).map(
    
    (currentValue, index) => {
    return (
      <div style={{paddingTop:`${count*2 - index*2}em`}} key={index}>
        <DoubleElementMenu   twoElement={Data.slice(2*index, 2*index+2)}/>
      </div>
      )
    }
);
   
  return (
   <div className="box-menu">
  {list}
    </div> 
);
}

const BoxMenuData = [
  { image: logo, heading: 'Heading1' },
  { image: logo, heading: 'Heading2' },
  { image: logo, heading: 'Heading3' },
  { image: logo, heading: 'Heading4' },
  { image: logo, heading: 'Heading5' },
  { image: logo, heading: 'Heading6' },
  { image: logo, heading: 'Heading7' },
  { image: logo, heading: 'Heading8' }, 
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

































