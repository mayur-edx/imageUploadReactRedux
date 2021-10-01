import  * as type from './todo.type'

export const getInsertTodo = (data) => {
    return {
        type:type.TODO_INSERT,
        payload : data
    }
}

export const getUpdateTodo = (data) => {
    return {
        type: type.TODO_UPDATE,
        payload: data
    }
}

export const getDeleteTodo = (id) => {
    return {
        type: type.TODO_DELETE,
        payload: id
    }
}

export const getEdittodo = (data)  => {
    return {
        type: type.TODO_EDIT,
        payload: data
    }
}

export const getImage = (data) => {
    return {
        type: type.TODO_IMAGE,
        payload: data
    }
}