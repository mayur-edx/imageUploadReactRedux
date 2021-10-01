import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getEdittodo, getImage } from '../../redux/todo/todo.action'
import notFound from './../form/notdounf.jpg'

const Todolist = ({ data, index, handleDelete, handleEdit }) => {
    const [update, setupdate] = useState(false)
    const [value, setvalue] = useState('')
    const [error, seterror] = useState('')
    const dispatch = useDispatch()
    const handleUpdate = () => {
        setupdate(!update)
    }

    const handleFullnameUpdate = () => {
        let data = {
            index: index,
            data: value
        }
        dispatch(getEdittodo(data))
        handleUpdate()
    }

    const onHandleEdit = () => {
        handleEdit(index)
        setvalue(data.fullName)
        handleUpdate()
    }

    const handleImage = (e) =>{ 
        console.log(e.target.files,'event')

        const reader = new FileReader();
        if(e.target.files.length > 0){
            if(e.target.files[0].size <  2000000 ){
                console.log('less then 2 mb')
            }else{
                console.log('ln 2 mb')

            }
        if(e.target.files[0].type ==="image/png" ||e.target.files[0].type ==="image/svg+xml" ){
            reader.onload = function(e){
                // console.log(e.target.result,'image')
                let data = {
                    index : index,
                    image: e.target.result
                }
                dispatch(getImage(data))
            }
            reader.readAsDataURL(e.target.files[0])
            seterror(null)
        
        }else{
            seterror('Accept only .png .jpg file please try agian ....')
        }}
    }

    return (
        <tr key={data.id}>
            <td>{data.id}</td>
            <td>{update ? <input type="text" value={value} onChange={(e) => setvalue(e.target.value)} /> : data.fullName}</td>
            <td>
                <input type="file"  onChange={handleImage} id={`imageinput${index}`} width="50" height="50" style={{display:'none'}}/>
                <img alt="profile pic" onClick={()=> document.getElementById(`imageinput${index}`).click()} src={data.image ? data.image : notFound} width="50" height="50" style={{borderRadius:'50%'}} />                        
                <span style={{color:'red'}}>{error ? error : null}</span>
            </td>
            <td>
                {update ? <button onClick={handleFullnameUpdate}>Update</button> :
                    <button onClick={onHandleEdit}>Edit</button>
                }
            </td>
            <td><button onClick={() => handleDelete(data.id)}>Delete</button></td>
        </tr>
    )
}

export default Todolist
