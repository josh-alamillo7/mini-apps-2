import React from 'react';
import axiosHelpers from '../lib/axiosHelpers'
// import Form from 'react-router-form'

class FormOne extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      email: ''
      }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormOneSubmit = this.handleFormOneSubmit.bind(this)
    this.toggleLinkClick = this.props.toggleLinkClick.bind(this)
  }

  handleInputChange(e) {
    const field = e.target.name
    this.setState({[field]: e.target.value})
  }

  handleFormOneSubmit(e) {
    e.preventDefault()
    axiosHelpers.post('users', this.state, (err) => {
      if (err) {
        throw err
      } else {
        this.toggleLinkClick('page1', this.state.name)
      }
    })
  }

  render() {
    return (<form onSubmit={this.handleFormOneSubmit}>
      <div>
      <label>
        Name:
        <input type="text" name="name" value={this.state.value} onChange={this.handleInputChange} />
      </label>
      </div>
      <div>
      <label>
        Password:
        <input type="text" name="password" value={this.state.value} onChange={this.handleInputChange}/>
      </label>
      </div>
      <div>
      <label>
        Email
        <input type="text" name="email" value={this.state.value} onChange={this.handleInputChange}/>
      </label>
      </div>
      <input type="submit" value="Submit"/>
    </form>)
  }

}

export default FormOne