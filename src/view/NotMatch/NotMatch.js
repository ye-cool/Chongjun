import React from 'react';
import {Row} from 'antd';
import './NotMatch.css';

class NotMatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

          };
    }
    render() {
        return (
            <Row className="not-match" justify="center">
                页面飘到外太空了~~~
            </Row>
        );
    }
}

export default NotMatch;