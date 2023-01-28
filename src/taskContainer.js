import './taskContainer.css'
import CheckBox from './checkbox'
import axios from 'axios'
import { useState } from 'react'
const Task = ({ title, desc, done, id ,date}) => {
  
  const [edit, setEdit] = useState(false)
  const [name,setName] = useState(title)
  const [description,setDesc] = useState(desc)
  if (edit) {
    return (
      <>
        <div className="task form"   >
          
          
          <input className='taskname' type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>

          <textarea name="" id="" cols="35" rows="3" value={description} onChange={(e)=>{setDesc(e.target.value)}}></textarea>

          <div className="buttons">
            <div className="button" onClick={()=>{
              setEdit(false)
            }}>
              <h4>cancel</h4>
            </div>

            <div className="button" onClick={async ()=>{
              let json = {
                "name" : name,
                "desc" : description,
                "done" : done
              }
              let results = await axios.put(`http://localhost:5000/${id}`,json)
              if(results.data.succes===false){
                alert(results.data.data)
              }
              setEdit(false)
            }}>
              
              <h4>save</h4>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="task" >
          <CheckBox done={done} id={id} />

          <h2 className="taskName">{title}</h2>

          <h4 className="desc">{desc}</h4>
          <h4>{date}</h4>
          <div className="buttons">
            <div
              className="button"
              onClick={() => {
                setEdit(true)
              }}
            >
              <i class="far fa-edit"></i>
              <h4>edit</h4>
            </div>

            <div
              className="button"
              onClick={() => {
                axios.delete(`http://localhost:5000/delete/${id}`)
              }}
            >
              <i class="fas fa-trash"></i>
              <h4>delete</h4>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Task
