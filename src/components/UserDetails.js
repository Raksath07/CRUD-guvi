import React,{useState} from 'react'
import {data} from '../data'
import {useNavigate} from 'react-router-dom'
function UserDetails() {
    const navigate=useNavigate()
    const [users,setUsers]=useState(data)
    return (
    <div>
          <h1>UserDetails</h1>
    <div className='user-content'>
        {users.map((user,id)=>(
            <div key={id} className='user-card'>
                <h2>{user.name}</h2>
                <h4>Batch:{user.Batch}</h4>
                <h4>Email:{user.email}</h4>
                <h4>Exp:{user.Exp}</h4>
                <div className='user-button'>
                <button
                onClick={()=>{
                    navigate('/editUser',{state:user})
                }}
                >Edit</button>
                <button>Delete</button>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default UserDetails