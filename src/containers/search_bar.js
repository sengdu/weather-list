import React,{Component} from 'react';

export default class SearchBar extends Component{
	render(){
		return (
			<div className="input-group">
				<input type="text"/>
				<span className="input-group-btn">
					<button className="btn btn-primary" type="submit">Submit</button>
				</span>
			</div>
		)
	}
} 

