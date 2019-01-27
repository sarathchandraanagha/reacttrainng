import React, { Component } from 'react';
import EmpTable  from './EmplTable';

class Search extends Component {

	constructor() {
		super();
		this.state = {
			companyName: ''
		};
		this.onChange = this.onChange.bind(this);
	}
	
	onChange(e) {
		this.setState({
			companyName: e.target.value
		});
	}

	  render() {
	    return (
	    	<div>
		    	<input type="text" value={this.state.companyName} onChange={this.onChange}/>
		    	<EmpTable companyName={this.state.companyName}/>
	    	</div>
	    )
	  }
}

export default Search;