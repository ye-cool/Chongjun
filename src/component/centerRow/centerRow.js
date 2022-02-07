import React from "react";
import { Row } from "antd";

class CenterRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Row justify="center" align="middle">
        {this.props.children}
    </Row>;
  }
}
export default CenterRow;
