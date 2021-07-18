import React from 'react';
import './App.css';
import Region from './components/region.selection/Region';
import Details from './components/Details/Details';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      details:'',
    };
    this.receiveDetails = this.receiveDetails.bind(this)

  }
  receiveDetails(d){  
    var that = this;
    fetch(`https://travelbriefing.org/${d}?format=json`)
    .then(res =>res.json()).then((res)=>{
      that.setState({details:res});
    });
  }

  render(){
    return(
      <div className='Main'>
        <Region className='Region' details = {this.receiveDetails}/>
        <Details details ={this.state.details}/>
      </div>
    )
  }
}

export default App;




