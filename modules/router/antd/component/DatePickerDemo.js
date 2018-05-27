import React from 'react';
import {DatePicker, message} from 'antd';

class DatePickerDemoo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ""
        }
    }

    handleChange(date) {
        message.info("您选择的日期是" + date.toString());
        console.log('Selected Date: ' + (date ? date.toString() : ''));
        this.setState({date: date.toString()})
    }

    render() {
        return (
            <div style={{width: 400, height: 200, margin: '100px auto'}}>
                <DatePicker onChange={value => this.handleChange(value)}/>
                <div>
                    <p>Date: {this.state.date}</p>
                </div>
            </div>
        );
    }
}
export default DatePickerDemoo;