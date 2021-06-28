import React from 'react';
import './index.css';
import Dropdown from "react-dropdown"
import 'react-dropdown/style.css';

class ComponentCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/product-category")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const options = items.map((i) => { return { 'label': i.name, value: i.id } });
      return (
        <Dropdown options={options} onChange={this.props.componentCategorySelect} placeholder="Select an option" />
      );
    }
  }
}

export default ComponentCategory;