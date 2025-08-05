//ContextDataUser.jsx
import React, { useContext } from 'react'
import { ContentContext } from './ContextCreate'  // Note: You need to import ContentContext

const ContextDataUser = () => {
    const { User } = useContext(ContentContext);  // Changed from useContent to useContext
    
    return (
        <>
            <h1 className="user-title">User Table</h1>
            <table className="user-table">
                <thead>
                    <tr className="user-table-header">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {User.map((user) => (
                        <tr key={user.id} className="user-table-row">
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ContextDataUser;