import React, { Component } from 'react';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      amtDueInput: '',
      amtRecInput: '',
      change: '',
    
      twenties: 0,  
      tens:0,  
      fives: 0,
      dollars: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0    
    }

    this.updateamtDueInput = this.updateamtDueInput.bind(this);
    this.updateamtRecInput = this.updateamtRecInput.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  


  updateamtDueInput(e) {
    this.setState({amtDueInput: e.target.value})
    
  }
  updateamtRecInput(e) {  
    this.setState({amtRecInput: e.target.value})
    
  }

  handleClick(e){
    e.preventDefault();
    let amountDue = parseFloat(this.state.amtDueInput);
    let amountReceived = parseFloat(this.state.amtRecInput);
    let change = parseFloat((amountReceived - amountDue).toFixed(2));

  

    let twenty = 20.00;  
    let ten = 10.00;  
    let five = 5.00;
    let dollar = 1.00;
    let quarter = 0.25;
    let dime = 0.10;
    let nickel = 0.05;
    let cent = 0.01;

    let twenties = Math.floor(change / twenty);
    let tens = Math.floor(((change % twenty).toFixed(2)) / ten);
    let fives = Math.floor(((((change % twenty).toFixed(2)) % ten).toFixed(2)) / five);
    let dollars = Math.floor(((((((change % twenty).toFixed(2)) % ten).toFixed(2)) % five).toFixed(2)) / dollar);
    let quarters = Math.floor(((((((((change % twenty).toFixed(2)) % ten).toFixed(2)) % five).toFixed(2)) % dollar).toFixed(2)) / quarter);
    let dimes = Math.floor(((((((((((change % twenty).toFixed(2)) % ten).toFixed(2)) % five).toFixed(2)) % dollar).toFixed(2)) % quarter).toFixed(2)) / dime);
    let nickels = Math.floor(((((((((((((change % twenty).toFixed(2)) % ten).toFixed(2)) % five).toFixed(2)) % dollar).toFixed(2)) % quarter).toFixed(2)) % dime).toFixed(2)) / nickel);
    let pennies = Math.floor(((((((((((((((change % twenty).toFixed(2)) % ten).toFixed(2)) % five).toFixed(2)) % dollar).toFixed(2)) % quarter).toFixed(2)) % dime).toFixed(2)) % nickel).toFixed(2)) / cent);
    
    this.setState({
      change: change,
      twenties: twenties,
      tens: tens,
      fives: fives,
      dollars: dollars,
      quarters: quarters,
      dimes: dimes,
      nickels: nickels,
      pennies: pennies,
    });
    
  }
  
  render() {
    // var change = amountReceived - amountDue;
    // var fred = change;
    // if(fred <= amountReceived) {
    //   <div className="alert alert-success" role="alert">
    //         <p>Amount due is ${this.state.change}</p>
    //   </div>

    // } else {
    //   <div className="alert alert-success" role="alert">
    //   <p>Amount owed ${this.state.change}</p>
    //   </div> 
      
    // }
    
//  <div className="col-md-12">
//         <div className="alert alert-success" role="alert">
//         <p>Amount due is</p>
//         <p className="lead">{this.state.change}</p>
//       </div>
//           </div> 


    return (
      <div>
        
      <div className="page-header">
        <h1>Change Calculator</h1>
      </div>
     
    
  <div className="col-md-4">
    <div className="panel panel-default">
      <div className="panel-heading">
        <div className="panel-body">
          Enter Information
        </div>
      <form onSubmit={this.handleClick}>
        <div className="panel-body">
          <h4 className="input-group">
            How much is due?
          </h4>
          <input id="amountDue" name="amountDue" type="text" value={this.state.amtDueInput} onChange={this.updateamtDueInput} />
          <h4 className="input-group">
            How much was received?
          </h4>
          <input id="amountReceived" name="amountReceived" type="text" value={this.state.amtRecInput} onChange={this.updateamtRecInput} />
        
        <div className="panel-footer">
          <button className="btn btn-primary btn-block" type='submit' value="Alert the text input" onClick={this.handleClick}>Calculate</button>
        </div>
        </div> 
      </form>
      </div>
    </div>
  </div>
       


    <div className="col-md-8">  
    <div className="row justify-content-start">
      <div className="panel panel-default">
        <div className="panel-body">

       <div className="col-md-12"> 
        
          {
            (this.state.change >= 0)  && 
            <div className="alert alert-success" role="alert" >
              <div>
                <p className="lead"> The total change due is ${this.state.change}</p>
              </div>
            </div>
          }
        
          {
            (this.state.change < 0) &&  
            <div className="alert alert-success" role="alert" >
              <div>
                <p className="lead">You still owe { this.state.change }</p>
              </div>
            </div>
          }


      <div className="col-md-3">
        <div className="well well-lg text-center">
          <p>Twenties</p>
          <p className="lead">{this.state.twenties}</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="well well-lg text-center">
        <p>Ten</p>
        <p className="lead">{this.state.tens}</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="well well-lg text-center">
        <p>Fives</p>
        <p className="lead">{this.state.fives}</p>
        </div>
      </div>   
      <div className="col-md-3">
        <div className="well well-lg text-center">
        <p>One</p>
        <p className="lead">{this.state.dollars}</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="well well-lg text-center">
        <p>Quarters</p>
        <p className="lead">{this.state.quarters}</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="well well-lg text-center">
        <p>Dimes</p>
        <p className="lead">{this.state.dimes}</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="well well-lg text-center">
        <p>Nickels</p>
        <p className="lead">{this.state.nickels}</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="well well-lg text-center">
        <p>Pennies</p>
        <p className="lead">{this.state.pennies}</p>
        </div>
      </div>
          
        </div>
      </div>
    </div>
      </div>
        </div>
          </div>
            
              
                
      
    );
  }
}


export default App;
