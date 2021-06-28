import React from 'react';
import './index.css';
import Dropdown from "react-dropdown"
import 'react-dropdown/style.css';

class Company extends React.Component {
  render() {
    return (
      <Dropdown options={this.props.companies} onChange={this.props.companySelected} value={this.props.companies[0]} placeholder="Select an option" />
    )
  }
}

export default Company;