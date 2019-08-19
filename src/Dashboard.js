import React, { Component } from "react";
import EditProfile from "./EditProfile";
import ManageInsta from "./ManageInsta";
import './dashboard.css'
import EditInstaProfile from "./EditInstaProfile";
import AddInstaProfile from "./AddInstaProfile"
import Stats from "./Stats"

class Dashboard extends Component {
  user_data = {
    name: "Saurav Kumar",
    email: "saurav9878@gmail.com"
  };
  insta_data = [
    {
      insta_id: "suraev",
      max_posts: 2,
      hash_tags: ["food", "travel", "music"],
      sources: ["reddit link", "another reddit link"],
      post_type: 0
    },
    {
      insta_id: "aakashd",
      max_posts: 3,
      hash_tags: ["food", "travel", "music"],
      sources: ["one reddit link", "another reddit link"],
      post_type: 1
    }
  ];
  // insta_data=[{
  //     insta_id:"saurav",
  //     max_posts: 2,
  //     hash_tags: "food",
  //     sources: "source",
  //     post_type: 0
  // }]
  constructor(props) {
    super(props);
    this.state = {
      ClickedOption: 0,
      InstaEdit: ""
    };
  }
  ShowPage(props) {
    // console.log(this)
    if (props.choice === 1) return <EditProfile user_data={props.user_data} />;
    else if (props.choice === 2)
      return <ManageInsta dash_this = {this} insta_data={props.insta_data} />;
    else if(props.choice ===3)
      return <EditInstaProfile dash_this={this} insta_data={props.insta_data} />
    else if(props.choice===4)
      return <AddInstaProfile />
    else if(props.choice===5)
      return <Stats insta_data={props.insta_data} />
    return null;
  }

  RenderPages = this.ShowPage.bind(this) // Did this because in ManageInsta, we need to change ClickedOption

  render() {
    return (
      <div className="Dashboard">
        <div className="left_bar">
          <div className="User_Details">
            <h2> Welcome, {this.user_data.name}</h2>
          </div>
          <div className="Logout">
            Not you!
            <button>Logout</button>
          </div>
          <div className="Edit Profile">
            <button
              onClick={() =>
                this.setState({
                  ClickedOption: 1
                })
              }
            >
              Edit Profile
            </button>
          </div>
          <div className="Manage_INSTA">
            <button
              onClick={() =>
                this.setState({
                  ClickedOption: 2
                })
              }
            >
              Manage Instagram Accounts
            </button>
          </div>
          <div className="ShowStats">
            <button
            onClick={() =>
                this.setState({
                  ClickedOption: 5
                })
              }
              >Statistics</button>
          </div>
        </div>
        <div className="content">
        <this.RenderPages
          choice={this.state.ClickedOption}
          user_data={this.user_data}
          insta_data={this.insta_data}
        />
        </div>
        
      </div>
    );
  }
}

export default Dashboard;
