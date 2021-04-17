import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state= {term: ''}
		this.onInputChange= this.onInputChange.bind(this)
		this.onFormSubmit = this.onFormSubmit.bind(this)
	}
	onInputChange(event){
		
		this.setState({term: event.target.value});
	}
	onFormSubmit (event){
		event.preventDefault();
		//we need to go and fetch weather data
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''})
	}
	render(){
		return (
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<input 
				     type="text" 
					 placeholder="plz selected ur favourit forecast five city"
					 className="form-control"
					 value={this.state.term}
					 onChange={this.onInputChange}
				     />
				<span className="input-group-btn">
					<button className="btn btn-primary" type="submit">Submit</button>
				</span>
			</form>
		)
	}
} 

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather},dispatch);
}
export default connect (null,mapDispatchToProps)(SearchBar);
