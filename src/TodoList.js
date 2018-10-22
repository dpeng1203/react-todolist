import React, {Component,Fragment} from 'react'
import './todolist.css'
import TodoItem from './TodoItem'
class TodoList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'dfsfdsf',
            list: []
        }
    }
    render() {
        return(
            <Fragment>
                <div>
                    <input 
                    className= 'input'
                    value = {this.state.inputValue} 
                    onChange = {this.handleInputChange.bind(this)}
                    /> 
                    <button onClick = {this.handleClick.bind(this)} >提交</button>
                </div>
                <ul>
                    {this.state.list.map( (ele,index) => {
                        return(
                            <TodoItem content={ele} index={index} del={this.handDelClick.bind(this)} key= {index}/>
                            // <li key = {index} onClick={this.handDelClick.bind(this,index)}>{ele}</li>  
                        )
                    })}
                    
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    } 
    handleClick() {
        this.setState({
            list: [...this.state.list,this.state.inputValue],
            inputValue: ''
        })
    }
    handDelClick(index) {
        let newList = [...this.state.list]
        newList.splice(index,1)
        this.setState({
            list: newList
        })
    }
}

export default TodoList