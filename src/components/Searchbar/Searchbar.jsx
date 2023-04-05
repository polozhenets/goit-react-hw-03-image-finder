import { Component } from 'react';
import PropTypes from 'prop-types';
class Searchbar extends Component {
  state = {
    query: '',
  };

  componentDidUpdate(prev) {
    if (prev.query === this.state.query) {
      return;
    }
  }

  inputHandler = e => {
    e.preventDefault();
    this.setState({ query: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    if (!this.state.query) return;
    this.props.onSearch(this.state.query);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    return (
      <header className="Searchbar" onSubmit={this.submitHandler}>
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            value={this.state.query}
            onChange={this.inputHandler}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};


export default Searchbar;
