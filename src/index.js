import React, {Component} from "react";
import ReactDOM from "react-dom";
import UserLogin from "./UserLogin";
import Dashboard from "./Dashboard";

function PageRenderer(state)
{
  if(!state.isLoggedIn)
    return <UserLogin />
  else
    return <Dashboard />
}

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      isLoggedIn: 0
    };
  }
  
  render()
  {
    return (
      <div className="App">
        <h1>Instagram Growth Hacker</h1>
        {PageRenderer(this.state)}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
