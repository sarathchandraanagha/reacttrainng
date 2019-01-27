import React, { Component } from 'react';

// Local Scope - within a function - Controller - $scope
// Global Scope - App access
// app.controller("controll", function($scope){
	// Scope
	// $scope.
	// var scope = {};
//});


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
 	const searchInput = this.props.companyName;
 	const employees = this.state.employees.filter((employee)=> {
 		return employee.company.toUpperCase().includes(searchInput.toUpperCase());
 	});
 	return (<table>
	  <tr>
	    <th>Company</th>
	    <th>Contact</th>
	    <th>Country</th>
	  </tr> 
	  {
	  	employees.map((employee)=> {
	  		return (<tr>
	  				<td>{ employee.company }</td>
	  				<td>{ employee.contact} </td>
	  				<td>{ employee.country} </td>
	  			</tr>)
	  	})
	  }
    </table>);
 }
}

export default EmpTable;