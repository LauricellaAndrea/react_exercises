import React from 'react';
import { useState } from 'react';

  export default function Login({name = "", password = "", checked = false}) {
  const [form, setForm] = useState({
    username: name,
    password: password,
    checked: checked
  })

  function LoginEventHandlert(e) {
    setForm(form => {
      return {
        ...form,
        [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
      };
    });
  }

  const handleLogin = () => {
    console.log(form)
  }

  return (
    <>
      <input type="text" name='username' placeholder='username' value={form.username} onChange={LoginEventHandlert}/>
      <input type="password" name='password'placeholder='password' value={form.password} onChange={LoginEventHandlert}/>
      <input type="checkbox" name="checked" checked={form.checked} onChange={LoginEventHandlert}/>
      <button onClick={handleLogin}>Login</button>
    </>
  )
}



// export class Login extends React.Component {
//   onLogin = (username, password, remember) => {
//     console.log({
//       username,
//       password,
//       remember,
//     });
//   };

//   state = {
//     username: "",
//     password: "",
//     remember: false,
//   };

//   loginEventHandler = (event) => {
//     this.setState((state) => {
//       return {
//         [event.target.name]:
//           event.target.type === "checkbox"
//             ? event.target.checked
//             : event.target.value,
//       };
//     });
//   };

//   componentDidMount() {
//     document.querySelector("#loginButton").setAttribute("disabled", "true");
//   }

//   componentDidUpdate() {
//     this.state.username === "" || this.state.password === ""
//       ? document.querySelector("#loginButton").setAttribute("disabled", true)
//       : document.querySelector("#loginButton").removeAttribute("disabled");
//   }

//   buttonEventHandler = (e) => {
//     this.props.onLogin(
//       this.state.username,
//       this.state.password,
//       this.state.remember
//     );
//   };

//   resetEventHandler = (e) => {
//     this.setState((state) => {
//       return { username: "", password: "", remember: false };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h3>Login:</h3>
//         <input
//           name="username"
//           value={this.state.username}
//           onChange={this.loginEventHandler}
//         />{" "}
//         <br />
//         <input
//           name="password"
//           type="password"
//           value={this.state.password}
//           onChange={this.loginEventHandler}
//         />{" "}
//         <br />
//         <input
//           name="remember"
//           type="checkbox"
//           checked={this.state.remember}
//           onChange={this.loginEventHandler}
//         />{" "}
//         <br />
//         <button
//           style={{
//             backgroundColor: this.state.password.length < 8 ? "red" : "green",
//           }}
//           type="button"
//           id="loginButton"
//           onClick={this.buttonEventHandler}
//         >
//           Login
//         </button>
//         <button type="reset" onClick={this.resetEventHandler}>
//           Reset Me
//         </button>
//       </div>
//     );
//   }
// }
