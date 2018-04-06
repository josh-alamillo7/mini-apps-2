import React from 'react';
import axiosHelpers from '../lib/axiosHelpers';

class FormThree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      number: '',
      expdate: '',
      cvv: '',
      billzip: '',
    }
    this.toggleLinkClick = this.props.toggleLinkClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormThreeSubmit = this.handleFormThreeSubmit.bind(this)
    this.fetchConfirmationData = this.props.fetchConfirmationData.bind(this)
  }

  handleInputChange(e) {
    const field = e.target.name
    this.setState({[field]: e.target.value})
  }

  handleFormThreeSubmit(e) {
    e.preventDefault()
    axiosHelpers.post('creditcards', this.state, (err) => {
      if (err) {
        throw err
      } else {
        this.toggleLinkClick('page3', this.state.name)
        this.fetchConfirmationData(this.state.name)
      }
    })
  }

  render() {
    return (<form onSubmit={this.handleFormThreeSubmit}>

      <div>
      <label>
        Number:
        <input type="text" name="number" value={this.state.value} onChange={this.handleInputChange} />
      </label>
      </div>
      <div>
      <label>
        Expiration Date:
        <input type="text" name="expdate" value={this.state.expdate} onChange={this.handleInputChange}/>
      </label>
      </div>
      <div>
      <label>
        CVV:
        <input type="text" name="cvv" value={this.state.cvv} onChange={this.handleInputChange}/>
      </label>
      </div>
      <div>
      <label>
        Billing Zip Code:
        <input type="text" name="billzip" value={this.state.value} onChange={this.handleInputChange}/>
      </label>
      </div>

      <input type="submit" value="Submit"/>
    </form>)
  }
}

module.exports = FormThree