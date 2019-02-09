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

Array.prototype.mapIt = function(fn) {
	var endResult = [];
	for(var i=0;i<this.length;i++) {
		var result = fn(arr[i]);
		endResult.push(result);
	}
	return endResult;
}

var square = arr.mapIt(sqaureIt);
var addition = arr.mapIt(addIt);
/*for(var i=0;i<arr.length;i++) {
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