import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo : {
            name: "Sunny",
            location: "hyd"
        }
    };
    console.log(this.props.name + " constructor called");
  }

  async componentDidMount() {
    console.log(this.props.name + " component did mount called");
    //APi call
    const data = await fetch("https://api.github.com/users/sunsingh162")
    const json = await data.json()
    // console.log(json);
    this.setState({
        userInfo: json
    })
  }

  componentDidUpdate(){
    console.log(this.props.name + ' component Did update');
  }

  componentWillUnmount(){
    console.log(this.props.name + ' component will unmount');
  }
  render() {
    console.log(this.props.name + " render called");
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact: sunny@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
