import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const SingleElementMenu = (props) => (
   <div className="single-element-menu">
    <img src={logo} alt="single-element-logo" className="single-element-logo"/>
    <h4>{props.heading}</h4>
    
  </div> 
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
      <div style={{paddingTop:`${count*2 - index*2}em` }}>
        <DoubleElementMenu  twoElement={Data.slice(2*index, 2*index+2)}/>
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
]

class App extends Component {
  render() {
    return (
      <div className="App">
     <BoxMenu  Data={BoxMenuData}/>
     </div>
    );
  }
}

export default App;

































