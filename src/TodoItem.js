import React, {Component} from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component{
    constructor(props) {
        super(props)
        this.delItem = this.delItem.bind(this)
    }
    render() {
        const { content } = this.props
        return(
            <li onClick={this.delItem}>{content}</li>
        )
    }
    delItem() {
        const {del,index} = this.props
        del(index)
    }
}
TodoItem.propTypes = {
    // You can declare that a prop is a specific JS type. By default, these
    // are all optional.
    content: PropTypes.arrayOf(PropTypes.number,PropTypes.string),
    index: PropTypes.number,
    del: PropTypes.func
}
TodoItem.defaultProps = {
    content: 'hello world'
}
export default TodoItem