import React from "react";
// import { Button } from "react-bootstrap";
import { Card, Icon, Image, Button } from 'semantic-ui-react';

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
				<Card.Group>
					<Card style={{ marginLeft: '2em' }}>
						<Image src='https://i.imgur.com/UIB6yuO.png' wrapped ui={false} />
						<Card.Content>
							<Card.Header>Ethan</Card.Header>
							<Card.Meta>
								<span className='date'>Joined in 2015</span>
							</Card.Meta>
							<Card.Description>
								Canon Genius
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<Button>Book</Button>
							<Button>Info</Button>							
						</Card.Content>
  				</Card>
							<Card style={{ marginLeft: '2em' }}>
							<Image src='https://i.imgur.com/rh3jQjo.png' wrapped ui={false} />
							<Card.Content>
								<Card.Header>Robert</Card.Header>
								<Card.Meta>
									<span className='date'>Joined in 2017</span>
								</Card.Meta>
								<Card.Description>
									Canon Genius
								</Card.Description>
							</Card.Content>
							<Card.Content extra>
								<Button>Book</Button>
								<Button>Info</Button>							
							</Card.Content>
						</Card>
				</Card.Group>
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
		
		       // <div>
						// 	<h3>My Dashboard</h3>
						// 	<h4>Book a Lesson</h4>
						// 	<div>
						// 		<div id="monday-div">
						// 			<span id="monday-span">Monday 9:00am</span>
						// 			<button onClick={this.mondayHandler}>Book</button>
						// 			<Button className="mr-2" variant="primary" href="/signup">
            //   			Book
            // 			</Button>
						// 		</div>
						// 		<div>
						// 			<span>Tuesday 11:30am</span>
						// 			<button onClick={this.bookHandler}>Book</button>
						// 		</div>
						// 		<div>
						// 			<span>Wednesday 2:00pm</span>
						// 			<button onClick={this.bookHandler}>Book</button>
						// 		</div>
						// 	</div>
						// 	<br></br>
						// 		<h3>My Appointments</h3>
						// 		<ul>
						// 			<li>Thursday 3:45pm</li>
						// 			<li>{this.state.clickElement}</li>
						// 		</ul>
	
            // </div>