import React from "react";

class UserDash extends React.Component {

	state = {
		clickElement: ""
	}
	mondayHandler = () => {
		const dateDiv = document.querySelector('#monday-div');
		const dateSpan = document.querySelector('#monday-span').innerText
		console.log(dateSpan)
		dateDiv.remove();
		this.setState({clickElement: dateSpan});
	}

    render() {
        return (
            <div>
							<h3>My Dashboard</h3>
							<div>Book a lesson
								<div id="monday-div">
									<span id="monday-span">Monday 9:00am</span>
									<button onClick={this.mondayHandler}>Book</button>
								</div>
								<div>
									<span>Tuesday 11:30am</span>
									<button onClick={this.bookHandler}>Book</button>
								</div>
								<div>
									<span>Wednesday 2:00pm</span>
									<button onClick={this.bookHandler}>Book</button>
								</div>
							</div>
							<br></br>

								<ul>My Appointments
									<li>Thursday 3:45pm</li>
									<li>{this.state.clickElement}</li>
								</ul>
	
            </div>
        )
    }
}

export default UserDash;

		// fetch('http://localhost:3000/appointment', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({
		// 		customer_id: 1,
		// 		instructor_id: 1,
				
		// 	})
    // })//end of fetch 