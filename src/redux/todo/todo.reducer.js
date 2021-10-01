import * as type from './todo.type'
const init_state = {
    id: '',
    data:[{id:1,fullName:'mayur'}, {id:2,fullName:'mayur'}]
}

const TodoReducer = (state = init_state, action) => {
    const newState = {...state};
    switch(action.type) {
        
        case type.TODO_INSERT : {
            let data = [...newState.data]
            let addimage= {
                id: action.payload.id,
                fullName: action.payload.fullName,
                image:''
            }
            data.push(addimage)
            newState.data = data
            return newState;
        }
        
        case type.TODO_DELETE: {
            let data = [...newState.data];
            let newData = data.filter((item) => item.id !== action.payload );
            newState.data = newData;
            return newState;
        }

        case type.TODO_UPDATE:{
            newState.id = action.payload
            return newState;
        }

        case type.TODO_EDIT: {
                let data = [...newState.data];
                console.log(action.payload,'edit')
                console.log(data,'dat')
                data[action.payload.index].fullName = action.payload.data;
                console.log(data,'newdata')
                newState.data = data
            return newState;
        }

        case type.TODO_IMAGE:{
            let data = [...newState.data]
            data[action.payload.index].image=action.payload.image
            newState.data = data
            return newState;
        }

        default : return newState
     }
}

export default TodoReducer;