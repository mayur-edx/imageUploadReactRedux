import { INSERT_FORM_DATA } from "./type"

const init_state = {
    data:[]
}

const FormImageReducer = (state = init_state, action) => {
    let newState = {...state}
    let {type, payload}  = action
    switch(type) {
        case  INSERT_FORM_DATA:{
            let insertData = [...newState.data]
            insertData.push(payload)
            newState.data = insertData
            return newState;
        }
    default : return newState;
    }
}

export default FormImageReducer;
