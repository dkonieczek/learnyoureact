import React from 'react';
import PropTypes from 'prop-types';


export default class TodoBox extends React.Component {
    render() {

        return <div className="todoBox">
            <h1>Todos</h1>
            <TodoList data={this.props.data} />
            <TodoForm />
        </div>
    }
}

class TodoList extends React.Component {
    render() {
        var todo = this.props.data.map(function(obj){
            return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>
        });
        return (
            <div className="todoList">
                <table style={style.outerTable}>
                    <tbody>
                        {todo}
                    </tbody>
                </table>
            </div>
        );
    }
}

TodoList.propTypes = {
    title: React.PropTypes.string
}

class Todo extends React.Component {
    // Write code here
    constructor(props) {
        super(props);
        this.state = {checked: false};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({checked: e.target.checked});
    }
    render() {
        return (
            <tr>
                <td style={style.tableContent}>
                    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
                </td>
                <td style={style.tableContent}>{this.props.title}</td>
                <td style={style.tableContent}>{this.props.children}</td>
            </tr>
        );
    }

}

class TodoForm extends React.Component {
    // Omitted
    render() {
        return (
            <div className="todoForm">
                I am a TodoForm.
                </div>
        );
    }
}

let style = {
    tableContent: {
        border: '1px solid black'
    },
    outerTable: {
        border: '2px solid black'
    }
};