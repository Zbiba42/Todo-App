import './TasksList.css'
import Task from './taskContainer'
import axios from 'axios'
import { useEffect, useState } from 'react'

const TasksList = () => {
  const [tasks, setTasks] = useState([])
  const getTaks = async () => {
    const { data } = await axios.get('http://localhost:5000/')
    setTasks(data.data)
  }
  useEffect(() => {
    getTaks()
  }, [tasks])
  const [adding, setAdding] = useState(false)
  const [name, setName] = useState('')
  const [description, setDesc] = useState('')
  
  useEffect(() => {
    
    if (adding === true) {
      document.querySelector('.add').style.height = '150px'
    }else if(adding === false){
      document.querySelector('.add').style.height = '0px'
        
    }
  },[adding])
  
  return (
    <>
      <div className="list">
        <h4 onClick={()=> setAdding(true)}>+ Add Task</h4>
        <div className="task form add" >
            <h4>Add a new task :</h4>
          <input
            className='addtxt taskname'
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            placeholder="Task Name here ..."
          />
          <textarea 
            className='addtxt'
            cols="35"
            rows="1"
            value={description}
            onChange={(e) => {
              setDesc(e.target.value)
            }}
            placeholder="Task description here ..."
          ></textarea>
            
            
          <div className="buttons">
            <div className="button" onClick={()=> {setAdding(false) 
                setName('')
                setDesc('')
                }}>
              <h4>cancel</h4>
            </div>

            <div
              className="button"
              onClick={async () => {
                
                  let json = {
                    "name" : name,
                    "desc" : description,
                    "done" : false
                  }
                 
                  let results = await axios.post(`http://localhost:5000/`,json)
                  if(results.data.succes===false){
                    alert(results.data.data)
                  }
                  
                  setAdding(false)
                  setName('')
                  setDesc('')
              }}
            >
              <h4>add task</h4>
            </div>
          </div>
        </div>
        
        {tasks.map((task) => {
          return (
            <Task
              title={task.name}
              desc={task.desc}
              date= {task.date}
              done={task.done}
              id={task._id}
            />
          )
        })}
      </div>
    </>
  )
}

export default TasksList
