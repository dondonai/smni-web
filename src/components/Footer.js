import React, { Component } from "react";
import { Row, Column } from "react-foundation";

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <Row className="display">
          <Column small={12}>
            <div className="footer__creds">Copyright &copy; 2017 &middot; Sonshine Media Network International &middot; All rights reserved.</div>
          </Column>
        </Row>
      </footer>
    );
  }
}

export default Footer;
