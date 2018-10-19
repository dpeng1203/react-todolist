import React, {Component} from 'react'
class TodoItem extends Component{
    render() {
        return(
            <li onClick={this.delItem.bind(this)}>{this.props.content}</li>
        )
    }
    delItem() {
        this.props.del(this.props.index)
    }
}
export default TodoItem