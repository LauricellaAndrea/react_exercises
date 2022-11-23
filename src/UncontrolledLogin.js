import React from "react";

export class UncontrolledLogin extends React.Component {
     
    _reference = React.createRef()

    handleFormSubmit = (event) => {
       event.preventDefault()
       const username = event?.target?.elements?.username?.value
       const password = event?.target?.elements?.password?.value
       const remember = event?.target?.elements?.checkbox?.value
     
       console.log({
        username,
        password,
        remember
       });

    }

    componentDidMount(){
        document.querySelector('#loginButton2').setAttribute("disabled", 'true')
    }

    loginCheck = ()=>{
        this._reference.current.username.value === '' || this._reference.current.password.value === '' ? document.querySelector('#loginButton2').setAttribute("disabled", 'true') : document.querySelector('#loginButton2').removeAttribute('disabled')
    }

    render() {
        return (
            <div>
                <h3> UncontrolledLogin </h3>

                <form ref={this._reference} onSubmit={this.handleFormSubmit} onChange={this.loginCheck}>
                    <input name="username" autoFocus/>
                    <input name="password" type="password"/>
                    <input name="remember" type="checkbox"/>

                    <button type="submit" id="loginButton2">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}