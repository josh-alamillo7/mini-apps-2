import React from 'react';
import reactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Route, Link} from 'react-router-dom';
import PageOne from './components/pageone.jsx';
import PageTwo from './components/pagetwo.jsx';
import PageThree from './components/pagethree.jsx';
import Confirmation from './components/confirmation.jsx';
import axiosHelpers from './lib/axioshelpers'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: 'checkout',
      name: null,
      summaryData: null,
    }
    this.toggleLinkClick = this.toggleLinkClick.bind(this)
    this.fetchConfirmationData = this.fetchConfirmationData.bind(this)
  }

  fetchConfirmationData(name) {
    axiosHelpers.get(name, (response) => {
      this.setState({ summaryData : response.data })
    })
  }

  toggleLinkClick(currentPage, name) {
    const nextPage = {
      'checkout': 'page1',
      'page1': 'page2',
      'page2': 'page3',
      'page3': 'confirmation',
      'confirmation': 'checkout'
    }
    this.setState({show: nextPage[this.state.show], name: name})
  }

  render() {
    if (this.state.show === 'checkout') {
      return (
      <div>
        <button onClick={() => this.toggleLinkClick('checkout', null)}>Checkout</button> 
      </div>
      )
    } else if (this.state.show === 'page1') {
      return (
        <PageOne toggleLinkClick={this.toggleLinkClick}/>
      )
    } else if (this.state.show === 'page2') {
      return (
        <PageTwo toggleLinkClick={this.toggleLinkClick} name={this.state.name}/>
      )
    } else if (this.state.show === 'page3') {
      return (
        <PageThree toggleLinkClick={this.toggleLinkClick} name={this.state.name} fetchConfirmationData={this.fetchConfirmationData}/>
    )} else if (this.state.show === 'confirmation') {
      return (
        <Confirmation name={this.state.name} summaryData={this.state.summaryData} toggleLinkClick={this.toggleLinkClick}/>
      )
    }
  }
}

reactDOM.render(<App />, document.getElementById('app'))