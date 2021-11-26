import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

class App extends Component {
	constructor() {
		super();
		this.TodoList = [
			{ name: "Long", age: 20 },
			{ name: "Trang", age: 22 },
		];
	}
	render() {
		return (
			<div className="TodoList">
				<table>
					<tr>
						<th>Name</th>
						<th>Age</th>
					</tr>
					{this.TodoList.map((obj) => {
						return (
							<tr>
								<td>{obj.name}</td>
								<td>{obj.age}</td>
							</tr>
						);
					})}
				</table>
			</div>
			// <TodoList
			// 	key={index}
			// 	person={{ name: obj.name, age: obj.age }}
			// />
		);
	}
}

export default App;
