import React from "react";
import axios from "axios";

class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayName: null,
        password: null,
        rePassword: null
    }

    onChange = event => {
        const {name, value} = event.target;
        this.setState({
        [name]: value
        });
    };  
    
    onClickSignup = event => {
        event.preventDefault();
        const {username, displayName, password} = this.state;
        const user = { username, displayName, password };
        axios.post('/api/1.0/users',user)
    };
    render(){
        return (
           <form>
            <h1>Sign Up</h1>
            <div>
            <label htmlFor="username">Username</label>
            <input id="username" name="username" onChange={this.onChange} />
            </div>
            <div>
            <label htmlFor="displayName">Display Name</label>
            <input id="displayName" name="displayName" onChange={this.onChange} />
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" onChange={this.onChange}/>
            </div>
            <div>
            <label htmlFor="rePassword">Re-Password</label>
            <input id="rePassword" type="password" name="rePassword" onChange={this.onChange} />
            </div>
            <button onClick={this.onClickSignup}>Sign Up</button>
           </form>
        );
    }   
}


export default UserSignupPage;