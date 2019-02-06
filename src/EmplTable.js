import React, { Component } from 'react';


function add(a,b) {
	var name = 'vinod';
	this.x = function() {
	
	}
}
var obj = new add(1,2); // numbers, strings, boolean - primitive
// { x: function() {} }
var x = 10; // x - reference
var y = x;  // y - reference
y = 20;
console.log(x,y); // 10, 20 // Immutation

// [100,101,102,103]
var obj1 = {
	name: 'sarath'
};
var obj2 = obj1;
obj2.name = 'vinod';
obj2.name = 'sai';  // Mutattion
console.log(obj1.name, obj2.name); // sarath, vinod

// Local Scope - within a function - Controller - $scope
// Global Scope - App access
// app.controller("controll", function($scope){
	// Scope
	// $scope.
	// var scope = {};
//});

const Employee = ({ employee }) => {  
	return (
		<tr>
			<td>{ employee.company }</td>
			<td>{ employee.contact} </td>
			<td>{ employee.country} </td>
		</tr>
	);
}

class EmpTable extends Component {

 constructor() {
 	super();
	this.state = {
 		employees: [
 			{ company: 'Vinod', contact:'Maria Anders', country: 'Germany' },
 			{ company: 'Sarath', contact:'Francisco Chang', country: 'Mexico' },
 			{ company: 'Naveen', contact:'Roland Mendel', country: 'Austria' },
 			{ company: 'Sai', contact:'Helen Bennett', country: 'UK' },
 			{ company: 'Chandra', contact:'Yoshi Tannamuri', country: 'Canada' }
 		]
 	};
 	// Bind just set the contect over a function, later you can invoke the function with the context we set
 }

 
 render() {
	 //const searchInput = this.props.value;
	const { value } = this.props;
	const types = [ 'company', 'contact', 'country' ];
	const employees = this.state.employees.filter((employee)=> {
		const values = types.map((type) => employee[type].toUpperCase());
		// ['VINOD', 'MARIA Anders', 'Germanuy']
		return values.some((eachValue) => eachValue.includes(value.toUpperCase()));
 	});
 	return (<table>
	  <tr>
	    <th>Company</th>
	    <th>Contact</th>
	    <th>Country</th>
	  </tr> 
	  {
	  	employees.map((employee)=> {
	  		return (<Employee key={employee.company} employee={employee}/>)
	  	})
	  }
    </table>);
 }
}

export default EmpTable;