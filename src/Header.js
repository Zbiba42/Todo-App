import axios from 'axios'
import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [TasksNum, SetTasksNum] = useState(' ')
  const getTasksNumber = async () => {
  
    let {data} = await axios.get('http://localhost:5000/getTasksNum')
    SetTasksNum(data.data)
  }
  useEffect(() => {
    getTasksNumber()
  })
  return (
    <>
      <div className="Header">
        <h2>Tasks</h2>
        <h4>you got {TasksNum} tasks coming this week </h4>
      </div>
    </>
  )
}

export default Header
