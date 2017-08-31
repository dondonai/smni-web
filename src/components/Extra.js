import React, { Component } from 'react';
import $ from 'jquery';

class Extra extends Component {
  constructor(props) {
    super(props);
    function test() {
      console.log("a test for jquery");
    }
    return test();
  }
  render() {
    return (
      <div className="showcase__item extra">
      </div>
    );
  }
}

export default Extra;