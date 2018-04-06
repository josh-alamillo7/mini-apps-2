import React from 'react';
import axiosHelpers from '../lib/axiosHelpers'

class FormTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      lineOne: null,
      lineTwo: null,
      city: null,
      state: null,
      zipcode: null
    }
    this.toggleLinkClick = this.props.toggleLinkClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormTwoSubmit = this.handleFormTwoSubmit.bind(this)
  }

  handleInputChange(e) {
    const field = e.target.name
    this.setState({[field]: e.target.value})
  }

  handleFormTwoSubmit(e) {
    e.preventDefault()
    axiosHelpers.post('addresses', this.state, (err) => {
      if (err) {
        throw err
      } else {
        this.toggleLinkClick('page2', this.state.name)
      }
    })
  }

  render() {
    return (<form onSubmit={this.handleFormTwoSubmit}>

      <div>
      <label>
        Address:
        <input type="text" name="lineOne" value={this.state.value} onChange={this.handleInputChange} />
      </label>
      </div>
      <div>
      <label>
        <input type="text" name="lineTwo" value={this.state.value} onChange={this.handleInputChange}/>
      </label>
      </div>
      <div>
      <label>
        City:
        <input type="text" name="city" value={this.state.value} onChange={this.handleInputChange}/>
      </label>
      </div>
      <div>
      <label>
        State:
        <input type="text" name="state" value={this.state.value} onChange={this.handleInputChange}/>
      </label>
      </div>
      <div>
      <label>
        Zip Code:
        <input type="text" name="zipcode" value={this.state.value} onChange={this.handleInputChange}/>
      </label>
      </div>

      <input type="submit" value="Submit"/>
    </form>)
  }
}

module.exports = FormTwo