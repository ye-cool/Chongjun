import React from 'react';
import './RefundProcessing.css';
import {Row} from 'antd';

class RefundProcessing extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <Row className="home-wrap" justify="center">
                欢迎来到后台管理系统！！！
            </Row>
        );
    }
}

export default RefundProcessing;