import React from "react";

class FormDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            password: null,
            isGoing: true,
            numberOfGuests: 2,
            personalInfo: null,
            vocation: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert("you submit a form, see the console for details...");
        console.log("form input below:");
        console.log("name:" + this.state.name);
        console.log("password:" + this.state.password);
        console.log("isGoing:" + this.state.isGoing);
        console.log("numberOfGuests:" + this.state.numberOfGuests);
        console.log("personalInfo:" + this.state.personalInfo);
        console.log("vocation:" + this.state.vocation);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            name:
                            <input name="name"
                                   type="text"
                                   value={this.state.name}
                                   onChange={this.handleInputChange}/>
                        </label>
                        <br />
                        <label>
                            password:
                            <input name="password"
                                   type="password"
                                   value={this.state.password}
                                   onChange={this.handleInputChange}/>
                        </label>
                        <br />
                        <label>
                            Is going:
                            <input name="isGoing" type="checkbox"
                                   checked={this.state.isGoing}
                                   onChange={this.handleInputChange}/>
                        </label>
                        <br/>
                        <label>
                            Number of guests:
                            <input name="numberOfGuests"
                                   type="number"
                                   value={this.state.numberOfGuests}
                                   onChange={this.handleInputChange}/>
                        </label>
                        <br />
                        <label>
                            personal info:
                            <textarea value={this.state.personalInfo}
                                      onChange={this.handleInputChange}/>
                        </label>
                        <br />
                        <label>
                            vocation
                            <select value={this.state.vocation}
                                    onChange={this.handleInputChange}>
                                <option value="0">EE</option>
                                <option value="1">Soft Engineer</option>
                                <option value="2">Teacher</option>
                                <option value="3">Mango</option>
                            </select>
                        </label>
                    </div>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default FormDemo;