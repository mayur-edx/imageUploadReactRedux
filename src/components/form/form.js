import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { getInsertFormData } from '../../redux/formImage/action';
import NotFoundImage from './notdounf.jpg'
import './form.css'
const FormImage = () => {
    const dispatch = useDispatch()
    const [value, setvalue] = useState({
        image: '',
        name:'',
        date:new Date()
    })
    

    const handleSubmit =() =>{
        dispatch(getInsertFormData(value))
    }

    return (
        <div>
            <div className="form-image">
                <input id="file_input" type="file" style={{display: "none"}} onChange={(e) => {
                    let reader = new FileReader();
                    reader.onloadend = function(e){
                        setvalue({
                            ...value,
                            image: e.target.result
                        })
                    }
                    reader.readAsDataURL(e.target.files[0])
                }} />
                <button onClick={() => document.getElementById("file_input").click()}>Upload file</button>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={(e) => setvalue({...value, name:e.target.value })} value={value.name} />
                <DatePicker selected={value.date} onChange={(date) => setvalue({...value, date: date}) }/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <img width="100" height="100" src={value.image? value.image:NotFoundImage} alt="profile pic" />


        </div>
    )
}

export default FormImage
