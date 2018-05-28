import React from "react";
import DatePickerDemo from "./component/DatePickerDemo";
import LoginForm from "./component/LoginForm";
import ClassicForm from "./component/ClassicForm";
import CompositForm from "./component/CompositForm";
import TipsDemoForm from "./component/TipsDemoForm";
import ValidateBasicForm from "./component/ValidateBasicForm";
import ValidateForm from "./component/ValidateForm";
import CustomizeValidateForm from "./component/CustomizeValidateForm";
import OpenModalForm from "./component/OpenModalForm";


class Index extends React.Component{
    render(){
        return (
            <div>
                <h2 ><a href="http://ant.design/docs/react/introduce">Ant Design</a></h2>
                <h3>ant design component demo</h3>
                <DatePickerDemo/>
                <h2 style={{margin:'10'}}>Form 表单</h2>
                <div style={{margin:'10',width:600}}>
                    <h3>平行排列表单</h3>
                    <LoginForm/>
                    <h3>典型表单</h3>
                    <ClassicForm/>
                    <h3>表单组合</h3>
                    <CompositForm/>
                    <h3>表单校验提示</h3>
                    <TipsDemoForm/>
                    <h3>基本表单校验</h3>
                    <ValidateBasicForm/>
                    <h3>其它组件表单校验</h3>
                    <ValidateForm/>
                    <h3>自定义表单校验</h3>
                    <CustomizeValidateForm/>
                    <h3>与弹窗Modal配合</h3>
                    <OpenModalForm/>
                </div>

            </div>
        )
    }

}
export default Index;