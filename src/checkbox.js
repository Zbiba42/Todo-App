import './checkbox.css'
import axios from 'axios'

const CheckBox = ({done,id}) => {
  let classname = 'box notDone'
  if(done){
    classname = 'box done'
  }
  return (
    <>
      <div
      
        className={classname}
        onClick={(e) => {
          if (e.target.className === 'box notDone') {
            e.target.className = 'box done'
            axios.put(`http://localhost:5000/done/${id}`)
          } else if (e.target.className === 'box done') {
            e.target.className = 'box notDone'
            axios.put(`http://localhost:5000/undone/${id}`)

          }else if (e.target.className === 'fa-solid fa-check') {
           
            axios.put(`http://localhost:5000/undone/${id}`)

          }
        }}
      >
        <i className="fa-solid fa-check"></i>
      </div>
    </>
  )
}

export default CheckBox
