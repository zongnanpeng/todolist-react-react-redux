import React from 'react'
import {  connect} from 'react-redux'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
import {  putTodoCreator, postTodoCreator, deleteTodoCreator} from './Store/actionCreators'

function Todolist(props) {
  const {todo,list,putTodo,postTodo,deleteTodo} = props;
  return (
    <div
      style={{
        width:'500px',
        margin:'10px auto'
      }}
    >
      <section>
        <Input
        style={{
          width:'350px',
          marginRight:'10px',
          marginBottom:'10px'
        }}
          value={todo}
          onChange={putTodo}
        />
        <Button type='primary' onClick={postTodo}>
          添加
        </Button>
      </section>
      <section>
        <List
        style={{
          width:'350px'
        }}
          bordered
          dataSource={list}
          renderItem={(item,index)=>{
            return(
              <List.Item onClick={()=>{
                deleteTodo(index)
              }}>
                {item}
              </List.Item>
            )
          }}
        />
      </section>
    </div>
  )
}

const stateToProps = (state) => {
    const {todo,list} = state;
    return {
      todo,list
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    putTodo(e){
      let value = e.target.value;
      const action = putTodoCreator(value);
      dispatch(action);
    },
    postTodo(){
      const action = postTodoCreator();
      dispatch(action);
    },
    deleteTodo(value){
      const action = deleteTodoCreator(value);
      dispatch(action);
    }
  }
}


export default connect(stateToProps,mapDispatchToProps)(Todolist)