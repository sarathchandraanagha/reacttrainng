import React, { Component } from 'react';
import EmpTable  from './EmplTable';

class Search extends Component {

	constructor() {
		super();
		this.state = {
			value: ''
		};
		this.onChange = this.onChange.bind(this);
	}

	componentWillMount() {
		console.log("Will Mount...")
	}

	componentDidMount() {
		console.log("Did Mount...")
	}

	componentWillReceiveProps(nextstate) {
		console.log("Component Will recieve props", nextstate)
	}

	componentWillUnmount() {
		console.log("UnMount...")
	}
	
	onChange(attribute, e) {
		this.setState({
			[attribute]: e.target.value
		});
	}

	  render() {
		console.log("Render", this.props);
	    return (
	    	<div>
				<input 
					id="search"
					type="text" 
					placeholder="Search"
					value={this.state.value} 
					onChange={(e)=>this.onChange('value', e)}/>
				<EmpTable 
					value={this.state.value}/>
	    	</div>
	    )
	  }
}

export default Search;