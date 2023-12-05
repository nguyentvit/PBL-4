import React, { Component } from "react";
// import "../Auth/login.css";
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Button/Button";
import { required, length, email } from "../../util/validators";
import Auth from "./Auth";
// import { Container } from '../components/Components'; 
class Login extends Component {
  state = {
    loginForm: {
      email: {
        value: "",
        valid: false,
        touched: false,
        validators: [required, email],
      },
      password: {
        value: "",
        valid: false,
        touched: false,
        validators: [required, length({ min: 5 })],
      },
      formIsValid: false,
    },
  };
  inputChangeHandler = (input, value) => {
    this.setState((prevState) => {
      let isValid = true;
      for (const validator of prevState.loginForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.loginForm,
        [input]: {
          ...prevState.loginForm[input],
          valid: isValid,
          value: value,
        },
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        loginForm: updatedForm,
        formIsValid: formIsValid,
      };
    });
  };

  inputBlurHandler = (input) => {
    this.setState((prevState) => {
      return {
        loginForm: {
          ...prevState.loginForm,
          [input]: {
            ...prevState.loginForm[input],
            touched: true,
          },
        },
      };
    });
  };
  render() {
    return (

    //   <Components.Container></Components.Container>
        

      <Auth>
        <div className="content">
       
            <h3>Welcome to StudySpace</h3>
            <p>
            Distance doesn't matter, it's the meeting 
                         that matter the most.
            </p>
            <img src="./img/Logo.png" className="image" alt="" />
        </div>
        <form className="login-form"
          onSubmit={(e) =>
            this.props.onLogin(e, {
              email: this.state.loginForm.email.value,
              password: this.state.loginForm.password.value,
            })
          }
        >
          <Input
            id="email"
            label="Email"
            type="email"
            control="input"
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler.bind(this, "email")}
            value={this.state.loginForm["email"].value}
            valid={this.state.loginForm["email"].valid}
            touched={this.state.loginForm["email"].touched}
            className="input-style" // Thêm class CSS vào Input
          />

          <Input
            id="password"
            label="Password"
            type="password"
            control="input"
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler.bind(this, "password")}
            value={this.state.loginForm["password"].value}
            valid={this.state.loginForm["password"].valid}
            touched={this.state.loginForm["password"].touched}
          />

          <Button
            design="raised"
            type="submit"
            loading={this.props.loading}
            className="button-style" // Thêm class CSS vào Button
          >
            Login
          </Button>
          <img src="./img/Logo.png" className="image" alt="" />
     
        </form>
      </Auth>
    );
  }
}

export default Login;
