import * as React from 'react';
// import { Link } from 'react-router-dom';
import 'src/css/Login.css';
import { TextInput, } from './components';

interface IProps {
  history: any,
  // Logo: any,

}
interface State {
  username: string,
  password: string,
}

class Login extends React.Component<IProps, State> {
  // public links(event: any) {
  //   // chống reload page
  //   event.preventDefault();

  //   console.log(this.props.history);

  //   // REPLACE xóa trang khi tới trang mới
  //   this.props.history.replace('/home');

  //   // this.props.history.push('/home');// push ko xóa trang khi tới trang mới


  constructor(props: IProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;

    console.log(target.name);
    console.log(value);

    if (name === "username") {
      this.setState({ username: value });
    }
    if (name === "password") {
      this.setState({ password: value });
    }

  }

  handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { username, password } = this.state;
    console.log(username, password);
    if (username === "admin" && password === "admin123") {
      this.props.history.replace('/home');
    } else {
      alert("Sai TK");
    }
  }

  public render() {
    return (
      <div className="wrap">
        <div className="container">
          <div className="form">
            <div className="form-group">
              <div className="form-title">
                <img src={require("src/images/logo.png")} alt="" />
                <p>Please enter your user information.</p>
              </div>
              <TextInput
                placeholder="Username"
                type="text"
                name="username"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event)}
              />
              <TextInput
                placeholder="Password"
                type="password"
                name="password"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event)}
              />
              <div className="checkbox">
                <input className="form-check-input" type="checkbox" />
                <span>Remember me</span>
                <a href="#">Forgot Password?</a>
              </div>
              <input name="" id="" className="btn btn-primary" type="button" value="Login" onClick={this.handleClick} />
            </div>
            <p>Don't have an account?<a href="#">Sign Up</a></p>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
