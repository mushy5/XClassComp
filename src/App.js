import './App.css';
import React from 'react';

class CounterApp extends React.Component{
  constructor(props){
    super(props);
    this.state={count:0}
  }

  handleClick(num){
   
    this.setState({ count: this.state.count + num });
  }

 render(){
  return <div className='App'>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={()=>{this.handleClick(1)}}>Increment</button>
        <button onClick={()=>{this.handleClick(-1)}}>Decrement</button>
  </div>
 }
}

export default CounterApp;
