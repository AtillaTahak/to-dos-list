import React from 'react';
import styles from "./TodoItem.module.css"


class TodoItem extends React.Component {
  state = {
    editing:false,
  }
  componentWillUnmount() {
    console.log("Cleaning up...")
  }
  render(){
    const {id, title } = this.props.todo;

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    const handleEditing = () => {
      this.setState({
        editing:true,
      })
    }
    const handleUpdateDone =(event)=>{
      if (event.key==="Enter") {
        this.setState({editing:false})
      }
    }
   
    let viewMode ={}
    let editMode ={}
    if(this.state.editing){
      viewMode.display = "none"
    }else{
      editMode.display="none"
    }
    return (
      <li className={styles.item}>
        <div onDoubleClick={handleEditing}>....</div>
        <input 
        type="text" 
        style={editMode} 
        className={styles.textInput}
        value={title}
        onChange= {e=>{
         this.props.setUpdate(e.target.value,id);
        }}
        onKeyDown={handleUpdateDone}
        />
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
        <span style={this.props.todo.completed ? completedStyle : null}>
          {this.props.todo.title}
        </span>
      </li>
    );

  }

}
export default TodoItem;
