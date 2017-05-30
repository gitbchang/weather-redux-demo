import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }
  
  onInputChange = (e) => {
    this.setState({term: e.target.value})
  }

  onFormSubmit = (e) => {
    e.preventDefault();  

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.cityInputForm.reset();
  }

  render() {
    return (
      <div>
        <form className="input-group" ref={(input) => this.cityInputForm = input} onSubmit={this.onFormSubmit}>
          <input 
            type="text" 
            placeholder="Get a five-day forecast in your favorite cities"
            value={this.state.term}
            onChange={this.onInputChange}
            className="form-control"
             />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);