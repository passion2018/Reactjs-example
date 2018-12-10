import * as React from 'react';
import 'src/css/User.css';
import { Layout } from 'src/components';

interface Props {

}

interface State {
  list: Array<any>,

  item: any,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
}

class User extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      list: [],
      item: null,
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;

    const state = this.state;
    state[name] = value;

    this.setState(state);

    // console.log(name);
    // console.log(value);

    // if (name === "namee") {
    //   this.setState({ namee: value });
    // }
    // if (name === "username") {
    //   this.setState({ username: value });
    // }
    // if (name === "email") {
    //   this.setState({ email: value });
    // }
    // if (name === "phone") {
    //   this.setState({ phone: value });
    // }
    // if (name === "website") {
    //   this.setState({ website: value });
    // }

  }

  handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // const { name, username, email, phone, website } = this.state;
    this.loadUsers();
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    this.loadUsers();
  }

  private loadUsers() {
    let url = 'https://jsonplaceholder.typicode.com/users';

    const fields = ['username', 'email', 'phone', 'website', 'name'];

    const params = [];

    for (let i in this.state) {
      if (fields.indexOf(i) > -1 && this.state[i]) {
        const param = i + '=' + this.state[i];
        params.push(param);
      }
    }
    url = url + '?' + (params.join('&'));

    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          list: json,
        });
        console.log(json);
      });
  }

  render() {
    console.log('render', this.state.list);
    return (
      <Layout>
        <div className="user">
          <table className="table table-bordered">
            <thead className="thead-inverse">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row"></td>
                <td><input className="form-control" type="text" name="name" onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event)} /></td>
                <td><input className="form-control" type="text" name="username" onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event)} /></td>
                <td><input className="form-control" type="text" name="email" onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event)} /></td>
                <td><input className="form-control" type="text" name="phone" onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event)} /></td>
                <td><input className="form-control" type="text" name="website" onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event)} /></td>
                <td><input type="button" value="Submit" onClick={this.handleClick} onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleChange(event)} /></td>
              </tr>
              {
                this.state.list.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td scope="row">{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.website}</td>
                      <td>{item.address.street + item.address.suite}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </Layout>
    );
  }
}
export default User;