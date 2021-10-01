import { INSERT_FORM_DATA } from "./type"

export const getInsertFormData = (data) => {
    return{
        type:INSERT_FORM_DATA,
        payload:data
    }
}