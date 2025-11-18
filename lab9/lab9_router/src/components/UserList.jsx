import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function UserList() {
    const [users, setUsers] = useState([])
    const fetchUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setUsers(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        fetchUsers()
    },[]) 

  return (
    <div>
        <h2>User List</h2>
        <table border="1" cellSpacing="5">
            <thread>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thread>
                <tbody>
                    {
                        users.map(user=>{
                            return(
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.city}</td>
                                </tr>
 
                            )
                        })
                    }
                </tbody>

        </table>
    </div>
  )
}
