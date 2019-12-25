import React, { Component } from "react"
class UserLogin extends Component {
    constructor(props)
        {
            super(props);
            this.state= {
                email: "",
                password: ""
            }
            this.handleonSubmit = this.handleonSubmit.bind(this);
        }
    
    handleonChange = e => this.setState({[e.target.name]: e.target.value})
    handleonSubmit(event){
        event.preventDefault();
        // console.log("submit called")
        // console.log(JSON.stringify({email: this.state.email,
            // password: this.state.password}))
        let url = "http://127.0.0.1:5000/login"
        fetch(url,
        {
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({email: this.state.email,
            password: this.state.password})
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('Success:', response)
            // console.log(props)
        })        
    }

    render() {
        return (
            <div className="UserLogin">
                <form onSubmit={this.handleonSubmit}>
                    <label>
                        <div className="Email">
                        Email
                        <input type="text" name="email" onChange={this.handleonChange}></input> 
                        </div>
                        <div className="Pass">
                        Password
                        <input type="text" name="password" onChange={this.handleonChange}></input>
                        </div>
                    </label>
                    <button>Login</button>
                </form>
            </div>
        )
    }
    
}

export default UserLogin