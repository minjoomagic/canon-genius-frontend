import React from "react";

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
								<button>Call</button>
								<button>Chat</button>
							</span>
						</ul>
					</div>
        )
    }
}

export default AdminDash;