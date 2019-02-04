import React, { Component } from 'react';
import EmpTable  from './EmplTable';

class Search extends Component {

	constructor() {
		super();
		this.state = {
			type: '',
			value: ''
		};
		this.onChange = this.onChange.bind(this);
	}
	
	onChange(attribute, e) {
		this.setState({
			[attribute]: e.target.value
		});
	}

	  render() {
	    return (
	    	<div>
				<select value={this.state.type} onChange={(e)=>this.onChange('type', e)}>
				    <option> </option>
					<option> company </option>
					<option> contact </option>
					<option> country </option>
				</select>
				<input type="text" 
					value={this.state.value} 
					onChange={(e)=>this.onChange('value', e)}/>
				<EmpTable 
					value={this.state.value}/>
	    	</div>
	    )
	  }
}

export default Search;