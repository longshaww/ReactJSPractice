import React, { Component } from "react";

class TodoList extends Component {
	render() {
		return (
			<div className="TodoList">
				<table>
					<tr>
						<th>Name</th>
						<th>Age</th>
					</tr>
					<tr>
						<td>{this.props.person.name}</td>
						<td>{this.props.person.age}</td>
					</tr>
				</table>
			</div>
		);
	}
}

export default TodoList;
