import React from "react";
import DatePickerDemo from "./component/DatePickerDemo";
import LoginForm from "./component/LoginForm";

class Index extends React.Component{
    render(){
        return (
            <div>
                <h2 ><a href="http://ant.design/docs/react/introduce">Ant Design</a></h2>
                <DatePickerDemo/>
                <LoginForm/>
            </div>
        )
    }

}
export default Index;