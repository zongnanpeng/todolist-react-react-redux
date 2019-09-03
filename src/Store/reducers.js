import {  GET_LIST, PUT_TODO, POST_TOOD, DELETE_TODO} from './actionTypes'

const defaultState = {
    todo:'',
    list:[]
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case GET_LIST:
            newState.list = action.value;
            break;
        case PUT_TODO:
            newState.todo = action.value;
            break;
        case POST_TOOD:
            newState.list.push(newState.todo)
            newState.todo = ''
            break;
        case DELETE_TODO:
            newState.list.splice(action.value,1)
            break;
        default:
            console.log(`action type ${action.type} is not found`);
            break;
    }
  return newState;  
}
