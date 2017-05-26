import React, { Component } from 'react';

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

export default SearchBar;