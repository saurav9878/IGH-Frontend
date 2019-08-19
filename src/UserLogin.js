import React, { Component } from "react"
class UserLogin extends Component {
    render() {
        return (
            <div className="UserLogin">
                <form>
                    <label>
                        <div className="Email">
                        Email
                        <input type="text" name="email"></input> 
                        </div>
                        <div className="Pass">
                        Password
                        <input type="text" name="pass"></input>
                        </div>
                        
                    </label>
                    <button>Login</button>
                    
                </form>
            </div>
        )
    }
}

export default UserLogin