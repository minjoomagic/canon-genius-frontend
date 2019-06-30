import React from "react";
import { Button } from "semantic-ui-react";

class AdminDash extends React.Component {
  render() {
    return (
      <div>
        <h3>Admin Dashboard</h3>
        <h5>My Appointments</h5>
        <ul>
          <li>Thursday 3:45pm</li>
          <li>Monday 9:00am</li>
          <span>
            <Button primary>Call</Button>
            <Button secondary>Chat</Button>
          </span>
        </ul>
      </div>
    );
  }
}

export default AdminDash;
