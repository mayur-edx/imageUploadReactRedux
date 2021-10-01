import { combineReducers } from "redux";
import FormImageReducer from "./formImage/reducer";
import TodoReducer from "./todo/todo.reducer";

const rootReducer = combineReducers({
    todoList : TodoReducer,
    formData : FormImageReducer
})

export default rootReducer;