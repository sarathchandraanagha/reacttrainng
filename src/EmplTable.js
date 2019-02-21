import React, { Component } from 'react';

var arr = [1,2,3]; // [1,4,9] [2,3,4] 
function sqaureIt(element) {
	return element*element;
}
function addIt(element) {
	return element+1;
}

//var square = arr.map(sqaureIt);
//var addition = arr.map(addIt);
// push, pop, slice, splice, shift, unshift, every, forEach, map, ....
Array.prototype.mapIt = function(fn) {
	var endResult = [];
	for(var i=0;i<this.length;i++) {
		var result = fn(arr[i]);
		endResult.push(result);
	}
	return endResult;
}

// Array - map, filter, forEach, every, some etc... ES6
// arr.map(function(element){}), arr.forEach(function(element){})

var square = arr.mapIt(sqaureIt);
var addition = arr.mapIt(addIt);
/*var square = [];
for(var i=0;i<arr.length;i++) {
	var result = sqaureIt(arr[i]);
	square.push(result);
}
var addition = [];
for(var i=0;i<arr.length;i++) {
	var result = addIt(arr[i]);
	addition.push(result);
}*/
console.log(square);
console.log(addition);

// Local Scope - within a function - Controller - $scope
// Global Scope - App access
// app.controller("controll", function($scope){
	// Scope
	// $scope.
	// var scope = {};
//});


var a = function() {
	return function b() {

	}
}
var b = a();
console.log(b);

var a = () => {
	return function b() {

	} 
}

var c = () => () => {

}

console.log(c())
	

const Hoc = (Wrapper) => ({ employee }) => {
	const icon = employee.country === 'Canada' ? 'cross' : 'tick';
	return (<Wrapper employee={employee} icon={icon}/>)
}

const Employee = ({ employee, icon }) => {  
	return (
		<tr>
			<td>{ employee.company }</td> 
			<td>{ employee.contact} </td>
			<td>{ employee.country} </td>
			<td><button>{ icon }</button></td>
		</tr>
	);
}

class EmpTable extends Component {

 constructor() {
 	super();
	this.state = {
 		employees: [
 			{ company: 'Vinod', contact:'Maria Anders', country: 'Germany' },
 			{ company: 'Sarath', contact:'Francisco Chang', country: 'Canada' },
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
		<th>Action</th>
	  </tr> 
	  {
	  	employees.map((employee)=> {
			const ResultComponent = Hoc(Employee);
	  		return (<ResultComponent key={employee.company} employee={employee}/>)
	  	})
	  }
    </table>);
 }
}

export default EmpTable;