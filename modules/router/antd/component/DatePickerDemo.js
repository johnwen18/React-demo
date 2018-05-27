import React from "react";
import DatePicker from 'antd/lib/date-picker';


class DatePickerDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }

    handleChange(date) {
        console.log('Selected Date: ' + (date ? date.toString() : ''));
        this.setState({date});
    }

    render() {
        let styleObj = {width: 400, margin: '100 auto'};
        return (
            <div style={styleObj}>
                <DatePicker onChange={value => this.handleChange(value)}/>
                <div style={{marginTop: 20}}>Date: {this.state.date && this.state.date.toString()}</div>
            </div>
        );
    }
}

export default DatePickerDemo;