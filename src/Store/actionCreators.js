import {  GET_LIST, PUT_TODO, POST_TOOD, DELETE_TODO} from './actionTypes'

export const getListCreator = (value) => {
    return {
        type:GET_LIST,
        value
    }
    
}

export const putTodoCreator = (value) => {
    return {
        type:PUT_TODO,
        value
    }
    
}
export const postTodoCreator = () => {
    return {
        type:POST_TOOD,
    }
    
}
export const deleteTodoCreator = (value) => {
    return {
        type:DELETE_TODO,
        value
    }
    
}
