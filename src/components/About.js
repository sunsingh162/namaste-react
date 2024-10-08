import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent Component did mount");
  }

  componentDidUpdate(){
    console.log('Parent Component Did update');
  }

  componentWillUnmount() {
    console.log("Parent Component will unmount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>This is About Page</h1>
        <div>
          <UserContext.Consumer>
            {({loggedInUser}) => <h2 className="text-lg font-bold">{loggedInUser}</h2>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Child1"} location={"location1"} />
        <UserClass name={"Child2"} location={"location2"} />
        <UserClass name={"Child3"} location={"location3"} />
      </div>
    );
  }
}

export default About;
